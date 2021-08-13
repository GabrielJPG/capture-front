import { Route, Switch, useLocation } from "react-router-dom"
import { CustomRoute } from "../../shared/custom-route"

export const Home: React.FC = () => {
    return <div>
        <div>Home</div>
        <Switch>
            <Route path="/app/p1" component={P1} />
            <CustomRoute path="/app/p2" component={P2} />
            <CustomRoute path="/app/p3" component={P3} />
            <CustomRoute path="/app/*">
                <NoMatch />
            </CustomRoute>
        </Switch>
    </div>
}

const P1 = () => <div>P1</div>
const P2 = () => <div>P2</div>
const P3 = () => <div>P3</div>
const NoMatch = () => {
    let location = useLocation();

    return <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
}