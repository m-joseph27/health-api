export class CreateReservationDto {
  readonly userId: string;
  readonly date: Date;
  readonly notes?: string;
}