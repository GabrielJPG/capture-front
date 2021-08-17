import { useContext } from "react"
import { ApplicationContext } from "../../contexts/App.Context"
import LogoImage from '../../assets/img/logo.png';

export const Profile: React.FC = (props) => {
    const { session } = useContext(ApplicationContext)
    return <div className="process-workspace">
        <p>Session Data</p>
        <div>
            <pre>
                {JSON.stringify(session, null, 2)}
            </pre>
        </div>
    </div>
}

export const ProfileProccessHeader: React.FC = (props) => {
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">User Profile</h2>
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

export const ProfileSearchProcsess: React.FC = (props) => {
    return <div className="process">
        <span className="logo-container">
            <img src={LogoImage} alt="" className="logo-container__logo" />
            Front Capture
        </span>
    </div>
}