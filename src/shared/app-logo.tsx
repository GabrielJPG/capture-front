import LogoImage from '../assets/img/logo.png';

export const AppLogo: React.FC = () => {
    return <span className="logo-container">
        <img src={LogoImage} alt="" className="logo-container__logo" />
        Front Capture
    </span>
}