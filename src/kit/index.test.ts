import {
	sunTimeByDateLongtitude,
	qiGuaByTime,
	qiGuaByTwoNumberAddHour,
	qiGuaByTwoNumber,
	qiGuaByHouTian
} from ".";


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

test("ok qiGuaByTime", () => {
	expect(qiGuaByTime(5, 12, 17, 9)).toEqual({
		gua: [
			[true, false, true],
			[true, true, false],
			[false, true, true],
			[true, true, true],
			[false, false, true],
			[true, true, false]
		],
		ti: 1,
		bian: 1
	});

	expect(qiGuaByTime(6, 3, 16, 4)).toEqual({
		gua: [
			[false, true, true],
			[true, true, true],
			[true, true, true],
			[true, true, true],
			[false, true, true],
			[true, false, true]
		],
		ti: 0,
		bian: 5
	});
});

test("ok qiGuaByTwoNumberAddHour", () => {
	expect(qiGuaByTwoNumberAddHour(1, 5, 10)).toEqual({
		gua: [
			[false, true, true],
			[true, true, true],
			[true, true, true],
			[true, true, true],
			[false, true, true],
			[false, true, true]
		],
		ti: 0,
		bian: 4
	});
});

test("ok qiGuaByTwoNumber", () => {
	expect(qiGuaByTwoNumber(8, 5)).toEqual({
		gua: [
			[false, true, true],
			[false, false, false],
			[true, true, false],
			[true, false, false],
			[true, true, true],
			[false, false, false]
		],
		ti: 1,
		bian: 1
	});

	expect(qiGuaByTwoNumber(7, 8)).toEqual({
		gua: [
			[false, false, false],
			[false, false, true],
			[false, false, false],
			[false, false, false],
			[false, false, true],
			[false, false, true]
		],
		ti: 1,
		bian: 3
	});
});

test("ok qiGuaByHouTian", () => {
	expect(qiGuaByHouTian(1, 5, 4)).toEqual({
		gua: [
			[false, true, true],
			[true, true, true],
			[true, true, true],
			[true, true, true],
			[false, true, true],
			[false, true, true]
		],
		ti: 0,
		bian: 4
	});

	expect(qiGuaByHouTian(7, 3, 7)).toEqual({
		gua: [
			[true, false, true],
			[false, false, true],
			[false, true, false],
			[true, false, false],
			[true, false, true],
			[false, true, true]
		],
		ti: 0,
		bian: 5
	});

	expect(qiGuaByHouTian(8, 6, 7)).toEqual({
		gua: [
			[false, true, false],
			[false, false, false],
			[true, false, false],
			[false, false, false],
			[false, true, true],
			[false, false, false]
		],
		ti: 1,
		bian: 3
	});
});
