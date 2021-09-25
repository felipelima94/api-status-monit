import { Schema } from "mongoose";

export interface UrlSchemaInterface {
    name: string,
    url: string,
    category: Schema.Types.ObjectId,
    tags: [Schema.Types.ObjectId],
    cron: number,
    last_ok: Date,
    last_check: Date
}
