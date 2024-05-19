import { IsISO8601 } from 'class-validator';
import { IsNotEmptyString } from '../../validators/IsNotEmptyString';

export class CreateEventDto {
  @IsNotEmptyString()
  title: string;

  @IsNotEmptyString()
  description: string;

  @IsNotEmptyString()
  organizer: string;

  @IsNotEmptyString()
  @IsISO8601()
  eventDate: string;
}
