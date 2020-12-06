import { NextFunction, Request, Response } from 'express';
import peopleService from '../services/people.service';
import { People } from '../interfaces/people.interface';

class PeopleController {
  public peopleService = new peopleService();

  public getPeople = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllPeopleData: People[] = await this.peopleService.findAllPeople();
      res.status(200).json({ data: findAllPeopleData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const nameToFind: string = String(req.params.name);

    try {
      const findOnePersonData: People = await this.peopleService.findPersonByName(
        nameToFind
      );
      res.status(200).json({ data: findOnePersonData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
