import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFile,
    faQrcode,
    faClock,
    faAngleDown,
    faFileUpload
} from '@fortawesome/free-solid-svg-icons';
import { AppLogo } from "../../shared"
import { useState } from "react";

export const ContinueProcess: React.FC<{}> = (props) => {

    const [showMoreOptions, setShowMoreOption] = useState(false)

    return <div className="l-document-workspace">
        <div className="l-document-preview">
            <div className="l-document-preview__content">
                <div className="document-bag">
                    <div className="document-bag__header">
                        Documentos generados por ProDoctivity
                    </div>
                    <div className="document-bag__content">
                        <div className="c-document-status is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />
                                <FontAwesomeIcon className="c-document-status__icon--qr" icon={faQrcode} />
                                {/* <i className="fas fa-file c-document-status__icon--file"></i> */}
                                {/* <i className="far fa-clock c-document-status__icon--state"></i> */}
                                {/* <i className="fas fa-qrcode c-document-status__icon--qr"></i> */}

                            </div>
                            <div className="c-document-status__title">
                                Contrato de Prestamo
                            </div>
                            <div className="c-document-status__state">
                                Pendiente
                            </div>

                        </div>
                        <div className="c-document-status  is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />
                                <FontAwesomeIcon className="c-document-status__icon--qr" icon={faQrcode} />
                            </div>
                            <div className="c-document-status__title">
                                Contrato de Garantía
                            </div>
                            <div className="c-document-status__state">
                                Pendiente
                            </div>

                        </div>
                        <div className="c-document-status  is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />
                                <FontAwesomeIcon className="c-document-status__icon--qr" icon={faQrcode} />
                            </div>
                            <div className="c-document-status__title">
                                Contrato de Seguros
                            </div>
                            <div className="c-document-status__state">
                                Pendiente
                            </div>

                        </div>
                    </div>
                </div>

                <div className="document-bag">
                    <div className="document-bag__header document-bag__header--external">
                        Documentos externos
                    </div>
                    <div className="document-bag__content">
                        <div className="c-document-status  is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />

                            </div>
                            <div className="c-document-status__title">
                                Carta de trabajo
                            </div>
                            <div className="c-document-status__state">
                                Pendiente

                            </div>

                        </div>
                        <div className="c-document-status  is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />
                            </div>
                            <div className="c-document-status__title">
                                Copia acta de nacimiento
                            </div>
                            <div className="c-document-status__state">
                                Pendiente
                            </div>

                        </div>
                        <div className="c-document-status  is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />
                            </div>
                            <div className="c-document-status__title">
                                Copia de cédula
                            </div>
                            <div className="c-document-status__state">
                                Pendiente
                            </div>

                        </div>
                        <div className="c-document-status  is-pending">
                            <div className="c-document-status__icon">
                                <FontAwesomeIcon className="c-document-status__icon--file" icon={faFile} />
                                <FontAwesomeIcon className="c-document-status__icon--state" icon={faClock} />
                            </div>
                            <div className="c-document-status__title">
                                Copia de Matricula
                            </div>
                            <div className="c-document-status__state">
                                Pendiente
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div className="l-document-view">
            <div className="l-document-view__pdftron">
                <div className="document-instruction">
                    <div className="document-instruction__ilustration">
                        <iframe frameBorder={"0"} title="x" src="http://demo.prodoctivity.info/anim/DocumentScanning.html"></iframe>
                    </div>
                    <div className="document-instruction__heading">
                        Introduzca los documentos en el escáner.
                    </div>
                    <div className="document-instruction__subheading">
                        Los documentos generados serán indexados automáticamente por ProDoctivity. Para los
                        demás, siga las instrucciones

                    </div>
                    <a href="scanning.sample.html" className="btn-split btn-instruction">Escanear
                        <ul>
                            <li className="first-li">
                                <FontAwesomeIcon className="arrow-icon" icon={faAngleDown} />
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="file-icon" icon={faFileUpload} />
                                        Importar
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </a>
                    <div className="advanced-options hidden-ba" onClick={() => setShowMoreOption(!showMoreOptions)}>
                        <i className="fas fa-cog advanced-options__icon"></i>
                        Opciones Avanzadas
                    </div>
                    <div className={`scanner-options ${showMoreOptions ? '' : 'hidden'}`}>
                        <div className="scanner-options__group">
                            <label className="scanner-options__label">Scanner</label>

                            <select name="" className="scanner-options__select">
                                <option value="">Epson 4566</option>
                                <option value="">Epson 4566</option>
                                <option value="">Epson 4566</option>
                            </select>
                        </div>
                        <div className="scanner-options__group">
                            <label className="scanner-options__label">Perfil de escáner</label>

                            <select name="" className="scanner-options__select">
                                <option value="">Contratos</option>
                                <option value="">Epson 4566</option>
                                <option value="">Epson 4566</option>
                            </select>
                        </div>
                        <div className="scanner-options__group">
                            <label className="scanner-options__label">Color</label>

                            <select name="" className="scanner-options__select">
                                <option value=""> Full color</option>

                                <option value="">Epson 4566</option>
                                <option value="">Epson 4566</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export const ContinueProcessHeader: React.FC<{}> = (props) => {
    return <div className="process-header process-header--layout">
        <div className="process-header--layout__header">
            <h2 className="primary-heading"><i className="fas fa-file process-header--layout__icon "></i>Solicitud de
                Prestamo Hipotecario</h2>
            <div className="process-header--layout__name">
                Juan Medina Carvajal
            </div>
        </div>

        <div className=" process-header__info is-ontime">
            <div className="process-header__name">
                <span className="name">Proceso</span>
                <span className="number">456781</span>
                <span className="c-process-info__state c-process-info__state--header  "></span>
            </div>
            <div className="process-header__date">
                <span className="process-header__expiration">
                    <span className="tooltip  ">
                        <i className="far fa-calendar process-header__icon"></i>
                        <span className="tooltip-text tooltip-text--header">
                            Fecha de creación
                        </span>
                    </span>
                    18/02/2020
                </span>
                <span className="process-header__expiration">
                    <span className="tooltip  ">
                        <i className="far fa-clock process-header__icon"></i>
                        <span className="tooltip-text tooltip-text--header">
                            Hora de creación
                        </span>
                    </span>
                    12:56 pm
                </span>
                <span className="tooltip tooltip--owner">
                    <i className="fas fa-info-circle tooltip__icon"></i>
                    <span className="tooltip-text tooltip-text--owner">
                        Creado por: Juan Peréz<br />
                        Email: juanperez@gmail.com<br />
                        Teléfono: 849-0789-0465
                    </span>
                </span>
            </div>
        </div>
        <div className="fullscreen-mode hidden">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <i className="fas fa-expand fullscreen-mode__icon"></i> <a href="#">Pantalla
                completa</a>
        </div>
    </div>
}

export const ContinueProcessPanel: React.FC<{}> = (props) => {
    return <div className="process">
        <AppLogo />
    </div>
}


