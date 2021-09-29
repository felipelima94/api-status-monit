import { CronJob } from "cron";
import { response } from "express";
import https from "https";
import { UrlRepository } from "../repositorys/UrlRepository";

export class HealthCheack {
    private urlRepository = new UrlRepository()
    
    constructor() {
        new CronJob('* * * * *', async () => {
                let res:any = await this.urlRepository.findByFilter({cron: 60})
                res.forEach((data: { _id: string, url: string; }) => {
                    this.healthCheak(data._id, data.url)
                });
            },
            null, 
            true, 
            'America/Sao_Paulo'
        )
        
        new CronJob('*/5 * * * *', async () => {
            let res:any = await this.urlRepository.findByFilter({cron: 300})
            res.forEach((data: { _id: string, url: string; }) => {
                this.healthCheak(data._id, data.url)
            });
        },
        null, 
        true, 
        'America/Sao_Paulo'
    )
    }

    private healthCheak(id:string, url:string) {
        let data: object
        let date: Date = new Date()
        https.get(url, response => {
            response.on('data', (chunk) => {
                data = {last_status: 'UP', last_ok: date, last_check: date}
            })

            response.on('end', () => {
                this.updateStatus(id, data)
                console.log(`Date: ${date} | Url: ${url}`)
            })

        }).on("error", (error) => {
            data = {last_status: 'DOWN', last_check: date}
            this.updateStatus(id, data)
            console.warn(`Date: ${date} | Url: ${url}`)
        });

    }

    private updateStatus(id:string, data:object) {
        this.urlRepository.updateById(id, data)
        .catch(error => console.error(error))
    }

}