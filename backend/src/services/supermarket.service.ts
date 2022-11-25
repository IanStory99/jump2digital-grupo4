import DB from '@databases';
import { SuperMarket } from '@interfaces/supermarket.interface';

class SupermarketService {
  public supermarkets = DB.Supermarkets;

  public async findAllSupermarkets(): Promise<SuperMarket[]> {
    const allSupermarkets: SuperMarket[] = await this.supermarkets.findAll();
    return allSupermarkets;
  }
}

export default SupermarketService;
