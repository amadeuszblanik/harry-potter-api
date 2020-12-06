import { Router } from 'express';
import PeopleController from '../controllers/people.controller';
import Route from '../interfaces/routes.interface';

class PeopleRoute implements Route {
  public path = '/people';
  public router = Router();
  public usersController = new PeopleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getAll);
    this.router.get(`${this.path}/:id`, this.usersController.getById);
  }
}

export default PeopleRoute;
