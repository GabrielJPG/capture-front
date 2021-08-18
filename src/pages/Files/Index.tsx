import { useHistory, useLocation } from 'react-router-dom';
import { AppLogo } from '../../shared/app-logo';
import { CardInfo } from './components/ProcessCard';
import { ResultSearchPanel } from './components/ResultSearchPanel';
import { SearchBox } from './components/SearchBox';
import { SearchBoxHeader } from './components/SearchBoxHeader';


const data: Array<CardInfo> = [
    {
        processId: 1234,
        processName: 'Solicitud de préstamo Hipotecario comercial',
        clientName: 'Juan Medina Carvajal',
        creatorName: 'Juan Peréz',
        creatorEmail: 'juanperez@gmail.com',
        creatorPhone: '+569-8-939-8982',
        creationDate: new Date('2018-10-10T15:30:00').toISOString(),
        expiryDate: new Date('2018-10-12T17:50:45').toISOString(),
        status: 'Pendiente',
        processDocumentRequirement: 9,
        currentDocumentInProcess: 3,
    },
    {
        processId: 1235,
        processName: 'Solicitud de préstamo Hipotecario comercial',
        clientName: 'Juan Medina Carvajal',
        creatorName: 'Juan Peréz',
        creatorEmail: 'juanperez@gmail.com',
        creatorPhone: '+569-8-939-8982',
        creationDate: new Date('2018-10-10T15:30:00').toISOString(),
        expiryDate: new Date('2018-10-09T15:30:00').toISOString(),
        status: 'Pendiente',
        processDocumentRequirement: 9,
        currentDocumentInProcess: 3,
    },
    {
        processId: 1236,
        processName: 'Solicitud de préstamo Hipotecario comercial',
        clientName: 'Juan Medina Carvajal',
        creatorName: 'Juan Peréz',
        creatorEmail: 'juanperez@gmail.com',
        creatorPhone: '+569-8-939-8982',
        creationDate: new Date('2018-10-10T15:30:00').toISOString(),
        expiryDate: new Date('2018-10-15T17:50:45').toISOString(),
        status: 'Pendiente',
        processDocumentRequirement: 9,
        currentDocumentInProcess: 3,
    }
]

export const FilesPage: React.FC = (props) => {
    return <div className="process-workspace">
        Files Content here
    </div>
}

export const FileProcessHeader: React.FC = (props) => {
    const route = useLocation()
    let recordId = 0
    const routerData: any = route.state;
    if (routerData) {
        if (routerData.page === 'Files') {
            recordId = routerData.id
        }
    }
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">Files</h2>
                <div className="process-header--layout__name u-no-margin">
                </div>
            </div>
            <div className=" process-header__info is-ontime">
                <div className="process-header__name">
                    <span className="name"></span>
                    <span className="number">{recordId === 0 ? '' : recordId}</span>

                </div>
            </div>
        </div>
    )
}

export const FileSearchProcess: React.FC<{ recordId?: number }> = (props) => {
    const history = useHistory();
    const route = useLocation()
    let recordId = 0
    const routerData: any = route.state;
    if (routerData) {
        if (routerData.page === 'Files') {
            recordId = routerData.id
        }
    }

    const onCardClick = (processId: number) => {
        history.push({
            pathname: 'files',
            search: `process=${processId}`,
            state: { id: processId, page: 'Files' }
        });
    }

    return <div className="process">
        <AppLogo />
        <SearchBoxHeader pendingDocuments={0} />
        <SearchBox />
        <ResultSearchPanel processData={data} onClick={(id) => onCardClick(id)} activeRecord={recordId} />
    </div>
}