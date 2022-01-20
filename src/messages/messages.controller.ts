import { CreateMessageDto } from './dtos/create-message.dto';
import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor(private messageService: MessageService) { }

  @Get()
  getMesseges() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.createMessage(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id)
      .then(msg => {
        if (!msg) {
          throw new NotFoundException('Message not found');
        }
        return msg;
      });
  }
}
