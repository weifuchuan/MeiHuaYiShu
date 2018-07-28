import { AsyncStorage } from 'react-native';
import Storage from './storage';
import { observable } from 'mobx';
import { Note } from '../types';
import { GuaResult } from '../types';
import { SQLite } from 'expo';

export namespace fixedKey {
	export const CURRENT_POSITION = 'currentPosition';
	export const NOTE = 'note';
}

export class Store {
	@observable notes: Note[] = [];
	private db: Database;

	constructor() {
		this.db = SQLite.openDatabase('note.db');

		(async () => {
			try {
				await this.execSQL(Note.createTableSql);
				const rs = await this.execSQL(Note.findAllSQL);
				for (let i = 0; i < rs.rows.length; i++) {
					this.notes.push(Note.fromSQLable(rs.rows.item(i)));
				}
			} catch (e) {
				
			}
		})();
	}

	async saveNote(note: Note) {
		const sn = note.toSQLable();
		// add new note
		if (note.id === 0) {
			const rs = await this.execSQL(Note.insertSQL, [
				sn.quanGua,
				sn.thing,
				sn.content,
				sn.datetime,
				sn.time,
				sn.result
			]);
			note.id = rs.insertId;
			this.notes.unshift(note);
		} else {
			// update thing and content
			await this.execSQL(Note.updateThingAndContentSQL, [ sn.thing, sn.content, sn.id ]);
		}
	}

	async deleteNote(note: Note) {
		await this.execSQL(Note.deleteByIdSQL, [ note.id ]);
		const i = this.notes.findIndex((n) => note.id === n.id);
		i !== -1 && this.notes.splice(i, 1);
	}

	async changeNoteResult(note: Note, result: GuaResult) {
		await this.execSQL(Note.updateResultSQL, [ result, note.id ]);
		note.result = result;
	}

	private execSQL(sql: string, args: Array<number | string> = []): Promise<ResultSet> {
		return new Promise<ResultSet>((resolve, reject) => {
			this.db.transaction(
				(tx) => {
					tx.executeSql(sql, args, (_, rs) => resolve(rs), (_, err) => reject(err));
				},
				reject,
				() => null
			);
		});
	}
}

export default new Store();

export interface IStorege {
	save(params: { key: string; id?: string; data: any; expires?: number }): Promise<void>;
	load<T = any>(params: { key: string; id?: string }): Promise<T>;
	remove(params: { key: string; id?: string }): Promise<void>;
	getIdsForKey(key: string): Promise<string[]>;
	getAllDataForKey<T = any>(key: string): Promise<T[]>;
	clearMapForKey(key: string): Promise<void>;
}

export const storage: IStorege = new Storage({
	// 最大容量，默认值1000条数据循环存储
	size: 100000000,

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
		currentPosition({ resolve }: { id?: string; resolve: (v: any) => void; reject: (e: any) => void }) {
			resolve([ '北京', '北京市', '东城区' ]);
		}
	}
});

interface Database {
	transaction(run: (tx: Transaction) => void, error: (err: any) => void, success: () => void): void;
}

interface Transaction {
	executeSql(
		sqlStatement: string,
		args: Array<number | string>,
		success: (tx: Transaction, resultSet: ResultSet) => void,
		error: (tx: Transaction, err: any) => void
	): void;
}

interface ResultSet {
	insertId: number;
	rowsAffected: number;
	rows: {
		length: number;
		item: (index: number) => any;
	};
}
