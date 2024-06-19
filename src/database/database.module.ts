import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI)],
})
export class DatabaseModule {}
