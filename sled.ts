import { Bag } from "./bag";
import { BagType } from "./bagType";
import { Present } from "./present";
import { Santa } from "./santa";

export class Sled {
  santa: Santa;
  bags: Bag[];

  constructor(sledSanta: Santa) {
    this.santa = sledSanta;
    this.bags = [];
  }

  addBag(bag: Bag) {
    this.bags.push(bag);
  }

  setSanta(newSanta: Santa) {
    this.santa = newSanta;
  }

  addPresentAndNewBagIfNeeded(present: Present) {
    this.bags.forEach((bag) => {
      if (bag.addPresents(present) === false) {
        const newBag = new Bag(10, BagType.Canvas);
        newBag.addPresents(present);
        this.addBag(newBag);
      }
    });
  }
}
