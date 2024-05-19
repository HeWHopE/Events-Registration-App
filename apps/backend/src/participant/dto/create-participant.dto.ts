import { IsISO8601 } from 'class-validator';
import { IsNotEmptyString } from '../../validators/IsNotEmptyString';

export class CreateParticipantDto {
  @IsNotEmptyString()
  fullName: string;

  @IsNotEmptyString()
  email: string;

  @IsNotEmptyString()
  heardFrom: string;

  @IsNotEmptyString()
  @IsISO8601()
  dateOfBirth: string;
}
