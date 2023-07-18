import { IsNotEmpty, IsString } from 'class-validator';
export class CreateProductGroupDto {
  //Добавить валидацию
  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly path: string;
}
