import { Schema, model } from 'mongoose'
import { TagSchemaInterface } from '../interface/TagSchemaInterface'

const Tag = new Schema<TagSchemaInterface>({
    name: {type: String, required: true, unique: true}
})

export default model('Tag', Tag)