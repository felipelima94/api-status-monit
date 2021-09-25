import { Model } from "mongoose"
import { ResponseRequest } from "../services/ResponseRequest"

export class AbstractRepository {
    private REP: Model<any>
    private responseRequest = new ResponseRequest()
    
    constructor(REP:Model<any>) {
        this.REP = REP
    }

    public async create (data:object) {
        let msg = this.responseRequest.sorryStatus()
        await this.REP.create(data)
        .then(response => {
            msg = this.responseRequest.successStatus(response)
        })
        .catch(err => {
            msg = this.responseRequest.errorStatus(err)
        })
        return msg
    }

    public findAll() {
        return this.REP.find({}).lean().exec()
    }

    public findById(id:string) {
        return this.REP.findById(id).lean().exec()
    }

    public findByFilter(filter:object) {
        return this.REP.find(filter).lean().exec()
    }

    public updateById(id:string, data:object) {
        return this.REP.updateOne({_id: id}, data).exec()
    }

    public updateByFilter(filter:object, data:object) {
        return this.REP.updateMany(filter, data).exec()
    }
    
    public deleteById(id:string) {
        return this.REP.deleteOne({_id: id})
    }
    
    public deleteByFilter(filter:object) {
        return this.REP.deleteMany(filter)
    }
}