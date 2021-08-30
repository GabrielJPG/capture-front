import { DBSchema, IDBPDatabase, openDB } from 'idb'
import { IFrontCaptureSettings } from '../hooks/interfaces/FrontCaptureSettings';
import { TableName } from '../hooks/types/tableName';

/**
 * Represents the database schema
 *
 * @interface CaptureFrontSchema
 * @extends {DBSchema}
 */
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


/**
 * Represents the database basic operations.
 *
 * @export DbEntityContext
 * @class DbEntityContext
 */
export class DbEntityContext {
    /**
     * represents the database context
     *
     * @type {*}
     * @memberof DbEntityContext
     */
    context: any

    /**
     *Creates an instance of DbEntityContext.
     * @memberof DbEntityContext
     */
    constructor() {
        this.context = openDB<CaptureFrontSchema>('CaptureFront', 1, {
            upgrade(db) {
                db.createObjectStore('app-setting', {
                    autoIncrement: true
                })
            }
        })
    }

    /**
     * Get the value of a key
     *
     * @template T 
     * @param {TableName} table table name
     * @param {string} key key name
     * @returns {Promise<T>}
     * @memberof DbEntityContext
     */
    public async get<T>(table: TableName, key: string): Promise<T> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).get(table, key)
    }

    /**
     * Set the value of a key
     *
     * @param {TableName} table table name
     * @param {string} key key name
     * @param {*} value new value to storage
     * @returns {Promise<string>}
     * @memberof DbEntityContext
     */
    public async put(table: TableName, key: string, value: any): Promise<string> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).put(table, value, key)
    }

    /**
     * Delete a key from specific table on the database
     *
     * @param {TableName} table
     * @param {string} key
     * @returns {Promise<void>}
     * @memberof DbEntityContext
     */
    public async delete(table: TableName, key: string): Promise<void> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).delete(table, key)
    }

    /**
     * Get all the values from specific table on the database
     *
     * @template T
     * @param {TableName} table
     * @returns {Promise<Array<T>>}
     * @memberof DbEntityContext
     */
    public async getAll<T>(table: TableName): Promise<Array<T>> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).getAll(table)
    }

    /**
     * get all the keys from specific table on the database
     *
     * @param {TableName} table table name
     * @returns {Promise<Array<string>>} array of keys
     * @memberof DbEntityContext
     */
    public async getAllKeys(table: TableName): Promise<Array<string>> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).getAllKeys(table)
    }
}
