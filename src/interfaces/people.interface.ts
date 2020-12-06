import { HouseName } from './house.interface';

export interface People {
  _id: string;
  name: string;
  wand?: string;
  role?: string;
  house?: HouseName;
  school?: string;
  __v: number;
  patronus?: string;
  alias?: string;
  boggart?: string;
  animagus?: string;
  ministryOfMagic: boolean;
  orderOfThePhoenix: boolean;
  dumbledoresArmy: boolean;
  deathEater: boolean;
  bloodStatus: string;
  species: string;
}
