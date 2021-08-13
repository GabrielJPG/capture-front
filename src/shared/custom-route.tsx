import React from 'react'
import * as ReactRouter from 'react-router-dom'
import { useProvideAuth } from '../hooks/Auth-hooks'
import { useHistory } from "react-router-dom";

/*
 * Route wrapper component that extracts route params
 * and passes them to the given component prop.
 */
export const CustomRoute = ({
    component: Component,
    ...rest
}: any) => {
    const auth = useProvideAuth();
    const history = useHistory();

    if (!auth.isAuth) {
        history.push("/login")
    }
    return (
        <ReactRouter.Route
            {...rest}
            render={({ match: { params } }) => <Component {...params} />}
        />
    )
}