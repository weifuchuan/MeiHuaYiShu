import { observable } from 'mobx';
import { gua } from './src/types';

// 卦例笔记
export class Note {
	// 卦
	@observable quanGua: gua.QuanGua;
	// 分析
	@observable analysis: string = "";
	// 断言
	@observable assert: string = "";
	// 结果
	@observable result: string = "";
	// 准确否
	@observable rigth: true | false | undefined = undefined;

	constructor(quanGua: gua.QuanGua) {
		this.quanGua = observable(quanGua);
	}
}
