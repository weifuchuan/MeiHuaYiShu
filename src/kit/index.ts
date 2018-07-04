// import { Geolocation } from "react-native";
import { gua } from "../types";
const dateMath = require("date-arithmetic");

export function getLongitude(opt: PositionOptions = {}): Promise<number> {
	return new Promise<number>((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			position => {
				resolve(position.coords.longitude)
			},
			err => {
				reject(err)
			},
			opt
		);
	});
}

export async function sunTimeNow(opt: PositionOptions = {}): Promise<Date> {
	const shiQu = -new Date().getTimezoneOffset() / 60;
	const biaoZhunJingDu = shiQu * 15;
	const longtitude = await getLongitude(opt);
	const shicha = 4 * (longtitude - biaoZhunJingDu);
	const now = new Date();
	const NewYearsDay = new Date(now.getFullYear(), 0, 0, 0, 0, 0); //该年第一天
	const tian = ((now.getTime() - NewYearsDay.getTime()) / 86400000) >>> 0;
	const et = ET(tian);
	return dateMath.add(new Date(), shicha + et, "minutes");
}

export function sunTimeByLongtitude(longtitude: number): Date {
	const shiQu = -new Date().getTimezoneOffset() / 60;
	const biaoZhunJingDu = shiQu * 15;
	const shicha = 4 * (longtitude - biaoZhunJingDu);
	const now = new Date();
	const NewYearsDay = new Date(now.getFullYear(), 0, 0, 0, 0, 0); //该年第一天
	const tian = ((now.getTime() - NewYearsDay.getTime()) / 86400000) >>> 0;
	const et = ET(tian);
	return dateMath.add(new Date(), shicha + et, "minutes");
}

export function sunTimeByDateLongtitude(now: Date, longtitude: number): Date {
	const shiQu = -now.getTimezoneOffset() / 60;
	const biaoZhunJingDu = shiQu * 15;
	const shicha = 4 * (longtitude - biaoZhunJingDu);
	const NewYearsDay = new Date(now.getFullYear(), 0, 0, 0, 0, 0); //该年第一天
	const tian = ((now.getTime() - NewYearsDay.getTime()) / 86400000) >>> 0;
	const et = ET(tian);
	return dateMath.add(now, shicha + et, "minutes");
}

function ET(n: number): number {
	const b = (2 * Math.PI * (n - 81)) / 364;
	return 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
}

export function qiGuaByTime(
	year: gua.DiZhi,
	month: gua.DiZhi,
	day: gua.Tian,
	hour: gua.DiZhi
): gua.QuanGua {
	const up = year + month + day;
	const bottom = up + hour;
	const sg = gua.guas[up % 8];
	const xg = gua.guas[bottom % 8];
	const by: gua.Yao = (bottom % 6 === 0 ? 6 : bottom % 6) as gua.Yao;
	let sh: gua.Gua;
	let xh: gua.Gua;
	let sb: gua.Gua = sg;
	let xb: gua.Gua = xg;
	if (by <= 3) {
		// xg
		const cxg: gua.Gua = xg.slice() as gua.Gua;
		cxg[by - 1] = !cxg[by - 1];
		xb = cxg;
	} else {
		const csg: gua.Gua = sg.slice() as gua.Gua;
		csg[by - 3 - 1] = !csg[by - 3 - 1];
		sb = csg;
	}
	if ((isQian(sg) && isQian(xg)) || (isKun(sg) && isKun(xg))) {
		const qg = [...xb, ...sb];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	} else {
		const qg = [...xg, ...sg];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	}
	return {
		gua: [xg, sg, xh, sh, xb, sb],
		ti: by <= 3 ? 1 : 0,
		bian: by
	};
}

function isQian(gua: gua.Gua): boolean {
	return gua.reduce((p, c) => p && c, true);
}

function isKun(gua: gua.Gua): boolean {
	return !gua.reduce((p, c) => p || c, false);
}

// first 为上卦, second 为下卦
export function qiGuaByTwoNumberAddHour(
	first: number,
	second: number,
	hour: gua.DiZhi
): gua.QuanGua {
	const up = first;
	const bottom = second;
	const sg = gua.guas[up % 8];
	const xg = gua.guas[bottom % 8];
	const by: gua.Yao = ((first + second + hour) % 6 === 0
		? 6
		: (first + second + hour) % 6) as gua.Yao;
	let sh: gua.Gua;
	let xh: gua.Gua;
	let sb: gua.Gua = sg;
	let xb: gua.Gua = xg;
	if (by <= 3) {
		// xg
		const cxg: gua.Gua = xg.slice() as gua.Gua;
		cxg[by - 1] = !cxg[by - 1];
		xb = cxg;
	} else {
		const csg: gua.Gua = sg.slice() as gua.Gua;
		csg[by - 3 - 1] = !csg[by - 3 - 1];
		sb = csg;
	}
	if ((isQian(sg) && isQian(xg)) || (isKun(sg) && isKun(xg))) {
		const qg = [...xb, ...sb];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	} else {
		const qg = [...xg, ...sg];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	}
	return {
		gua: [xg, sg, xh, sh, xb, sb],
		ti: by <= 3 ? 1 : 0,
		bian: by
	};
}

// first 为上卦, second 为下卦
export function qiGuaByTwoNumber(first: number, second: number): gua.QuanGua {
	const up = first;
	const bottom = second;
	const sg = gua.guas[up % 8];
	const xg = gua.guas[bottom % 8];
	const by: gua.Yao = ((first + second) % 6 === 0
		? 6
		: (first + second) % 6) as gua.Yao;
	let sh: gua.Gua;
	let xh: gua.Gua;
	let sb: gua.Gua = sg;
	let xb: gua.Gua = xg;
	if (by <= 3) {
		// xg
		const cxg: gua.Gua = xg.slice() as gua.Gua;
		cxg[by - 1] = !cxg[by - 1];
		xb = cxg;
	} else {
		const csg: gua.Gua = sg.slice() as gua.Gua;
		csg[by - 3 - 1] = !csg[by - 3 - 1];
		sb = csg;
	}
	if ((isQian(sg) && isQian(xg)) || (isKun(sg) && isKun(xg))) {
		const qg = [...xb, ...sb];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	} else {
		const qg = [...xg, ...sg];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	}
	return {
		gua: [xg, sg, xh, sh, xb, sb],
		ti: by <= 3 ? 1 : 0,
		bian: by
	};
}

export function qiGuaByHouTian(
	up: gua.GuaNumber,
	bottom: gua.GuaNumber,
	hour: gua.DiZhi
): gua.QuanGua {
	const sg = gua.guas[up];
	const xg = gua.guas[bottom];
	const by: gua.Yao = ((up + bottom + hour) % 6 === 0
		? 6
		: (up + bottom + hour) % 6) as gua.Yao;
	let sh: gua.Gua;
	let xh: gua.Gua;
	let sb: gua.Gua = sg;
	let xb: gua.Gua = xg;
	if (by <= 3) {
		// xg
		const cxg: gua.Gua = xg.slice() as gua.Gua;
		cxg[by - 1] = !cxg[by - 1];
		xb = cxg;
	} else {
		const csg: gua.Gua = sg.slice() as gua.Gua;
		csg[by - 3 - 1] = !csg[by - 3 - 1];
		sb = csg;
	}
	if ((isQian(sg) && isQian(xg)) || (isKun(sg) && isKun(xg))) {
		const qg = [...xb, ...sb];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	} else {
		const qg = [...xg, ...sg];
		xh = [qg[1], qg[2], qg[3]];
		sh = [qg[2], qg[3], qg[4]];
	}
	return {
		gua: [xg, sg, xh, sh, xb, sb],
		ti: by <= 3 ? 1 : 0,
		bian: by
	};
}

