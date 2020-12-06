import { NextFunction, Request, Response } from 'express';
import SpellService from '../services/spell.service';
import { Spell } from '../interfaces/spell.interface';

class SpellController {
  public service = new SpellService();

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllData: Spell[] = await this.service.findAll();
      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = String(req.params.id);

    try {
      const findOnePersonData: Spell = await this.service.findById(id);
      res.status(200).json({ data: findOnePersonData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default SpellController;
