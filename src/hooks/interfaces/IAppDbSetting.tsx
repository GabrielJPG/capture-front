import { IFrontCaptureSettings } from './FrontCaptureSettings';

/**
 * Represents the database function for manipulating the front capture settings.
 *
 * @export
 * @interface IAppDbSetting
 */
export interface IAppDbSetting {
    /**
     * Gets the front capture settings.
     *
     * @returns {Promise<IFrontCaptureSettings>}
     * @memberof IAppDbSetting
     */
    getSettings(): Promise<IFrontCaptureSettings>;
    /**
     * Updates the front capture settings.
     *
     * @param {IFrontCaptureSettings} setting
     * @returns {Promise<string>}
     * @memberof IAppDbSetting
     */
    updateSettings(setting: IFrontCaptureSettings): Promise<string>;
}
