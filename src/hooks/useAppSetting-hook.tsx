import { IAppDbSetting } from "./interfaces/IAppDbSetting";
import { SettingRepository } from '../database/Setting-table';

/**
 * Hook to get the app settings from the local database
 * 
 * @implicitParam appDbSetting: IAppDbSetting
 * @returns IAppDbSetting
*/
export const useAppSetting = (): IAppDbSetting => {
    let settings: SettingRepository = new SettingRepository();
    return {
        getSettings: settings.getSetting,
        updateSettings: settings.setSetting
    };
};
