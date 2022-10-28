import { BagType } from "./bagType";
import { Present } from "./present";
import { PresentType } from "./presentType";

export class Bag {
  maxWeight: number;
  bagType: BagType;
  presents: Present[];

  constructor(bagMaxWeight: number, bagType: BagType) {
    this.maxWeight = bagMaxWeight;
    this.bagType = bagType;
    this.presents = [];
  }

  addPresents(present: Present) {
    if (
      (present.presentType === PresentType.Soft &&
        this.bagType === BagType.Canvas) ||
      present.presentType === PresentType.Hard
    ) {
      if (present.weight + this.totalWeight() < this.maxWeight) {
        this.presents.push(present);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  totalWeight() {
    let total;
    this.presents.forEach((present) => {
      present.weight += total;
    });
    return total;
  }
}
