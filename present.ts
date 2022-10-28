import { PresentType } from "./presentType";

export class Present {
  name: string;
  weight: number;
  presentType: PresentType;

  constructor(
    presentName: string,
    presentWeight: number,
    presentType: PresentType
  ) {
    this.name = presentName;
    this.weight = presentWeight;
    this.presentType = presentType;
  }

  getPresentType(): PresentType {
    return this.presentType;
  }

  getPresentWeight(): number {
    return this.weight;
  }
  /* print(): void {
    console.log(this.name + " " + this.color + " " + this.gender);
  }

  isFemale(): boolean {
    return this.gender === Gender.Female; */

  // if (this.gender === Gender.Female) {
  //     return true;
  // } else {
  //     return false;
  // }
  /* } */
}
