import { NextFunction, Request, Response } from 'express';
import productService from '@services/product.service';
import { Product } from '@/interfaces/products.interface';

class ProductController {
  public productService = new productService();

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllProductsData: Product[] = await this.productService.findAllProducts();

      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
