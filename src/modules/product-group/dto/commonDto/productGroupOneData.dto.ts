import { IsNumber, IsString } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class ResponseProductGroupDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly type: string;

  @Expose()
  @IsString()
  readonly path: string;

  @Expose()
  @Type(() => Date)
  createdAt: Date;

  // @Transform(({ value }) => `${value} ${value.id}`)
  // text_id: string;
}
