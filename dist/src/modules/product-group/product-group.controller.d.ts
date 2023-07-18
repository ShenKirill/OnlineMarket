import { ResponseProductGroupDto } from './dto/commonDto/productGroupOneData.dto';
import { ResponseCreateProductGroupDto } from './dto/dtoCreate/responseCreateProductGroup.dto';
import { IdProductGroupDto } from './dto/commonDto/productGroupId.dto';
import { CreateProductGroupDto } from './dto/dtoCreate/createProductGroup.dto';
import { UpdateBodyProductGroupDto } from './dto/dtoUpdate/responseUpdateProductGroup.dto';
import { ProductGroupService } from './product-group.service';
export declare class ProductGroupController {
    private readonly productService;
    constructor(productService: ProductGroupService);
    getProduct({ id }: IdProductGroupDto): Promise<ResponseProductGroupDto>;
    create(dto: CreateProductGroupDto): Promise<ResponseCreateProductGroupDto>;
    update({ id }: IdProductGroupDto, body: UpdateBodyProductGroupDto): Promise<ResponseProductGroupDto>;
}
