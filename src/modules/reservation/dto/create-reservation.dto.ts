export class CreateReservationDto {
  readonly userId: string;
  readonly doctorId: string;
  readonly date: Date;
  readonly notes?: string;
}