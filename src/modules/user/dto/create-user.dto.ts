export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly profile: {
    name: string;
    age: number;
    email: string;
  };
}