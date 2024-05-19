import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ParticipantService {
  constructor(private readonly prismaService: PrismaService) {}

  private async isParticipantExists(id: number): Promise<boolean> {
    const participant = await this.prismaService.participant.findUnique({
      where: { id },
    });

    if (!participant)
      throw new NotFoundException('A participant with this Id not found.');

    return true;
  }

  private async isParticipantByEmailExists(email: string): Promise<boolean> {
    const participant = await this.prismaService.participant.findUnique({
      where: { email },
    });

    if (participant)
      throw new NotFoundException(
        'A participant with this email already exists.',
      );

    return true;
  }

  async create(body: CreateParticipantDto) {
    await this.isParticipantByEmailExists(body.email);
    const participant = await this.prismaService.participant.create({
      data: {
        ...body,
      },
    });

    return participant;
  }

  async findAll() {
    return await this.prismaService.participant.findMany();
  }

  async findOne(id: number) {
    await this.isParticipantExists(id);
    return await this.prismaService.participant.findUnique({ where: { id } });
  }

  async update(id: number, body: UpdateParticipantDto) {
    await this.isParticipantExists(id);

    return await this.prismaService.participant.update({
      where: { id },
      data: {
        ...body,
      },
    });
  }

  async remove(id: number) {
    await this.isParticipantExists(id);
    await this.prismaService.participant.delete({ where: { id } });
    return;
  }
}
