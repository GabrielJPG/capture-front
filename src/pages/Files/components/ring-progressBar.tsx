import { ApplicationContext } from '../../../contexts/App.Context';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { CardInfo } from '../../../models/Card-info';

/** 
 *  Component for rendering a progress bar for a file
 * @exports ProgressBar
*/
export const ProgressBar: React.FC<{ cardInfo: CardInfo; }> = (props) => {
    const { cardInfo } = props;
    const { translate } = useContext(ApplicationContext);
    const buildToolTips = (presents: number, required: number) => {
        const label = translate('PendingProcessLabel');
        return label.replace('{presents}', presents.toString())
            .replace('{required}', required.toString());
    };

    return <div className="c-process-count" data-tip={buildToolTips(cardInfo.currentDocumentInProcess, cardInfo.processDocumentRequirement)} data-html={true} data-for='count'>
        <ReactTooltip id="count" place="top" type="dark" effect="solid" />
        <CircularProgressbar
            value={cardInfo.currentDocumentInProcess} maxValue={cardInfo.processDocumentRequirement}
            text={`${cardInfo.currentDocumentInProcess}/${cardInfo.processDocumentRequirement}`} 
            
            />
    </div>
};