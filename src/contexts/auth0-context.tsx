import React, {Component, createContext, useContext} from "react";
import createAuth0Client, {Auth0ClientOptions} from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js";

interface ContextValueType {
    isAuthenticated?: boolean,
    user?: any,
    isLoading?: boolean,
    handleRedirectCallback?: () => void,
    getIdTokenClaims?: (...p: any) => any,
    loginWithRedirect?: (...p: any) => any,
    getTokenSilently?: (...p: any) => any,
    logout?: (...p: any) => any,
}

// create the context

export const Auth0Context: any = createContext<ContextValueType | null>(null);
export const useAuth0: any = () => useContext(Auth0Context);

interface IState {
    authClient: any,
    isLoading: boolean,
    isAuthenticated: boolean,
    user?: any,
}

export class Auth0Provider extends Component<{}, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isLoading: true,
            isAuthenticated: false,
            user: null,
            authClient: Auth0Client,
        };
    }

    config: Auth0ClientOptions = {
        domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
        client_id: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
        redirect_uri: window.location.origin
    };

    componentDidMount() {
        this.initializeAuth0();
    }

    // initialize the auth0 library

    initializeAuth0 = async () => {
        const auth0Client = await createAuth0Client(this.config);
        this.setState({auth0Client});

        if (window.location.search.includes('code=')) {
            return this.handleRedirectCallback();
        }

        const isAuthenticated = await auth0Client.isAuthenticated();
        const user = isAuthenticated ? await auth0Client.getUser() : null;
        this.setState({isLoading: false, isAuthenticated, user});
    };


    render() {

    }
}