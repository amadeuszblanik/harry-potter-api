export type HouseName = 'Gryffindor' | 'Ravenclaw' | 'Slytherin' | 'Hufflepuff';

export interface House {
  _id: string;
  name: HouseName;
  mascot: string;
  headOfHouse: string;
  houseGhost: string;
  founder: string;
  __v: number;
  school: string;
  members: string[];
  values: string[];
  colors: string[];
}
