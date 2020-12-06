import HttpException from '../exceptions/HttpException';
import { House } from '../interfaces/house.interface';
import houseModel from '../models/house.model';

class HouseService {
  public model = houseModel;

  public async findAll(): Promise<House[]> {
    const house: House[] = this.model;
    return house;
  }

  public async findById(idToFind: string): Promise<House> {
    const findElement: House = this.model.find(({ _id }) => _id === idToFind);
    if (!findElement) throw new HttpException(404, 'House not found');

    return findElement;
  }
}

export default HouseService;
