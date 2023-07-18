import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'ProductGroup' })
export class ProductGroup extends Model<ProductGroup> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  path: string;
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    field: 'created_at',
  })
  createdAt: string;
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    field: 'updated_at',
  })
  updatedAt: string;
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  deleted_at: string;
}
