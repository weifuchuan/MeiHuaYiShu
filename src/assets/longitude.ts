
export class Province {
  name: string = '';
  city: City[] = [];
  longitude: number = 0;
}

export class City {
  name: string = '';
  district: District[] = [];
  longitude: number = 0;
}

export class District {
  name: string = '';
  longitude: number = 0;
}

export const data: Province[] = require("./lng.json")

data.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
})

