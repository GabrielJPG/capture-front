import { getUserRecordById, getUserWorkRecordsCards } from "../api/fake-user-work-record"
import { IUserWorkRecord } from "./interfaces/IUserWorkRecord"


/** 
 * 
 * hook function for retrieving user work.
 * @implements {IUserWorkRecord}
*/
export const useUserWorkedRecords = (): IUserWorkRecord => {
    return {
        getUserWorkRecordsCards,
        getUserRecordById,
    }
}