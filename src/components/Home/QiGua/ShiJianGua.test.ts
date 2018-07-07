import { gua } from "../../../types";

const solarLunar = require("solarLunar");

function solar2timeForGua(date: Date): [number, number, number, number] {
  const { gzYear, lMonth, lDay }: { gzYear: string, lMonth: number, lDay: number } = solarLunar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const lYear = gua.diZhi.findIndex(d => d === gzYear[1]) + 1;
  let lHour = date.getHours() + 1;
  lHour = lHour === 24 ? 0 : lHour;
  lHour = lHour%2===0?lHour:lHour-1; 
  lHour = lHour/2 + 1;
  return [lYear, lMonth, lDay, lHour];
}

test("ok solar2timeForGua", () => {
  expect(solar2timeForGua(new Date("2018-07-05 21:03"))).toEqual([11, 5, 22, 12])
})