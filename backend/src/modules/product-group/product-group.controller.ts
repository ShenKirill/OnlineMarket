import { ResponseProductGroupDto } from './dto/commonDto/productGroupOneData.dto';
import { ResponseCreateProductGroupDto } from './dto/dtoCreate/responseCreateProductGroup.dto';
import { IdProductGroupDto } from './dto/commonDto/productGroupId.dto';
import { CreateProductGroupDto } from './dto/dtoCreate/createProductGroup.dto';
import { UpdateBodyProductGroupDto } from './dto/dtoUpdate/responseUpdateProductGroup.dto';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductGroupService } from './product-group.service';

@Controller('productGroup')
export class ProductGroupController {
  constructor(private readonly productService: ProductGroupService) {}
  // TODO Написать параметризированный get и простой get запрос
  @Get()
  getProduct(
    @Param() { id }: IdProductGroupDto,
  ): Promise<ResponseProductGroupDto> {
    return this.productService.findOneById(id)
  }
  @Post()
  create(
    @Body() dto: CreateProductGroupDto,
  ): Promise<ResponseCreateProductGroupDto> {
    return this.productService.create(dto);
  }
  @Patch('/:id')
  async update(
    // Указывать в декораторе параметр явно, если не пользуюсь ДТО
    @Param() { id }: IdProductGroupDto,
    @Body() body: UpdateBodyProductGroupDto,
  ): Promise<ResponseProductGroupDto> {
    const updatedProduct = await this.productService.update(id, body);
    if (!updatedProduct) {
      throw new BadRequestException('Продукт не найден');
    }

    return updatedProduct;
  }
}
