import React from "react";
// import firebase from 'firebase';
import firebase, { googleProvider } from '../FirebaseApp';

export const AppContext = React.createContext({

});

export class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            showNav: false,
            activePage: 'home',

            // functionss
            toggleSideNav: this.toggleSideNav.bind(this),
            setContextState: this.setContextState.bind(this),
            login: this.login.bind(this),
            logout: this.logout.bind(this)
        };
    }


    async componentDidMount() {
        document.querySelector('html').classList.add('night-mode')
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
        })

        console.log('context mounts', this.state);
    }

    toggleSideNav() {
        console.log('working')
        this.setState({
            showNav: !this.state.showNav
        })
    }

    setContextState(newState) {
        this.setState(newState);
    }

    login() {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;
            var userData = {
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid,
                email: user.email,
                // token
            };
            var userJson = JSON.stringify(user);
            this.setState({
                user
            });
            localStorage.setItem('user', userJson);
        }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorMessage)
            // ...
        });
    }

    logout(){
        this.setState({
            user: null
        });
        localStorage.clear();
        sessionStorage.clear();
    }

    render() {
        return (
            <AppContext.Provider
                value={{ ...this.state }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export function withTheme(Component) {
    // ...and returns another component...
    return function ThemedComponent(props) {
        // ... and renders the wrapped component with the context!
        // Notice that we pass through any additional props as well
        return (
            <AppContext.Consumer>
                {context => <Component {...props} context={context} />}
            </AppContext.Consumer>
        );
    };
}
