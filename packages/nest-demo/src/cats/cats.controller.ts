import {
  Controller,
  Get,
  Post,
  Header,
  Param,
  Body,
  Res,
  Put,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import {
  Cat,
  createNewCat,
  findCat,
  updateCat,
} from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    const cat = await createNewCat(createCatDto);
    this.catsService.create(createCatDto);
    return cat;
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    updateCat(id, updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Get(':id')
  findOne(
    @Param() params: any,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log(params.id);
    const cat = findCat(params.id);

    if (cat) {
      response.send(cat);
    } else {
      response.status(HttpStatus.NOT_FOUND);
    }
  }
}
