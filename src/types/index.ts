export namespace gua {
	// 乾☰兑☱离☲震☳巽☴坎☵艮☶坤☷
	export type Gua = [boolean, boolean, boolean]; // true -> 阳, false -> 阴
	export type Yao = 1 | 2 | 3 | 4 | 5 | 6;
	export type DiZhi = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	export type QuanGua = {
		gua: [Gua, Gua, Gua, Gua, Gua, Gua];
		ti: 0 | 1; // 0 -> 上卦, 1 -> 下卦
		bian: Yao; // 变爻
	};
	export type GuaNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	export const signs = ["☷", "☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];
	export const words = ["坤", "乾", "兑", "离", "震", "巽", "坎", "艮", "坤"];
	export const guas: Gua[] = [
		[false, false, false],
		[true, true, true],
		[false, true, true],
		[true, false, true],
		[false, false, true],
		[true, true, false],
		[false, true, false],
		[true, false, false]
	];
	export const Q = "☰";
	export const q: Gua = [true, true, true];
	export const D = "☱";
	export const d: Gua = [false, true, true];
	export const L = "☲";
	export const l: Gua = [true, false, true];
	export const Z = "☳";
	export const z: Gua = [false, false, true];
	export const X = "☴";
	export const x: Gua = [true, true, false];
	export const KAN = "☵";
	export const kan: Gua = [false, true, false];
	export const G = "☶";
	export const g: Gua = [true, false, false];
	export const KUN = "☷";
	export const kun: Gua = [false, false, false];
	export const gua2No = new Map<string, GuaNumber>()
		.set("☰", 1)
		.set("☱", 2)
		.set("☲", 3)
		.set("☳", 4)
		.set("☴", 5)
		.set("☵", 6)
		.set("☶", 7)
		.set("☷", 8)
		.set("乾", 1)
		.set("兑", 2)
		.set("离", 3)
		.set("震", 4)
		.set("巽", 5)
		.set("坎", 6)
		.set("艮", 7)
		.set("坤", 8);
	export const no2Gua = new Map<
		GuaNumber,
		{ sign: string; word: string; yao: Gua }
	>()
		.set(1, { sign: "☰", word: "乾", yao: q })
		.set(2, { sign: "☱", word: "兑", yao: d })
		.set(3, { sign: "☲", word: "离", yao: l })
		.set(4, { sign: "☳", word: "震", yao: z })
		.set(5, { sign: "☴", word: "巽", yao: x })
		.set(6, { sign: "☵", word: "坎", yao: kan })
		.set(7, { sign: "☶", word: "艮", yao: g })
		.set(8, { sign: "☷", word: "坤", yao: kun });
}
