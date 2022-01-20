import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessageService {

  constructor(private messageRepository: MessageRepository) { }

  createMessage(msg: string): Promise<any> {
    return this.messageRepository.create(msg);
  }

  findAll(): Promise<any> {
    return this.messageRepository.findAll();
  }

  findOne(id: string): Promise<any> {
    return this.messageRepository.findOne(id);
  }
}