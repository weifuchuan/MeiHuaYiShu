import { sunTimeByDateLongtitude } from "./index";

test("ok sunTimeByDateLongtitude", () => {
	let should = new Date(2018, 11, 5, 11, 55, 0).getTime();
	let sun = sunTimeByDateLongtitude(
		new Date(2018, 11, 5, 12),
		116 + 19 / 60
	).getTime();
	expect(sun < should + 300000 && sun > should - 300000).toBeTruthy();
	should = new Date(2018, 11, 5, 12, 37).getTime();
	sun = sunTimeByDateLongtitude(
		new Date(2018, 11, 5, 12),
		126 + 40 / 60
	).getTime();
	expect(sun < should + 300000 && sun > should - 300000).toBeTruthy();
	should = new Date(2018, 11, 5, 9, 14).getTime();
	sun = sunTimeByDateLongtitude(
		new Date(2018, 11, 5, 12),
		76 + 5 / 60
	).getTime();
	expect(sun < should + 300000 && sun > should - 300000).toBeTruthy();
});
