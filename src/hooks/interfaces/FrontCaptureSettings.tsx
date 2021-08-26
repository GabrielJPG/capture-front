import { CaptureConnection } from "../types/CaptureConnection";
import { FluencyConnection } from "../types/FluencyConnection";


/**
 * @typedef {Object} FrontCaptureSettings
 * 
 * [Table] FrontCaptureSettings : Represents the front capture settings
 * 
 * @export {FrontCaptureSettings}
 * @interface FrontCaptureSettings
 */
export interface IFrontCaptureSettings {
    /** 
     * Represents type of connection
     * 
     * @type {CaptureConnection}
     * @memberof FrontCaptureSettings
    */
    type: 'fluency' | 'capture';
    /**
     * Represents the connection parameters
     *
     * @type {(FluencyConnection | CaptureConnection | undefined)}
     * @memberof FrontCaptureSettings
     */
    settings: FluencyConnection | CaptureConnection | undefined;
}
