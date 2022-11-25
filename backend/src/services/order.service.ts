import DB from '@databases';
import { CreateOrderDto } from '@dtos/orders.dto';
import { HttpException } from '@exceptions/HttpException';
import { Order } from '@interfaces/orders.interface';
import { isEmpty } from '@utils/util';

class OrderService {
  public orders = DB.Orders;

  public async createOrder(orderData: CreateOrderDto): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

    const createOrderData: Order = await this.orders.create({ ...orderData });
    return createOrderData;
  }
}

export default OrderService;
