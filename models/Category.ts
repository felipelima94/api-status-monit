import { Schema, model } from "mongoose"
import { CategorySchemaInterface } from "../interface/CategorySchemaInterface"

const Category = new Schema<CategorySchemaInterface>({
    name: {type: String, required: true}
})

export default model('Category', Category)