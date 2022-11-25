import { IsArray, IsJSON } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  public products: Array<JSON>;

  @IsJSON()
  public supermarket: JSON;

  @IsJSON()
  public user: JSON;
}
