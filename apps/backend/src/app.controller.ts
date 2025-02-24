import { Render } from '@inertify/nest';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
