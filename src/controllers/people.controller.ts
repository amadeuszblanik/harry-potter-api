import { NextFunction, Request, Response } from 'express';
import PeopleService from '../services/people.service';
import { People } from '../interfaces/people.interface';

class PeopleController {
  public service = new PeopleService();

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPeopleData: People[] = await this.service.findAll();
      res.status(200).json({ data: findAllPeopleData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = String(req.params.id);

    try {
      const findOnePersonData: People = await this.service.findById(id);
      res.status(200).json({ data: findOnePersonData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const name: string = String(req.params.name);

    try {
      const findOnePersonData: People = await this.service.findByName(name);
      res.status(200).json({ data: findOnePersonData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
