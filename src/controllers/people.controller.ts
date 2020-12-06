import { NextFunction, Request, Response } from 'express';
import peopleService from '../services/people.service';
import { People } from '../interfaces/people.interface';

class PeopleController {
  public peopleService = new peopleService();

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPeopleData: People[] = await this.peopleService.findAll();
      res.status(200).json({ data: findAllPeopleData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = String(req.params.id);

    try {
      const findOnePersonData: People = await this.peopleService.findById(id);
      res.status(200).json({ data: findOnePersonData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
