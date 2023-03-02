import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAIService {
  private readonly model = process.env.OPENAI_API_MODEL;
  private readonly openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.openai = new OpenAIApi(configuration);
  }

  async ask(message: string): Promise<string> {
    const completion = await this.openai.createCompletion({
      model: this.model,
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      echo: true,
      best_of: 1,
      prompt: message,
    });

    return completion.data.choices[0].text;
  }
}
