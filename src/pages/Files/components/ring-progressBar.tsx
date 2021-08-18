import { ApplicationContext } from '../../../contexts/App.Context';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from 'react';
import { CardInfo } from './ProcessCard';



export const ProgressBar: React.FC<{ cardInfo: CardInfo; }> = (props) => {
    const { cardInfo } = props;
    const { translate } = useContext(ApplicationContext);
    const buildToolTips = (presents: number, required: number) => {
        const label = translate('PendingProcessLabel');
        return label.replace('{presents}', presents.toString())
            .replace('{required}', required.toString());
    };

    return <span className="tooltip">
        <div className="process-count">
            <CircularProgressbar
                value={cardInfo.currentDocumentInProcess} maxValue={cardInfo.processDocumentRequirement}
                text={`${cardInfo.currentDocumentInProcess}/${cardInfo.processDocumentRequirement}`} />
        </div>
        <span className="tooltip-text">
            {buildToolTips(cardInfo.currentDocumentInProcess, cardInfo.processDocumentRequirement)}
        </span>
    </span>;
};
