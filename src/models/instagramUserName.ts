import { Schema, Document, model } from "mongoose";

export interface IInstagramUserName extends Document{
    userName: string
}

export const instagramUserNameSchema = new Schema({
    userName:{
        type: String, require: true
    },
}, { timestamps: true, collection: 'instagramUserName'})

export const InstagramUserName = model<IInstagramUserName>('InstagramUserName', instagramUserNameSchema)