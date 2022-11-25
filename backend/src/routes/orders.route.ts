import { Router } from 'express';
import OrdersController from '@controllers/order.controller';
import { CreateOrderDto } from '@dtos/orders.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class OrdersRoute implements Routes {
  public path = '/orders';
  public router = Router();
  public ordersController = new OrdersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateOrderDto, 'body'), this.ordersController.createOrder);
  }
}

export default OrdersRoute;
