import { Body, Controller, Get } from '@nestjs/common';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('/get')
  async createChat(@Body('context') context: string) {
    return await this.chatsService.createChat(context);
  }
}
