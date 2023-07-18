import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class IdProductGroupDto {
  //Добавить валидацию
  @Type(() => Number)
  @IsNumber()
  id: number;
}
