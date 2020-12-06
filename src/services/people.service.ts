import HttpException from '../exceptions/HttpException';
import { People } from '../interfaces/people.interface';
import peopleModel from '../models/people.model';

class PeopleService {
  public model = peopleModel;

  public async findAll(): Promise<People[]> {
    const people: People[] = this.model;
    return people;
  }

  public async findById(idToFind: string): Promise<People> {
    const findElement: People = this.model.find(({ _id }) => _id === idToFind);
    if (!findElement) throw new HttpException(404, 'Person not found');

    return findElement;
  }
}

export default PeopleService;
