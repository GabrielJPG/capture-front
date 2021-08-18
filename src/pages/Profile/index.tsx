import { useContext } from "react"
import { ApplicationContext } from "../../contexts/App.Context"
import { AppLogo } from "../../shared/app-logo";

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
    const { translate } = useContext(ApplicationContext);
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">{translate("UserProfile")}</h2>
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
        <AppLogo />
    </div>
}