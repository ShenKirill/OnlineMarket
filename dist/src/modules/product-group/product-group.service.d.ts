import { UpdateBodyProductGroupDto } from './dto/dtoUpdate/responseUpdateProductGroup.dto';
import { ResponseCreateProductGroupDto } from './dto/dtoCreate/responseCreateProductGroup.dto';
import { ResponseProductGroupDto } from './dto/commonDto/productGroupOneData.dto';
import { ProductGroup } from './productGroup.entity';
import { CreateProductGroupDto } from './dto/dtoCreate/createProductGroup.dto';
export declare class ProductGroupService {
    private readonly productRepository;
    constructor(productRepository: typeof ProductGroup);
    create(productGroup: CreateProductGroupDto): Promise<ResponseCreateProductGroupDto>;
    update(id: number, body: UpdateBodyProductGroupDto): Promise<ResponseProductGroupDto | null>;
    findOneById(id: number): Promise<ProductGroup>;
}
