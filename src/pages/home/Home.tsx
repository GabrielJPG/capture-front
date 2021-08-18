import { AuthRoute } from '../../shared/custom-route';
import { EmptyHomePage, ProccessHeader, SearchProcsess } from '../Dashboard/Index';
import { FileProcessHeader, FileSearchProcess, FilesPage } from '../Files/Index';
import { Layout } from '../../shared/Layout';
import { NoMatch, ProccessHeader404, Procsess404 } from '../404/private';
import {
    Switch,
    useHistory,
    useLocation
} from 'react-router-dom';
import { Profile, ProfileProccessHeader, ProfileSearchProcsess } from '../Profile';
import { ProccessHeaderSetting, ProcsessSettings, Settings } from '../Settings';
import { ProccessHeaderSearch, ProcsessSearch, Search } from '../search/search';



export const Home: React.FC = () => {
    const section = '/app'
    const history = useHistory();
    const routes = useLocation();

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
        '/app/profile': {
            header: <ProfileProccessHeader />,
            search: <ProfileSearchProcsess />,
        },
        '*': {
            header: <ProccessHeader404 />,
            search: <Procsess404 />,
        },
        '/app/settings': {
            header: <ProccessHeaderSetting />,
            search: <ProcsessSettings />,
        },
        '/app/search': {
            header: <ProccessHeaderSearch />,
            search: <ProcsessSearch />,
        }
    } as any
    let render = pages[useLocation().pathname]

    if (!render) {
        render = pages['*']
    }

    if (routes.pathname === '/app') {
        history.push("/app/home")
    }

    return <Layout ProcessHeader={render ? render.header : <div />} SearchPanel={render ? render.search : <div />}>
        <Switch>
            <AuthRoute path={`${section}/home`} exact component={EmptyHomePage} />
            <AuthRoute path={`${section}/documents`} component={Documents} />
            <AuthRoute path={`${section}/files`} component={FilesPage} />
            <AuthRoute path={`${section}/files/:id`} component={FilesPage} />
            <AuthRoute path={`${section}/settings`} component={Settings} />
            <AuthRoute path={`${section}/qr-document`} component={qrDocument} />
            <AuthRoute path={`${section}/profile`} component={Profile} />
            <AuthRoute path={`${section}/search`} component={Search} />
            <AuthRoute path={`${section}/*`}>
                <NoMatch />
            </AuthRoute>
        </Switch>
    </Layout>
}

const qrDocument: React.FC = () => <div>x</div>
const Documents: React.FC = () => <div>Documents</div>
