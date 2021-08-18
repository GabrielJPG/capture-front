
import { AppLogo } from '../../shared/app-logo';

export const Settings: React.FC = () => <div className="process-workspace">Settings</div>

export const ProcsessSettings: React.FC = (props) => {
    return <div className="process">
        <AppLogo />
    </div>
}

export const ProccessHeaderSetting: React.FC = (props) => {
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">Settings</h2>
                <div className="process-header--layout__name u-no-margin">
                </div>
            </div>
            <div className=" process-header__info is-ontime">
                <div className="process-header__name">
                    <span className="name"></span>
                    <span className="number"></span>

                </div>
            </div>
        </div>
    )
}