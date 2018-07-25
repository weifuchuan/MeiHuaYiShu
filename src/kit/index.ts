import { gua } from "../types";
const dateMath = require("date-arithmetic");
import { data as yjData, IGuaItem } from '../assets/yijing'
import _ from 'lodash'

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

export function quanGua2xZhiX(qg: gua.QuanGua): string {
	const xg = qg.gua[0];
	const sg = qg.gua[1];
	const xb = qg.gua[4];
	const sb = qg.gua[5];
	const xgIndex = gua.guas.findIndex(gua => _.isEqual(gua, xg));
	const sgIndex = gua.guas.findIndex(gua => _.isEqual(gua, sg));
	const xbIndex = gua.guas.findIndex(gua => _.isEqual(gua, xb));
	const sbIndex = gua.guas.findIndex(gua => _.isEqual(gua, sb));
	const first = yjData.find(g => g.pailie.up === gua.words[sgIndex] && g.pailie.bottom === gua.words[xgIndex])!.name;
	const second = yjData.find(g => g.pailie.up === gua.words[sbIndex] && g.pailie.bottom === gua.words[xbIndex])!.name;
	return `${first}之${second}`;
}

export function getRelationForWuXing(first: gua.WuXing, second: gua.WuXing): gua.Relation {
	if (first === second) return "比和";
	if (first === '金' && second === '土') return "被生";
	if (first === '金' && second === '木') return "克";
	if (first === '金' && second === '水') return "生";
	if (first === '金' && second === '火') return "被克";
	if (first === '木' && second === '土') return "克";
	if (first === '木' && second === '金') return "被克";
	if (first === '木' && second === '水') return "被生";
	if (first === '木' && second === '火') return "生";
	if (first === '水' && second === '土') return "被克";
	if (first === '水' && second === '木') return "生";
	if (first === '水' && second === '金') return "被生";
	if (first === '水' && second === '火') return "克";
	if (first === '火' && second === '土') return "生";
	if (first === '火' && second === '木') return "被生";
	if (first === '火' && second === '水') return "被克";
	if (first === '火' && second === '金') return "克";
	if (first === '土' && second === '金') return "生";
	if (first === '土' && second === '木') return "被克";
	if (first === '土' && second === '水') return "克";
	if (first === '土' && second === '火') return "被生";
	else return "比和";
}

export function getRelationForGua(first: gua.Gua | gua.GuaW | gua.GuaS, second: gua.Gua | gua.GuaW | gua.GuaS): gua.Relation {
	return getRelationForWuXing(gua.gua2wuXing.get(first.toString())!, gua.gua2wuXing.get(second.toString())!);
}

export function getGuaByWord(up: gua.GuaW, bottom: gua.GuaW): IGuaItem {
	return yjData.find(g => g.pailie.up === up && g.pailie.bottom === bottom)!
}

export function getGuaByGua(up: gua.Gua, bottom: gua.Gua): IGuaItem {
	let _up: gua.GuaW, _bottom: gua.GuaW;
	_up = gua.words[gua.guas.findIndex(g => _.isEqual(g, up))];
	_bottom = gua.words[gua.guas.findIndex(g => _.isEqual(g, bottom))];
	return yjData.find(g => g.pailie.up === _up && g.pailie.bottom === _bottom)!
}