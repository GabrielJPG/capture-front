export const fakeAuth = {
    isAuthenticated: false,
    singIn: (cb: any) => {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signOut: (cb: any) => {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};