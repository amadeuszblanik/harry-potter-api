import { NextFunction, Request, Response } from 'express';
import houseService from '../services/house.service';
import { House } from '../interfaces/house.interface';

class HouseController {
  public service = new houseService();

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllData: House[] = await this.service.findAll();
      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id: string = String(req.params.id);

    try {
      const findOnePersonData: House = await this.service.findById(id);
      res.status(200).json({ data: findOnePersonData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default HouseController;
