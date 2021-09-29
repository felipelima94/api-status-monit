import Tag from "../models/Tag";
import { AbstractRepository } from "./AbstractRepository";

export class TagRepository extends AbstractRepository {
    constructor() {
        super(Tag)
    }
}