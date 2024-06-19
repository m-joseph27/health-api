import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Profile, ProfileSchema } from './profile.schema';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: ProfileSchema, required: true })
  profile: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);