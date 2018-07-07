import { AsyncStorage } from 'react-native';
import Storage from './storage'; 

export namespace fixedKey {
  export const CURRENT_POSITION = "currentPosition"

}

export class Store {

}

export default new Store();

export interface IStorege {
  save(params: {
    key: string;
    id?: string;
    data: any;
    expires?: number;
  }): Promise<void>;
  load<T = any>(params: {
    key: string;
    id?: string;
  }): Promise<T>;
  remove(params: {
    key: string;
    id?: string;
  }): Promise<void>;
}

export const storage: IStorege = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000000,

  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: null,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,

  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync方法，无缝返回最新数据。
  sync: {
    // sync方法的名字必须和所存数据的key完全相同
    // 方法接受的参数为一整个object，所有参数从object中解构取出
    // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
    // example({ id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } ){
    //   fetch()...
    // }
    currentPosition({ resolve, reject }: { id?: string; resolve: (v: any) => void; reject: (e: any) => void }) {
      resolve(["北京", "北京市", "东城区"])
    }
  }
})  
