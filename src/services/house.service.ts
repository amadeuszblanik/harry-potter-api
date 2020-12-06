import HttpException from '../exceptions/HttpException';
import { House } from '../interfaces/house.interface';
import houseModel from '../models/house.model';

class PeopleService {
  public house = houseModel;

  public async findAll(): Promise<House[]> {
    const house: House[] = this.house;
    return house;
  }

  public async findById(idToFind: string): Promise<House> {
    const findElement: House = this.house.find(({ _id }) => _id === idToFind);
    if (!findElement) throw new HttpException(409, "You're not user");

    return findElement;
  }
}

export default PeopleService;
