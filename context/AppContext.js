import React from "react";



export const AppContext = React.createContext({
    
});

export class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            showNav: false,



            // functionss
            toggleSideNav: this.toggleSideNav.bind(this)
        };
    }



    async componentDidMount() {
        console.log('context mounts', this.state);
        document.querySelector('html').classList.add('night-mode')
    }

    toggleSideNav(){
        console.log('working')
        this.setState({
            showNav: !this.state.showNav
        })
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
