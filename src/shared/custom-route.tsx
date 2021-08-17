import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useProvideAuth } from '../hooks/Auth-hooks'
import { useNotify } from '../hooks/Notification-hook';

/*
 * Route wrapper component that extracts route params
 * and passes them to the given component prop.
 */
export const AuthRoute = ({
    component: Component,
    ...rest
}: any) => {
    const auth = useProvideAuth();
    const history = useHistory();
    const notify = useNotify('error');

    if (!auth.isAuth) {
        notify.show('You must be logged in to access this page.');
        history.push("/login")
    }


    return (
        <Route
            {...rest}
            render={({ match: { params } }) => <Component {...params} />}
        />
    )
}