import HttpException from '../exceptions/HttpException';
import { Spell } from '../interfaces/spell.interface';
import spellModel from '../models/spell.model';

class SpellService {
  public model = spellModel;

  public async findAll(): Promise<Spell[]> {
    const spells: Spell[] = this.model;
    return spells;
  }

  public async findById(idToFind: string): Promise<Spell> {
    const findElement: Spell = this.model.find(({ _id }) => _id === idToFind);
    if (!findElement) throw new HttpException(404, 'Spell not found');

    return findElement;
  }
}

export default SpellService;
