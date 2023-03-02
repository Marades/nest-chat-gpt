import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { OpenAIService } from './openai/openai.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly openAIService: OpenAIService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ask')
  async ask(@Query('quesition') quesition: string) {
    const response = await this.openAIService.ask(quesition);
    return response;
  }
}
