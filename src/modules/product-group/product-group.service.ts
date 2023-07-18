import { UpdateBodyProductGroupDto } from './dto/dtoUpdate/responseUpdateProductGroup.dto';
import { ResponseCreateProductGroupDto } from './dto/dtoCreate/responseCreateProductGroup.dto';
import { ResponseProductGroupDto } from './dto/commonDto/productGroupOneData.dto';
import { Injectable, Inject } from '@nestjs/common';
import { ProductGroup } from './productGroup.entity';
import { CreateProductGroupDto } from './dto/dtoCreate/createProductGroup.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductGroupService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof ProductGroup,
  ) {}

  //TODO добавить DTO в ответ
  async create(
    productGroup: CreateProductGroupDto,
  ): Promise<ResponseCreateProductGroupDto> {
    console.log(productGroup);
    const createdProductGroup =
      await this.productRepository.create<ProductGroup>(productGroup);
    return plainToInstance(ResponseCreateProductGroupDto, createdProductGroup);
  }
  async update(
    id: number,
    body: UpdateBodyProductGroupDto,
  ): Promise<ResponseProductGroupDto | null> {
    const [success, product] =
      await this.productRepository.update<ProductGroup>(body, {
        where: { id },
        returning: true,
      });

    if (!success) return null;
    return plainToInstance(ResponseProductGroupDto, product[0]);
  }

  //TODO добавить DTO в ответ
  async findOneById(id: number): Promise<ProductGroup> {
    return await this.productRepository.findOne<ProductGroup>({
      where: { id },
    });
  }
}
