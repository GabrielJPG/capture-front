import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Layout } from "../../shared/Layout"

export const Search: React.FC = () => {

    return <div>
        <Layout>
            <div className="align-content-center d-flex h-100 justify-content-center u-bg-white">
                <div className="u-mt-10 w-50 position-relative">
                    <h3 className="secondary-heading text-center u-text-color u-size-2 mb-5">Búsqueda de expediente</h3>
                    <div className="c-search-filter">
                        <input type="text" placeholder="Digite el numero de expediente" className="c-search-filter__input"/>
                        <FontAwesomeIcon className="c-search-filter__icon" icon={faSearch} />
                        <a href="#" className="btn btn-primary btn-animate btn-filter-search" >Buscar</a>
                       
                    </div>
                    
                    <iframe className="w-100 h-50" src="http://demo.prodoctivity.info/anim/SearchDocument.html" frameBorder="0" ></iframe>

                    {/* Apply " js-eb-show " class to expedient-box component to show it */}
                    <div className="c-expedient-box">
                        <h2 className="mt-2 secondary-heading text-center u-size-2 u-text-color">Expediente encontrado</h2>
                        <hr />
                        <div className="d-flex justify-content-between mb-5">
                            <div>
                                <div className="u-text-color">Sub-Categoria</div>
                                <div className="u-bold">Caso</div>
                            </div>
                            <div>
                                <div className="u-text-color">Código de expediente interno</div>
                                <div className="u-bold">MH415541HF</div>
                            </div>
                            <div>
                                <div className="u-text-color">Código tribunal</div>
                                <div className="u-bold">055400000</div>
                            </div>
                        </div>
                        <p className="mb-5 mt-4 text-center u-color-primary">Escane el documento que desea agregar al expediente</p>
                        <a href="#" className="btn btn-primary btn-animate u-size-normal m-auto">Escanear</a>
                    </div>
                </div>

               
            </div>
            
        </Layout>
    </div>
}