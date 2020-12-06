import { Router } from 'express';
import Controller from '../controllers/spell.controller';
import Route from '../interfaces/routes.interface';

class SpellRoute implements Route {
  public path = '/spell';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getAll);
    this.router.get(`${this.path}/id/:id`, this.controller.getById);
    this.router.get(`${this.path}/search/:name`, this.controller.getByName);
  }
}

export default SpellRoute;
