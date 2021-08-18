import dayjs from 'dayjs';
import ReactTooltip from 'react-tooltip';
import { ApplicationContext } from '../../../contexts/App.Context';
import {
    faCalendar,
    faClock,
    faFolder,
    faInfoCircle,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressBar } from './ring-progressBar';
import { useContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';

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
    onClick: (processId: number) => void;
    isActive: boolean;
}

type ProcessStatus = 'is-ontime' | 'has-expired' | 'is-expiring' | '';

export const ProcessCard: React.FC<CardProps> = (props) => {
    const { translate } = useContext(ApplicationContext);
    const { onClick, cardInfo, isActive } = props;

    const timeLet = getDifference(dayjs(cardInfo.creationDate), dayjs(cardInfo.expiryDate))

    let statusClass: ProcessStatus = '';
    if (timeLet.days > 3) {
        statusClass = "is-ontime"
    } else if (timeLet.days >= 0 && timeLet.days < 3) {
        statusClass = "is-expiring"
    } else {
        statusClass = "has-expired"
    }


    const expiredDateTooltip = () => {
        const label = translate("ExpiredAt")
        return label.replace('{days}', timeLet.days.toString())
            .replace('{hours}', timeLet.hours.toString())
            .replace('{minutes}', timeLet.minutes.toString())
            .replace('{seconds}', timeLet.seconds.toString())
    }

    return <div className={`c-process-info ${statusClass} ${isActive && 'is-active'}`} onClick={() => onClick(cardInfo.processId)}>
        <div className="c-process-info__title">
            <i className="c-process-info__icon"><FontAwesomeIcon icon={faFolder} /></i>
            {cardInfo.processName}
        </div>
        <div className="c-process-info__content" >
            <div className="c-process-info__name">
                <FontAwesomeIcon icon={faUser} className="c-process-info__icon c-process-info__icon--user" />
                {translate('Client')}
                {cardInfo.clientName}
            </div>
            <div className="c-process-info__bottom">
                <div className="c-process-info__owner">
                    <label className="label">{translate("CreatedBy")} {cardInfo.creatorName}</label>

                    <FontAwesomeIcon icon={faInfoCircle} className="tooltip__icon ml-2 "
                        data-tip={`${translate("EMail")} ${cardInfo.creatorEmail}</br>${translate("PhoneNumber")} ${cardInfo.creatorPhone}`} data-html={true} data-for='owner' />
                    <ReactTooltip id="owner" place="top" type="dark" effect="solid" />
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
            </div>
        </div>

        <div className="c-process-info__state" data-tip={expiredDateTooltip()} data-html={true} data-for='timeLeft'>
        </div>
        <ReactTooltip id="timeLeft" place="right" type="dark" effect="solid" />
        <span className="tooltip-text tooltip-text--state" >
            {expiredDateTooltip()}
            <ReactTooltip id="timeLeft" place="right" type="dark" effect="solid" />
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