import Category from "../models/Category";
import { AbstractRepository } from "./AbstractRepository";

export class CategorayRepository extends AbstractRepository {
    constructor() {
        super(Category)
    }
}