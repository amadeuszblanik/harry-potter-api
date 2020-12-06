import HttpException from '../exceptions/HttpException';
import { People } from '../interfaces/people.interface';
import peopleModel from '../models/people.model';

class PeopleService {
  public people = peopleModel;

  public async findAllPeople(): Promise<People[]> {
    const people: People[] = this.people;
    return people;
  }

  public async findPersonByName(nameToFind: string): Promise<People> {
    const findUser: People = this.people.find(({ name }) =>
      name.includes(nameToFind)
    );
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }
}

export default PeopleService;
