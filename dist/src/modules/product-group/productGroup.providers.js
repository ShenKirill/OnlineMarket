"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProviders = void 0;
const productGroup_entity_1 = require("./productGroup.entity");
const constants_1 = require("../../core/constants");
exports.productProviders = [
    {
        provide: constants_1.PRODUCT_REPOSITORY,
        useValue: productGroup_entity_1.ProductGroup,
    },
];
//# sourceMappingURL=productGroup.providers.js.map