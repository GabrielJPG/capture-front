
import LogoImage from '../../assets/img/logo.png';

export const Settings: React.FC = () => <div className="process-workspace">Settings</div>

export const ProcsessSettings: React.FC = (props) => {
    return <div className="process">
        <span className="logo-container">
            <img src={LogoImage} alt="" className="logo-container__logo" />
            Front Capture
        </span>
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