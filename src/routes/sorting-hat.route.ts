import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import SortingHatController from '../controllers/sorting-hat.controller';

class SortingHatRoute implements Route {
  public path = '/sorting-hat';
  public router = Router();
  public controller = new SortingHatController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.random);
  }
}

export default SortingHatRoute;
