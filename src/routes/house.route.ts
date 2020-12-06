import { Router } from 'express';
import Controller from '../controllers/house.controller';
import Route from '../interfaces/routes.interface';

class HouseRoute implements Route {
  public path = '/house';
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

export default HouseRoute;
