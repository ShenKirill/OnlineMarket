"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGroupService = void 0;
const responseCreateProductGroup_dto_1 = require("./dto/dtoCreate/responseCreateProductGroup.dto");
const productGroupOneData_dto_1 = require("./dto/commonDto/productGroupOneData.dto");
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const class_transformer_1 = require("class-transformer");
let ProductGroupService = exports.ProductGroupService = class ProductGroupService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(productGroup) {
        console.log(productGroup);
        const createdProductGroup = await this.productRepository.create(productGroup);
        return (0, class_transformer_1.plainToInstance)(responseCreateProductGroup_dto_1.ResponseCreateProductGroupDto, createdProductGroup);
    }
    async update(id, body) {
        console.log(id, 'id');
        const [success, product] = await this.productRepository.update(body, {
            where: { id },
            returning: true,
        });
        console.log(success, 'success');
        console.log(product, 'product');
        if (!success)
            return null;
        return (0, class_transformer_1.plainToInstance)(productGroupOneData_dto_1.ResponseProductGroupDto, product[0]);
    }
    async findOneById(id) {
        return await this.productRepository.findOne({
            where: { id },
        });
    }
};
exports.ProductGroupService = ProductGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ProductGroupService);
//# sourceMappingURL=product-group.service.js.map