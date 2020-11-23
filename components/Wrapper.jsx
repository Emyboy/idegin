import React, { Component } from 'react'
import { withTheme } from '../context/AppContext'

class Wrapper extends Component {
    render() {
        console.log('++++++++++++++', this.props)
        const { context} = this.props;
        return (
            <div className={context.showNav ? "wrapper" : 'wrapper wrapper__minify'}>
                <div className="sa4d25">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default withTheme(Wrapper);
