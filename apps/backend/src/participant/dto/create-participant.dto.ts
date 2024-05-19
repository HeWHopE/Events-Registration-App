import { IsNotEmptyString } from '../../validators/IsNotEmptyString';

export class CreateParticipantDto {
  @IsNotEmptyString()
  fullName: string;

  @IsNotEmptyString()
  email: string;

  @IsNotEmptyString()
  heardFrom: string;
}
