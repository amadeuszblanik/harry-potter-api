import 'dotenv/config';
import App from './app';
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import validateEnv from './utils/validateEnv';
import PeopleRoute from './routes/people.route';
import HouseRoute from './routes/house.route';
import SpellRoute from './routes/spell.route';
import SortingHatRoute from './routes/sorting-hat.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new PeopleRoute(),
  new HouseRoute(),
  new SpellRoute(),
  new SortingHatRoute(),
]);

app.listen();
