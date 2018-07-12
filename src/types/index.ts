import { observable } from "mobx";
import { getGuaByGua } from '../kit';
import { IGuaItem } from '../assets/yijing';
const solarLunar = require("../assets/solarlunar.min.js");

export namespace gua {
	// 乾☰兑☱离☲震☳巽☴坎☵艮☶坤☷
	export type Gua = [boolean, boolean, boolean]; // true -> 阳, false -> 阴
	export type Yao = 1 | 2 | 3 | 4 | 5 | 6;
	export type DiZhi = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	export type YMDH = [DiZhi, DiZhi, Tian, DiZhi];
	export const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', "未", "申", '酉', '戌', '亥'];
	export const diZhiNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	export const tianGan = ['甲', '乙', '丙', "丁", '戊', '己', '庚', '辛', "壬", '癸']
	export const tianGanNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	export type Tian =
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
		| 21
		| 22
		| 23
		| 24
		| 25
		| 26
		| 27
		| 28
		| 29
		| 30
		| 31;
	export interface QuanGua {
		gua: [Gua, Gua, Gua, Gua, Gua, Gua];
		ti: 0 | 1; // 0 -> 下卦, 1 -> 上卦
		bian: Yao; // 变爻
	}
	export type GuaNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	export type GuaS = "☷" | "☰" | "☱" | "☲" | "☳" | "☴" | "☵" | "☶" | "☷";
	export type GuaW =
		| "坤"
		| "乾"
		| "兑"
		| "离"
		| "震"
		| "巽"
		| "坎"
		| "艮"
		| "坤";
	export type GuaType = "时间卦" | "二数加时辰卦" | "二数卦" | "后天卦";
	export type Relation = "生" | "克" | "比和" | "被生" | "被克";
	export type WuXing = "金" | "木" | "水" | "火" | "土";
	export const signs: GuaS[] = ["☷", "☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];
	export const words: GuaW[] = [
		"坤",
		"乾",
		"兑",
		"离",
		"震",
		"巽",
		"坎",
		"艮",
		"坤"
	];
	export const directions: string[] = ['西南', '西北', '西', '南', '东', '东南', '北', '东北', '西南']
	export const guas: Gua[] = [
		[false, false, false],
		[true, true, true],
		[true, true, false],
		[true, false, true],
		[true, false, false],
		[false, true, true],
		[false, true, false],
		[false, false, true],
		[false, false, false]
	];
	export const gua2wuXing = new Map<string | GuaW | GuaS, WuXing>()
		.set(guas[1].toString(), "金").set(guas[2].toString(), "金").set(guas[3].toString(), "火").set(guas[4].toString(), "木")
		.set(guas[5].toString(), "木").set(guas[6].toString(), "水").set(guas[7].toString(), "土").set(guas[8].toString(), "土")
		.set(signs[1], "金").set(signs[2], "金").set(signs[3], "火").set(signs[4], "木")
		.set(signs[5], "木").set(signs[6], "水").set(signs[7], "土").set(signs[8], "土")
		.set(words[1], "金").set(words[2], "金").set(words[3], "火").set(words[4], "木")
		.set(words[5], "木").set(words[6], "水").set(words[7], "土").set(words[8], "土");
	export const dayGan2hourGanAtZhi = new Map<string, string>()
		.set("甲", '甲').set("乙", '丙').set("丙", '戊').set("丁", '庚').set("戊", '壬')
		.set("己", '甲').set("庚", '丙').set("辛", '戊').set("壬", '庚').set("癸", '壬')
	// export const Q = "☰";
	// export const q: Gua = [true, true, true];
	// export const D = "☱";
	// export const d: Gua = [true, true, false];
	// export const L = "☲";
	// export const l: Gua = [true, false, true];
	// export const Z = "☳";
	// export const z: Gua = [true, false, false];
	// export const X = "☴";
	// export const x: Gua = [false, true, true];
	// export const KAN = "☵";
	// export const kan: Gua = [false, true, false];
	// export const G = "☶";
	// export const g: Gua = [false, false, true];
	// export const KUN = "☷";
	// export const kun: Gua = [false, false, false];
	// 	export const gua2No = new Map<string, GuaNumber>()
	// 		.set("☰", 1)
	// 		.set("☱", 2)
	// 		.set("☲", 3)
	// 		.set("☳", 4)
	// 		.set("☴", 5)
	// 		.set("☵", 6)
	// 		.set("☶", 7)
	// 		.set("☷", 8)
	// 		.set("乾", 1)
	// 		.set("兑", 2)
	// 		.set("离", 3)
	// 		.set("震", 4)
	// 		.set("巽", 5)
	// 		.set("坎", 6)
	// 		.set("艮", 7)
	// 		.set("坤", 8);
	// 	export const no2Gua = new Map<
	// 		GuaNumber,
	// 		{ sign: string; word: string; yao: Gua }
	// 		>()
	// 		.set(1, { sign: "☰", word: "乾", yao: q })
	// 		.set(2, { sign: "☱", word: "兑", yao: d })
	// 		.set(3, { sign: "☲", word: "离", yao: l })
	// 		.set(4, { sign: "☳", word: "震", yao: z })
	// 		.set(5, { sign: "☴", word: "巽", yao: x })
	// 		.set(6, { sign: "☵", word: "坎", yao: kan })
	// 		.set(7, { sign: "☶", word: "艮", yao: g })
	// 		.set(8, { sign: "☷", word: "坤", yao: kun });
}

export type GuaResult = "ok" | "no" | "unknow";

export interface INote {
	quanGua: gua.QuanGua;
	thing: string;
	content: any;
	datetime: Date;
	time: gua.YMDH;
	result: GuaResult;
}

// 卦例笔记
export class Note implements INote {
	id: string = '';
	// 卦
	quanGua: gua.QuanGua;
	// 问事
	@observable thing: string;
	// 内容
	@observable content: any;
	// 起卦时间
	@observable datetime: Date;
	// 一般时间
	@observable time: gua.YMDH;
	@observable result: GuaResult = "unknow";

	constructor(quanGua: gua.QuanGua, thing: string, datetime: Date, time: gua.YMDH, content: any = { "ops": [{ "insert": "分析" }, { "attributes": { "header": 3 }, "insert": "\n" }, { "insert": "\n断语" }, { "attributes": { "header": 3 }, "insert": "\n" }, { "insert": "\n结果" }, { "attributes": { "header": 3 }, "insert": "\n" }, { "insert": "\n\n" }] }, result: GuaResult = "unknow") {
		this.quanGua = quanGua;
		this.thing = thing;
		this.content = content;
		this.datetime = datetime;
		this.time = time;
	}

	static of(obj: INote): Note {
		return new Note(obj.quanGua, obj.thing, obj.datetime, obj.time, obj.content, obj.result);
	}

	help(): {
		hasShiZhi: boolean;
		shiZhi: {
			gzYear: string;
			gzMonth: string;
			gzDay: string;
			gzHour: string;
		};
		zhuGua: IGuaItem;
		huGua: IGuaItem;
		bianGua: IGuaItem;
	} {
		let hasShiZhi = false;
		let gzYear: string = '', gzMonth: string = '', gzDay: string = '', gzHour: string = '';
		if (this.datetime) {
			hasShiZhi = true;
			const o: { gzYear: string, gzMonth: string, gzDay: string } = solarLunar.solar2lunar(this.datetime.getFullYear(), this.datetime.getMonth() + 1, this.datetime.getDate());
			gzYear = o.gzYear
			gzMonth = o.gzMonth
			gzDay = o.gzDay
			const zhiShiGan = gua.dayGan2hourGanAtZhi.get(gzDay[0])!;
			let i = gua.tianGan.indexOf(zhiShiGan) + 1;
			i = i + this.time[3] - 1;
			i = i > 10 ? i - 10 : i;
			gzHour = gua.tianGan[i - 1] + gua.diZhi[this.time[3] - 1];
		}
		const zhuGua = getGuaByGua(this.quanGua.gua[1], this.quanGua.gua[0]);
		const huGua = getGuaByGua(this.quanGua.gua[3], this.quanGua.gua[2]);
		const bianGua = getGuaByGua(this.quanGua.gua[5], this.quanGua.gua[4]);

		return {
			hasShiZhi, shiZhi: { gzYear, gzMonth, gzDay, gzHour }, zhuGua, huGua, bianGua
		}
	}


}
