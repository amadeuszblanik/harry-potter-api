import { NextFunction, Request, Response } from 'express';
import SortingHatService from '../services/sorting-hat.service';
import { HouseName } from '../interfaces/house.interface';

class SortingHatController {
  public service = new SortingHatService();

  public random = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sortedHatData: HouseName = await this.service.random();
      res.status(200).json({ data: sortedHatData, message: 'random' });
    } catch (error) {
      next(error);
    }
  };
}

export default SortingHatController;
