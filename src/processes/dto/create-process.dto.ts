import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProcessDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  propertyId: string;
}
