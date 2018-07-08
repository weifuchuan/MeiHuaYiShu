import { jiaZhi, jiaZhiDiZhiValue } from "../../../assets/jiazhi";
import { gua } from '../../../types';

interface IUseableData {
  label: string;
  value: string;
  children?: IUseableData[];
}

const nongLiUseableData: IUseableData[] = jiaZhi.map((d, i1) => ({
  label: d + "年",
  value: (gua.tianGan.findIndex(t => t === d[0]) + 1) + '-' + (jiaZhiDiZhiValue[i1]).toString(),
  children: gua.diZhi.map((d, i2) => ({
    label: (i2 + 1) + "月",
    value: (i2 + 1).toString(),
    children: Array.from(new Array(30), (val, index) => index + 1).map((d, i3) => ({
      label: d + "日",
      value: (d).toString(),
      children: gua.diZhi.map((d, i4) => ({
        label: d + "时",
        value: (i4 + 1).toString()
      }))
    }))
  }))
}));

export default nongLiUseableData; 