import { Utils } from "./utils.js";

export class Color {
  [x: string]: any;
  // props:
  r: number;
  g: number;
  b: number;
  id: string;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.id = Utils.currentDateString();

  }
  //instance method:
  hex() {
    return Color.toHex(this.r, this.g, this.b)
  }

  //static method:
  static toHex(r: number, g: number, b: number) {
    const redHex = r.toString(16).padStart(2, "0"); //f to 0f  (255 = FF)
    const greenHex = g.toString(16).padStart(2, "0");
    const blueHex = b.toString(16).padStart(2, "0");

    const hexColor = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
    return hexColor;
  }

  //methods:
  rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  //static methods:
  static fromRgb(red: number, green: number, blue: number) {
    return `rgb(${red}, ${green}, ${blue})`;
  }
}

// functions
export function capValue(value: number) {
  let r = Math.min(value, 255); //value = 800 => r = 255
  r = Math.max(r, 0); //value = -599 => 0
  return r;
}

export function capRGB(r: number, g: number, b: number) {
  let red = capValue(r);
  let green = capValue(g);
  let blue = capValue(b);

  return [red, green, blue];
}
