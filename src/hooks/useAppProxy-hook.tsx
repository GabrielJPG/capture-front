import { useProDoctivityProxy } from './useProDoctivityProxy-hook';
import { CaptureConnection } from "./types/CaptureConnection";
import { FluencyConnection } from "./types/FluencyConnection";
import { IProDoctivityProxy } from "./interfaces/ProDoctivityProxy";

/** 
 * Hook to get the Front-Capture back-end api functions
 * 
 * @implements IProDoctivityProxy
 * 
 * @param connection The connection to the back-end
 * @param conf The configuration of the back-end

 * @returns {IProDoctivityProxy} The back-end api functions
*/
export const useAppProxy = (type: 'fluency' | 'capture', conf: FluencyConnection | CaptureConnection | undefined): IProDoctivityProxy => {
    const proxies = {
        'fluency': useProDoctivityProxy,
        'capture': useProDoctivityProxy
    };
    return proxies[type]((conf as FluencyConnection));
};
