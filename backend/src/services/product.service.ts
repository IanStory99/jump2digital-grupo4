import DB from '@databases';
import { Product } from '@interfaces/product.interface';

class ProductService {
  public products = DB.Products;

  public async findAllProductsBySupermarketId(supermarketId: number): Promise<Product> {
    const allProductsBySupermarketId: Product[] = await this.products.findAll({ where: { supermarketId: supermarketId } });
  }

  public async findAllProducts(): Promise<Product[]> {
    const allProducts: Product[] = await this.products.findAll();
    return allProducts;
  }
}

export default ProductService;
