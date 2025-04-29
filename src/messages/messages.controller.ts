import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    //   DO NOT DO ON REAL APP
    //   USE DEPENDENCY INJECTION
    this.messageService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log('body', body);
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log('id', id);
    return this.messageService.findOne(id);
  }
}
