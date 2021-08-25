import { DBSchema, IDBPDatabase, openDB } from 'idb'

interface CaptureFrontSchema extends DBSchema {
    'app-setting': {
        key: string
        value: string,
    },
    'user-session-data': {
        key: string
        value: any,
    }
}

type tableName = 'app-setting' | 'user-session-data';

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

    public async get<T>(table: tableName, key: string): Promise<T> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).get(table, key)
    }

    public async put(table: tableName, key: string, value: any): Promise<string> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).put(table, value, key)
    }

    public async delete(table: tableName, key: string): Promise<void> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).delete(table, key)
    }

    public async getAll<T>(table: tableName): Promise<Array<T>> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).getAll(table)
    }

    public async getAllKeys(table: tableName): Promise<Array<string>> {
        return (await (await this.context as Promise<IDBPDatabase<CaptureFrontSchema>>)).getAllKeys(table)
    }
}

interface IAppDbSetting {
    getLanguage(): Promise<string>
    updateLanguage(lang: string): Promise<string>
}

export const useAppSetting = (): IAppDbSetting => {
    const db = new EntityContext()
    const table = 'app-setting'
    const getLanguage = async (): Promise<string> => {
        return db.get(table, 'language')
    }
    const updateLanguage = async (lang: string) => {
        return db.put(table, 'language', { language: lang })
    }
    return {
        getLanguage: getLanguage,
        updateLanguage
    }
}
