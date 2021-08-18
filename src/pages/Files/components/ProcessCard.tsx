import dayjs from 'dayjs';
import { ApplicationContext } from '../../../contexts/App.Context';
import { faCalendar, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressBar } from './ring-progressBar';

export type CardInfo = {
    processId: number
    processName: string,
    clientName: string,
    creatorName: string,
    creatorEmail: string,
    creatorPhone: string,
    creationDate: string,
    expiryDate: string,
    status: string,
    processDocumentRequirement: number,
    currentDocumentInProcess: number,
}

export type CardProps = {
    cardInfo: CardInfo,
    onClick: (processId: number) => void
}

export const ProcessCard: React.FC<CardProps> = (props) => {
    const { translate } = useContext(ApplicationContext);
    const { onClick, cardInfo } = props



    const expiredDateTooltip = () => {
        const label = translate("ExpiredAt")
        const since = getDifference(dayjs(cardInfo.creationDate), dayjs(cardInfo.expiryDate))
        return label.replace('{days}', since.days.toString())
            .replace('{hours}', since.hours.toString())
            .replace('{minutes}', since.minutes.toString())
            .replace('{seconds}', since.seconds.toString())
    }

    return <div className="c-process-info is-ontime is-active" onClick={() => onClick(cardInfo.processId)}>
        <div className="c-process-info__title">
            <i className="c-process-info__icon"><FontAwesomeIcon icon={faFolder} /></i>
            {cardInfo.processName}
        </div>
        <div className="c-process-info__content" >
            <div className="c-process-info__name">
                <span className="tooltip">

                    <i className="fas fa-user c-process-info__icon c-process-info__icon--user"></i>

                    <span className="tooltip-text tooltip-text--client">
                        {translate('Client')}
                    </span>
                </span>
                {cardInfo.clientName}
            </div>
            <div className="c-process-info__bottom">
                <div className="c-process-info__owner">
                    <label className="label">{translate("CreatedBy")} {cardInfo.creatorName}</label>
                    <span className="tooltip tooltip--owner">
                        <i className="fas fa-info-circle tooltip__icon"></i>
                        <span className="tooltip-text tooltip-text--owner">
                            {translate("EMail")} {cardInfo.creatorEmail}<br />
                            {translate("PhoneNumber")} {cardInfo.creatorPhone}
                        </span>
                    </span>
                </div>
                <div className="c-process-info__date">
                    <div className="date">
                        <i><FontAwesomeIcon icon={faCalendar} /></i><span className="info-date">{dayjs(cardInfo.creationDate).format('DD/MM/YYYY')}</span>
                    </div>
                    <div className="hour">
                        <i><FontAwesomeIcon icon={faClock} /></i><span className="info-date">{dayjs(cardInfo.creationDate).format('hh:mm:ss')}</span>
                    </div>
                </div>
                <ProgressBar cardInfo={cardInfo} />
                {/* <span className="tooltip">
                    <div className="process-count">
                        <CircularProgressbar
                            value={cardInfo.currentDocumentInProcess} maxValue={cardInfo.processDocumentRequirement}
                            text={`${cardInfo.currentDocumentInProcess}/${cardInfo.processDocumentRequirement}`}
                        />
                    </div>
                    <span className="tooltip-text">
                        {buildToolTips(cardInfo.currentDocumentInProcess, cardInfo.processDocumentRequirement)}
                    </span>
                </span> */}
            </div>
        </div>
        <span className="tooltip tooltip--state ">
            <div className="c-process-info__state  ">

            </div>
            <span className="tooltip-text tooltip-text--state">
                {expiredDateTooltip()}
            </span>
        </span>
    </div>;

};


function getDifference(date1: dayjs.Dayjs, date2: dayjs.Dayjs): { days: number, hours: number, minutes: number, seconds: number } {
    const diff = date2.diff(date1);
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60) % 24),
        minutes: Math.floor(diff / (1000 * 60) % 60),
        seconds: Math.floor(diff / 1000 % 60),
    };
}