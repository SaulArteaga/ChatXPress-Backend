import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        require: true,
        unique: true,
    },
    content: {
        type: String,
        require: true,
    },
    idUser: {
        type: Schema.Types.ObjectId,
        require: true,
        unique: true,
    },
    dateCreated: {
        type: Date,
        require: true,
    }

})

export const message = model('message', messageSchema)