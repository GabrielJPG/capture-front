import { DBSchema, IDBPDatabase, openDB } from 'idb'
import { IFrontCaptureSettings } from './interfaces/FrontCaptureSettings';
import { TableName } from './types/tableName';

interface CaptureFrontSchema extends DBSchema {
    'app-setting': {
        key: string
        value: IFrontCaptureSettings,
    },
    'user-session-data': {
        key: string
        value: any,

    }
}
export class EntityContext {
    context: any

    constructor() {
        this.context = openDB<CaptureFrontSchema>('CaptureFront', 1, {
            upgrade(db) {
                db.createObjectStore('app-setting', {
                    autoIncrement: true
                })
            }
        })
    }

    public async get<T>(table: TableName, key: string): Promise<T> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).get(table, key)
    }

    public async put(table: TableName, key: string, value: any): Promise<string> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).put(table, value, key)
    }

    public async delete(table: TableName, key: string): Promise<void> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).delete(table, key)
    }

    public async getAll<T>(table: TableName): Promise<Array<T>> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).getAll(table)
    }

    public async getAllKeys(table: TableName): Promise<Array<string>> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).getAllKeys(table)
    }
}
