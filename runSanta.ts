import { Bag } from "./bag";
import { BagType } from "./bagType";
import { Present } from "./present";
import { PresentType } from "./presentType";
import { Santa } from "./santa";
import { Sled } from "./sled";

const santa = new Santa("Klaus", 45);
const sled = new Sled(santa);
const bag = new Bag(10, BagType.Canvas);
const present1 = new Present("Doll", 8, PresentType.Hard);
const present2 = new Present("Card", 3, PresentType.Soft);

bag.addPresents(present1);
bag.addPresents(present2);

sled.addBag(bag);
