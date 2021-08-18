import { CardInfo, ProcessCard } from './ProcessCard';
import { SkeletonLoader } from './SkeletonLoader';

export type SearchResultProps = {
    processData: Array<CardInfo>;
    onClick: (processId: number) => void;
}

export const ResultSearchPanel: React.FC<SearchResultProps> = (props) => {
    const { processData, onClick } = props;
    return <div className="process__wrapper">
        <div className="process__content u-hidden-scroll">
            {processData.map((process, index) => <ProcessCard key={index} cardInfo={process} onClick={(processId) => onClick(processId)} />)}
        </div>
        <SkeletonLoader />
    </div>;
};
