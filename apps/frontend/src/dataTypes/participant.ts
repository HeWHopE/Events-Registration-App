export interface IParticipant {
  id?: number;
  fullName: string;
  eventId: number;
  email: string;
  source: string;
  dob: string;
  registeredAt?: string;
}
