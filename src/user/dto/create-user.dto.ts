import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fristName: string;
  @IsString()
  lastName: string;
  @IsBoolean()
  isActive: boolean;
}
