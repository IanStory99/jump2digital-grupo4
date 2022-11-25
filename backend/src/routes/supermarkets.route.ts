import { Router } from 'express';
import SupermarketsController from '@controllers/supermarket.controller';
import { Routes } from '@interfaces/routes.interface';

class SupermarketsRoute implements Routes {
  public path = '/supermarkets';
  public router = Router();
  public supermarketsController = new SupermarketsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.supermarketsController.getSupermarkets);
  }
}

export default SupermarketsRoute;
