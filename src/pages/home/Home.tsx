import { Route, Switch, useLocation } from "react-router-dom"
import { AuthRoute } from "../../shared/custom-route"
import { Layout } from "../../shared/Layout"

export const Home: React.FC = () => {
    const section = '/app'
    return <div>
        <Layout>
            <div>Home</div>
            <Switch>
                <Route path={`${section}/Dashboard`} component={Dashboard} />
                <AuthRoute path={`${section}/Documents`} component={Documents} />
                <AuthRoute path={`${section}/Files`} component={Files} />
                <AuthRoute path={`${section}/Settings`} component={Settings} />
                <Route path={`${section}/*`}>
                    <NoMatch />
                </Route>
            </Switch>
        </Layout>
    </div>
}

const Dashboard = () => <div>Dashboard</div>
const Documents = () => <div>Documents</div>
const Files = () => <div>Files</div>
const Settings = () => <div>Settings</div>
const NoMatch = () => {
    let location = useLocation();
    return <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
}