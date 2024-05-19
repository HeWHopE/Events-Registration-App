import { IsISO8601, IsInt, IsNotEmpty } from 'class-validator';
import { IsNotEmptyString } from '../../validators/IsNotEmptyString';

export class CreateParticipantDto {
  @IsNotEmptyString()
  fullName: string;

  @IsNotEmptyString()
  email: string;

  @IsNotEmptyString()
  source: string;

  @IsNotEmptyString()
  @IsISO8601()
  dob: string;

  @IsInt()
  @IsNotEmpty()
  eventId: number;
}
