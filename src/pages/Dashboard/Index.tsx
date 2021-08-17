import LogoImage from '../../assets/img/logo.png';

export const EmptyHomePage: React.FC = (props) => {
    return <div className="process-workspace">
        Content here
    </div>
}

export const ProccessHeader: React.FC = (props) => {
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">Home</h2>
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


export const SearchProcsess: React.FC = (props) => {
    return <div className="process">
        <span className="logo-container">
            <img src={LogoImage} alt="" className="logo-container__logo" />
            Front Capture
        </span>
    </div>
}