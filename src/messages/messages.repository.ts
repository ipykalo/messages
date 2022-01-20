import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessageRepository {

  findAll(): Promise<any> {
    return readFile("messages.json", 'utf-8')
      .then(fileData => {
        const file = JSON.parse(fileData || '{}');
        return file;
      });
  }

  findOne(id: string): Promise<any> {
    return readFile('messages.json', 'utf-8')
      .then(fileData => {
        const file = JSON.parse(fileData || '{}');
        return file[id];
      });
  }

  create(msg: string): Promise<any> {
    const id = parseInt((Math.random() * 1000).toFixed(4));
    return readFile('messages.json', 'utf-8')
      .then(fileData => {
        const data = {
          ...JSON.parse(fileData || "{}"),
          [id]: {
            id: id,
            content: msg
          }
        }
        return writeFile("messages.json", JSON.stringify(data), 'utf-8');
      })
      .catch(err => console.log(err));
  }
}