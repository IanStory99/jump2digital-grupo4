import { Router } from 'express';
import ProductsController from '@controllers/product.controller';
import { Routes } from '@interfaces/routes.interface';

class SupermarketsRoute implements Routes {
  public path = '/products';
  public router = Router();
  public productsController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productsController.getProducts);
  }
}

export default SupermarketsRoute;
