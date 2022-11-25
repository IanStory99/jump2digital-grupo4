import { NextFunction, Request, Response } from 'express';
import { CreateOrderDto } from '@dtos/orders.dto';
import { Order } from '@interfaces/orders.interface';
import orderService from '@services/order.service';

class OrdersController {
  public orderService = new orderService();

  public createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orderData: CreateOrderDto = req.body;
      const createOrderData: Order = await this.orderService.createOrder(orderData);

      res.status(201).json({ data: createOrderData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;
