import HttpException from '../exceptions/HttpException';
import { People } from '../interfaces/people.interface';
import peopleModel from '../models/people.model';

class PeopleService {
  public people = peopleModel;

  public async findAll(): Promise<People[]> {
    const people: People[] = this.people;
    return people;
  }

  public async findById(idToFind: string): Promise<People> {
    const findData: People = this.people.find(({ _id }) => _id === idToFind);
    if (!findData) throw new HttpException(404, 'Person not found');

    return findData;
  }
}

export default PeopleService;
