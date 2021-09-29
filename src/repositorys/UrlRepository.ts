import Url from "../models/Url";
import { AbstractRepository } from "./AbstractRepository";

export class UrlRepository extends AbstractRepository {
    constructor() {
        super(Url)
    }
}