import { AuthRoute } from '../../shared/custom-route';
import { EmptyHomePage, ProccessHeader, SearchProcsess } from '../Dashboard/Index';
import { FileProcessHeader, FileSearchProcess, FilesPage } from '../Files/Index';
import { Layout } from '../../shared/Layout';
import { NoMatch } from '../404/private';
import {
    Route,
    Switch,
    useHistory,
    useLocation
} from 'react-router-dom';
import { useContext } from 'react';
import { ApplicationContext } from '../../contexts/App.Context';



export const Home: React.FC = () => {
    const section = '/app'
    const history = useHistory();
    const routes = useLocation();
    const { session, isAuth } = useContext(ApplicationContext);

    console.log([session, isAuth]);

    const pages = {
        '/app/home': {
            header: <ProccessHeader />,
            search: <SearchProcsess />,
        },
        '/app/files': {
            header: <FileProcessHeader />,
            search: <FileSearchProcess />,
        },
        '/app/documents': {
            header: <ProccessHeader />,
            search: < SearchProcsess />,
        },
        '/app/qr-documents': {
            header: <ProccessHeader />,
            search: < SearchProcsess />,
        },
        '/app/settings': Settings,
    } as any
    const render = pages[useLocation().pathname]

    if (routes.pathname === '/app') {
        history.push("/app/home")
    }

    return <Layout ProcessHeader={render ? render.header : <div />} SearchPanel={render ? render.search : <div />}>
        <Switch>
            <AuthRoute path={`${section}/home`} exact component={EmptyHomePage} />
            <AuthRoute path={`${section}/documents`} component={Documents} />
            <AuthRoute path={`${section}/files`} component={FilesPage} />
            <AuthRoute path={`${section}/settings`} component={Settings} />
            <AuthRoute path={`${section}/settings`} component={qrDocument} />
            <AuthRoute path={`${section}/*`}>
                <NoMatch />
            </AuthRoute>
        </Switch>
    </Layout>
}

const qrDocument: React.FC = () => <div>x</div>
const Documents: React.FC = () => <div>Documents</div>
const Settings: React.FC = () => <div>Settings</div>