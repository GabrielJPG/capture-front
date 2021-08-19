import { useLocation } from 'react-router-dom';
import { CardInfo } from '../../../api/user-work-record';
import { ProcessCard } from './ProcessCard';
import { SkeletonLoader } from './SkeletonLoader';

export type SearchResultProps = {
    processData: Array<CardInfo>;
    onClick: (process: CardInfo) => void;
}

export const ResultSearchPanel: React.FC<SearchResultProps> = (props) => {
    const { processData, onClick } = props;

    const route = useLocation()
    let recordId = 0
    const routerData: any = route.state;
    if (routerData) {
        if (routerData.page === 'Files') {
            recordId = routerData.id
        }
    }

    return <div className="process__wrapper">
        <div className="process__content">
            {processData.map((process, index) => <ProcessCard key={index} isActive={process.processId === recordId} cardInfo={process} onClick={(process) => onClick(process)} />)}
        </div>
        <SkeletonLoader />
    </div>;
};
