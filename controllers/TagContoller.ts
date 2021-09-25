import { Router } from 'express'
import { TagRepository } from '../repositorys/TagRepository'

export class TagController {
    private repository = new TagRepository()
    public router = Router()

    constructor() {
        this.router
        .get('/', async (req:any, res:any) => {
            res.json( await this.repository.findAll() )
        }).get('/:id', async (req:any, res:any) => {
            res.json( await this.repository.findById(req.params.id) )
        }).post('/filter', async (req:any, res:any) => {
            res.json( await this.repository.findByFilter(req.body) )
        }).post('/', async (req:any, res:any) => {
            res.json( await this.repository.create(req.body) )
        }).put('/:id', async (req:any, res:any) => {
            res.json( await this.repository.updateById(req.params.id, req.body) )
        }).delete('/:id', async (req:any, res:any) => {
            res.json( await this.repository.deleteById(req.params.id))
        })
    }

    public getRoutes() {
        return this.router
    }
}