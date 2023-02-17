import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  phone: number;

  @Prop({ type: String, required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
