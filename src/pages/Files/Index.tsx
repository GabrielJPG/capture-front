import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ApplicationContext } from '../../contexts/App.Context';
import { AppLogo } from '../../shared/app-logo';
import { ResultSearchPanel } from './components/ResultSearchPanel';
import { SearchBox } from './components/SearchBox';
import { SearchBoxHeader } from './components/SearchBoxHeader';
import {
    faCheckCircle,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import { CardInfo, DocumentCard, useUserWorkedRecords } from '../../api/user-work-record';
import { useProvideAuth } from '../../hooks/Auth-hooks';
import { ClipLoader } from 'react-spinners';

export const FilesPage: React.FC = (props) => {
    const { translate } = useContext(ApplicationContext);
    const { getUserRecordById } = useUserWorkedRecords()
    const [loading, setLoading] = useState(true);
    const route = useLocation();
    const { session } = useProvideAuth()
    const [processDocuments, setProcessDocument] = useState(new Array<any>())
    let color = "#ffffff";
    const routerData: any = route.state;

    useEffect(() => {

        if (session && routerData) {
            setLoading(true)
            getUserRecordById(session?.userId, routerData.id).then((record) => {
                setProcessDocument(record)
                setLoading(false);
            })
        }
    }, [getUserRecordById, session, routerData]);

    return processDocuments.length === 0 ? <div className="process-workspace">{loading ? <ClipLoader color={color} loading={loading} size={150} /> : 'No content select'}</div> : <div className="process-workspace">
        <div className="process-workspace__heading">
            <h3 className="secondary-heading-workspace u-no-margin">{translate("MissedDocuments")}</h3>
            <h3 className="sub-heading-workspace">{translate("CompleteMissedDocuments")}</h3>
        </div>
        <div className="process-workspace__content">
            {processDocuments.filter((x) => x.handle === 0).map((x) => <DocumentCardInfo key={x.id} {...x} />)}
        </div>
        <div className="btn-container">
            <a href="completar.clean.html" className="btn btn-primary btn-animate">{translate("Complete")}</a>
        </div>
        <div className="process-workspace__heading">
            <h3 className="secondary-heading-workspace">{translate("CompleteDocuments")}</h3>
        </div>
        <div className="process-workspace__content">
            {processDocuments.filter((x) => x.handle > 0).map((x) => <DocumentCardInfo key={x.id} {...x} />)}
        </div>
    </div>
}


export const DocumentCardInfo: React.FC<DocumentCard> = (props) => {
    const icon = (props.handle === 0 || props.handle === undefined) ? faClock : faCheckCircle
    console.log(icon)
    return <div className="c-process-box">
        <div className="c-process-box__title">
            {props.documentTypeName}
        </div>
        <div className="c-process-box__name">
            {props.client}
            <span className="action">{props.type}</span>
        </div>
        <div className="c-process-box__icon">
            <FontAwesomeIcon icon={icon} />
        </div>
    </div>
}

export const FileProcessHeader: React.FC = (props) => {
    const route = useLocation()
    const { translate } = useContext(ApplicationContext)
    let recordId = 0
    let processName = ''
    let required = 0;
    let pending = 0;
    const routerData: any = route.state;
    if (routerData) {
        if (routerData.page === 'Files') {
            recordId = routerData.id;
            processName = routerData.name;
            required = routerData.required;
            pending = routerData.pending;
        }
    }

    const getProcessHeader = () => {
        if (recordId === 0) {
            return ''
        }
        const label = translate("PendingProcessHeaderLabel")
        return label.replace('{missing}', `${required - pending}`);
    }
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">Files: {recordId !== 0 && processName}</h2>
                <div className="process-header--layout__name u-no-margin">
                    {getProcessHeader()}
                </div>
            </div>
            <div className=" process-header__info is-ontime">
                <div className="process-header__name">
                    <span className="name">{translate("Process")}</span>
                    <span className="number">{recordId === 0 ? '' : recordId}</span>

                </div>
            </div>
        </div>
    )
}

export const FileSearchProcess: React.FC<{ recordId?: number }> = (props) => {
    const history = useHistory();
    const { getUserWorkRecordsCards } = useUserWorkedRecords()
    const [filterValue, setFilterValue] = useState('');
    const [records, setRecords] = useState(new Array<any>());
    const filterProperties = ['processName', 'clientName', 'creatorName', 'creatorEmail', 'creatorPhone'];

    useEffect(() => {
        getUserWorkRecordsCards().then((dataSet) => setRecords(dataSet))
    }, [getUserWorkRecordsCards])



    const onCardClick = (process: CardInfo) => {
        history.push({
            pathname: 'files',
            search: `process=${process.processId}`,
            state: { id: process.processId, name: process.processName, required: process.processDocumentRequirement, pending: process.currentDocumentInProcess, page: 'Files' }
        });
    }

    return <div className="process">
        <AppLogo />
        <SearchBoxHeader pendingDocuments={records.length} />
        <SearchBox emitSearchParameter={(value) => setFilterValue(value)} />
        <ResultSearchPanel processData={filterValue !== '' ? search(records, filterProperties, filterValue) : records} onClick={(process) => onCardClick(process)} />
    </div>
}

/**
 * Global function for filter table and list
 *
 * @param {Array<{T}>} array List of objects to filter
 * @param {string[]} filterFields keywords on apply values
 * @param {string} text filter value
 * @returns {Array<{T}>} List filtered by provide text
 */
export const search = <T extends {}>(
    array: Array<T>,
    filterFields: Array<string>,
    text: string
): Array<T> => {
    text = text.toLowerCase()
    return array.filter(function (row) {
        return filterFields.some(function (value) {
            return (row as any)[value].toString().toLowerCase().indexOf(text) !== -1
        })
    })
}
