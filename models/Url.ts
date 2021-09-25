import { Schema, model } from 'mongoose';
import { UrlSchemaInterface } from '../interface/UrlSchemaInterface';

const Url = new Schema<UrlSchemaInterface>({
    name: { type: String },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    cron: { type: Number, required: true },
    last_ok: { type: Date },
    last_check: { type: Date, required: true, default: new Date() }
})

export default model('Url', Url)