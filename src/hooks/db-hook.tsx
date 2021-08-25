import { DBSchema, IDBPDatabase, openDB } from 'idb'


export interface FrontCaptureSettings {
    type: 'fluency' | 'capture',
    settings: FluencyConnection | CaptureConnection | undefined,
}
export interface ProDoctivityProxy {
    login: (username: string, password: string) => Promise<any>
}


export type FluencyConnection = {
    siteUrl: string,
    apiKey: string,
    apiKeyName: string,
    username: string,
    password: string,
    useLoggedUseCredentials: boolean,
}

export type CaptureConnection = {
    siteUrl: string,
    username: string,
    password: string,
    useLoggedUseCredentials: boolean,
}

interface CaptureFrontSchema extends DBSchema {
    'app-setting': {
        key: string
        value: FrontCaptureSettings,
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
    getSettings(): Promise<FrontCaptureSettings>
    updateSettings(setting: FrontCaptureSettings): Promise<string>
}

export const useAppSetting = (): IAppDbSetting => {
    const db = new EntityContext()
    const table = 'app-setting'
    const get = async (): Promise<FrontCaptureSettings> => {
        return db.get(table, 'setting')
    }
    const put = async (setting: FrontCaptureSettings) => {
        return db.put(table, 'setting', setting)
    }
    return {
        getSettings: get,
        updateSettings: put
    }
}

export const useAppProxy = (type: 'fluency' | 'capture', conf: FluencyConnection | CaptureConnection | undefined): ProDoctivityProxy => {
    const proxies = {
        'fluency': useProDoctivityProxy,
        'capture': useProDoctivityProxy
    }
    return proxies[type]((conf as FluencyConnection))
}


export const useProDoctivityProxy = (conn: FluencyConnection): ProDoctivityProxy => {
    const serverUrl = 'http://18.218.98.135:8095'
    return {
        login: async (username: string, password: string) => {
            const codec = btoa(`${username + '@prodoctivity'}:${password}`)
            const url = new URL(serverUrl + '/api/accounts/authentication')
            return fetch(url.toString(), {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${codec}`
                }
            })
        }
    }
}
