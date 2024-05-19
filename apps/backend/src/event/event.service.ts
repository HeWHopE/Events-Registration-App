import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {} // Properly inject PrismaService

  private async isEventExists(id: number): Promise<boolean> {
    const event = await this.prismaService.event.findUnique({ where: { id } });

    if (!event) throw new NotFoundException('An event with this Id not found.');

    return true;
  }

  async create(body: CreateEventDto) {
    try {
      const event = await this.prismaService.event.create({
        data: { ...body },
      });
      return event;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prismaService.event.findMany();
    } catch (error) {
      console.error('Error finding events:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    await this.isEventExists(id);
    return await this.prismaService.event.findUnique({ where: { id } });
  }

  async update(id: number, body: UpdateEventDto) {
    await this.isEventExists(id);

    const event = await this.prismaService.event.update({
      where: { id },
      data: {
        ...body,
      },
    });

    return event;
  }

  async remove(id: number) {
    await this.isEventExists(id);

    await this.prismaService.event.delete({ where: { id } });
    return;
  }
}
