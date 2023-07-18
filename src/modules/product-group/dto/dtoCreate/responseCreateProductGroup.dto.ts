import { IsNumber, IsString } from 'class-validator';
import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class ResponseCreateProductGroupDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly type: string;

  @IsString()
  readonly path: string;

  // @Transform(({ value }) => `${value} ${value.id}`)
  // text_id: string;
}
