import { HouseName } from '../interfaces/house.interface';
import { houseNamesModel } from '../models/house.model';
import randomNumber from '../utils/randomNumber';

class SortingHatService {
  public model = houseNamesModel;

  public async random(): Promise<HouseName> {
    const houseMaxIds = this.model.length - 1;
    const houseRandomId = randomNumber(houseMaxIds);
    const randomHouse = this.model[houseRandomId];

    return randomHouse;
  }
}

export default SortingHatService;
