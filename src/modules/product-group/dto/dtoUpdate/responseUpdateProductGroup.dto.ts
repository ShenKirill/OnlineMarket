import { IsString } from 'class-validator';

export class UpdateBodyProductGroupDto {
  //Добавить валидацию
  @IsString()
  path: string;
  @IsString()
  type: string;
}
