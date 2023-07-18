import { ProductGroupService } from './modules/product-group/product-group.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductGroupModule } from './modules/product-group/product-group.module';
import { ProductGroupController } from './modules/product-group/product-group.controller';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProductGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
