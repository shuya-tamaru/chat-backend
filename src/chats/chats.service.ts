import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { openai } from './config/openAiConfig';
dotenv.config();

@Injectable()
export class ChatsService {
  async createChat(context: string) {
    const response = await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: context }],
      })
      .then((res) => res.data);
    const answer = response.choices[0].message?.content;
    return answer;
  }
}
