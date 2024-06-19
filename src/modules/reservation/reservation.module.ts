import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationService } from './service/reservation.service';
import { ReservationController } from './controller/reservation.service';
import { Reservation, ReservationSchema } from './schema/reservation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }])],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}