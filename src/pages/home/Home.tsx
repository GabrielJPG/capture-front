import { Route, Switch, useHistory, useLocation } from "react-router-dom"
import { AuthRoute } from "../../shared/custom-route"
import { EmptyHomePage, ProccessHeader, SearchProcsess } from '../Dashboard/Index'
import { FilesPage, FileProcessHeader, FileSearchProcess } from '../Files/Index'
import { Layout } from "../../shared/Layout"



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
        '/app/settings': Settings,
    } as any
    const render = pages[useLocation().pathname]

    if (routes.pathname === '/app') {
        history.push("/app/home")
    }

    return <Layout ProcessHeader={render ? render.header : <div />} SearchPanel={render ? render.search : <div />}>
        <Switch>
            <Route path={`${section}/home`} exact component={EmptyHomePage} />
            <AuthRoute path={`${section}/documents`} component={Documents} />
            <Route path={`${section}/files`} component={FilesPage} />
            <AuthRoute path={`${section}/settings`} component={Settings} />
            <AuthRoute path={`${section}/settings`} component={qrDocument} />
            <Route path={`${section}/*`}>
                <NoMatch />
            </Route>
        </Switch>
    </Layout>
}

const qrDocument: React.FC = () => <div>x</div>
const Documents: React.FC = () => <div>Documents</div>
const Settings: React.FC = () => <div>Settings</div>
const NoMatch: React.FC = () => {
    let location = useLocation();
    return <div className="process-workspace">
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
}

