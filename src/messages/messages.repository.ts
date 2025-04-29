import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents); //   12: { content: "hi there!", id: 12}
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content }; //  { content: "hi there!", id: 12}

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
