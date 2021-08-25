import { CardInfo } from "../../models/Card-info";
import { DocumentCard } from "../../models/Document-Card";

/**
 * Represents function for receiving user work records
 *
 * @export
 * @interface IUserWorkRecord
 */


export interface IUserWorkRecord {
    /**
     * Retrieve all process worked by current user on cards
     *
     * @returns {Promise<Array<CardInfo>>}
     * @memberof IUserWorkRecord
     */
    getUserWorkRecordsCards(): Promise<Array<CardInfo>>;
    /**
     * Retrieve user work records cards by ids
     *
     * @memberof IUserWorkRecord
     */
    getUserRecordById: (userId: number, processId: number) => Promise<Array<DocumentCard>>;
}
