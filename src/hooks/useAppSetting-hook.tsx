import { EntityContext } from './db-hook';
import { IAppDbSetting } from "./interfaces/IAppDbSetting";
import { IFrontCaptureSettings } from "./interfaces/FrontCaptureSettings";

/**
 * Hook to get the app settings from the local database
 * 
 * @implicitParam appDbSetting: IAppDbSetting
 * @returns IAppDbSetting
*/
export const useAppSetting = (): IAppDbSetting => {
    const db = new EntityContext();
    const table = 'app-setting';
    const get = async (): Promise<IFrontCaptureSettings> => {
        return db.get(table, 'setting');
    };
    const put = async (setting: IFrontCaptureSettings) => {
        return db.put(table, 'setting', setting);
    };
    return {
        getSettings: get,
        updateSettings: put
    };
};
