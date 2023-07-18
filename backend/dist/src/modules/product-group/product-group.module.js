"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGroupModule = void 0;
const product_group_controller_1 = require("./product-group.controller");
const productGroup_providers_1 = require("./productGroup.providers");
const common_1 = require("@nestjs/common");
const product_group_service_1 = require("./product-group.service");
let ProductGroupModule = exports.ProductGroupModule = class ProductGroupModule {
};
exports.ProductGroupModule = ProductGroupModule = __decorate([
    (0, common_1.Module)({
        providers: [product_group_service_1.ProductGroupService, ...productGroup_providers_1.productProviders],
        controllers: [product_group_controller_1.ProductGroupController],
    })
], ProductGroupModule);
//# sourceMappingURL=product-group.module.js.map