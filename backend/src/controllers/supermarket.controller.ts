import { NextFunction, Request, Response } from 'express';
import { SuperMarket } from '@interfaces/supermarket.interface';
import supermarketService from '@services/supermarket.service';

class SupermarketController {
  public supermarketService = new supermarketService();

  public getSupermarkets = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllSupermarketsData: SuperMarket[] = await this.supermarketService.findAllSupermarkets();

      res.status(200).json({ data: findAllSupermarketsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default SupermarketController;
