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
exports.ProductGroupController = void 0;
const productGroupId_dto_1 = require("./dto/commonDto/productGroupId.dto");
const createProductGroup_dto_1 = require("./dto/dtoCreate/createProductGroup.dto");
const responseUpdateProductGroup_dto_1 = require("./dto/dtoUpdate/responseUpdateProductGroup.dto");
const common_1 = require("@nestjs/common");
const product_group_service_1 = require("./product-group.service");
let ProductGroupController = exports.ProductGroupController = class ProductGroupController {
    constructor(productService) {
        this.productService = productService;
    }
    getProduct({ id }) {
    }
    create(dto) {
        return this.productService.create(dto);
    }
    async update({ id }, body) {
        const updatedProduct = await this.productService.update(id, body);
        if (!updatedProduct) {
            throw new common_1.BadRequestException('Продукт не найден');
        }
        return updatedProduct;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productGroupId_dto_1.IdProductGroupDto]),
    __metadata("design:returntype", Promise)
], ProductGroupController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProductGroup_dto_1.CreateProductGroupDto]),
    __metadata("design:returntype", Promise)
], ProductGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productGroupId_dto_1.IdProductGroupDto,
        responseUpdateProductGroup_dto_1.UpdateBodyProductGroupDto]),
    __metadata("design:returntype", Promise)
], ProductGroupController.prototype, "update", null);
exports.ProductGroupController = ProductGroupController = __decorate([
    (0, common_1.Controller)('productGroup'),
    __metadata("design:paramtypes", [product_group_service_1.ProductGroupService])
], ProductGroupController);
//# sourceMappingURL=product-group.controller.js.map