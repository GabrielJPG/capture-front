import { IFrontCaptureSettings } from "../hooks";
import { TableName } from "../hooks/types/tableName";
import { DbEntityContext } from "./DataBase-context";

/**
 * Represents the table data access functionality
 *
 * @export
 * @class SettingRepository
 */
export class SettingRepository {
    tableName: TableName = 'app-setting';
    dbProxy: DbEntityContext;
    keyName = 'setting';

    /**
     * Creates an instance of SettingRepository.
     */
    constructor() {
        this.dbProxy = new DbEntityContext();
    }

    /**
     * get the setting
     *
     * @returns {Promise<IFrontCaptureSettings>}
     * @memberof SettingRepository
     */
    public getSetting = async (): Promise<IFrontCaptureSettings> => {
        debugger
        return this.dbProxy.get(this.tableName, this.keyName);
    }

    /**
     * save the setting
     *
     * @param {IFrontCaptureSettings} value
     * @returns {Promise<string>}
     * @memberof SettingRepository
     */
    public setSetting = async (value: IFrontCaptureSettings): Promise<string> => {
        debugger
        return this.dbProxy.put(this.tableName, this.keyName, value);
    }
}