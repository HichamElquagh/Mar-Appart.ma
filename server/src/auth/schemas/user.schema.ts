

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({enum: ['admin', 'client'], default: 'client'  })
    role: string;

    @Prop({ required: true })
    phone: number;

    @Prop({ required: true , unique: true ,isemail: true})
    email: string;

    @Prop({ required: true })
    password: string;

}

export const userSchema = SchemaFactory.createForClass(User);
