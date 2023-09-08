import { Controller, Get, Post, Header } from '@nestjs/common';

type ICat = {
  id: number;
  name: string;
  breed: string;
};

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  findAll(): ICat[] {
    return [
      {
        id: 1,
        name: 'Hello',
        breed: 'a',
      },
      {
        id: 2,
        name: 'World',
        breed: 'b',
      },
    ];
  }
}
