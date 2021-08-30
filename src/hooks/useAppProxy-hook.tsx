import { useProDoctivityProxy } from './useProDoctivityProxy-hook';
import { CaptureConnection } from "./types/CaptureConnection";
import { FluencyConnection } from "./types/FluencyConnection";
import { IProDoctivityApiProxy } from "./interfaces/ProDoctivityProxy";

/** 
 * Hook to get the Front-Capture back-end api functions
 * 
 * @implements IProDoctivityApiProxy
 * 
 * @param connection The connection to the back-end
 * @param conf The configuration of the back-end

 * @returns {IProDoctivityApiProxy} The back-end api functions
*/
export const useAppProxy = (type: 'fluency' | 'capture', conf: FluencyConnection | CaptureConnection | undefined): IProDoctivityApiProxy => {
    const proxies = {
        'fluency': useProDoctivityProxy,
        'capture': useProDoctivityProxy
    };
    return proxies[type]((conf as FluencyConnection));
};
