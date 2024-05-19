import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ParticipantService } from '../participant/participant.service';

@Module({
  controllers: [EventController],
  providers: [EventService, PrismaService, ParticipantService],
})
export class EventModule {}
