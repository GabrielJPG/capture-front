import { useContext } from 'react';
import { ApplicationContext } from '../../../contexts/App.Context';


export const SearchBoxHeader: React.FC<{ pendingDocuments: number; }> = (props) => {
    const { translate } = useContext(ApplicationContext);
    const { pendingDocuments } = props;
    return <div className="process__heading">
        <span className="process__amount">{pendingDocuments}</span>
        <h3 className="secondary-heading">{translate("PendingDocumentHeader")}</h3>
        <h4 className="tertiary-heading">{pendingDocuments >= 1 ? translate("SelectDocumentToContinueHeader") : ""}</h4>
    </div>;
};
