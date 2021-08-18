import { CardInfo, ProcessCard } from './ProcessCard';
import { SkeletonLoader } from './SkeletonLoader';

export type SearchResultProps = {
    processData: Array<CardInfo>;
    onClick: (processId: number) => void;
    activeRecord?: number
}

export const ResultSearchPanel: React.FC<SearchResultProps> = (props) => {
    const { processData, activeRecord, onClick } = props;
    return <div className="process__wrapper">
        <div className="process__content">
            {processData.map((process, index) => <ProcessCard key={index} isActive={process.processId === activeRecord} cardInfo={process} onClick={(processId) => onClick(processId)} />)}
        </div>
        <SkeletonLoader />
    </div>;
};
