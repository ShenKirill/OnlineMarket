import { ProductGroupController } from './product-group.controller';
import { productProviders } from './productGroup.providers';
import { Module } from '@nestjs/common';
import { ProductGroupService } from './product-group.service';

@Module({
  providers: [ProductGroupService, ...productProviders],
  controllers: [ProductGroupController], // ProductGroupController zdes'
})
export class ProductGroupModule {}
