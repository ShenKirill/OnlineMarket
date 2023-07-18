import { Model } from 'sequelize-typescript';
export declare class ProductGroup extends Model<ProductGroup> {
    id: number;
    type: string;
    path: string;
    createdAt: string;
    updatedAt: string;
    deleted_at: string;
}
