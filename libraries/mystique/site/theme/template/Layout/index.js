import React from 'react';
import '../../static/style';
import Header from './Header'

const config = require('../../index');


export default class SiteLayout extends React.Component {
    componentDidMount() {
        const loadingNode = document.getElementById("ant-site-loading")
        if (loadingNode) {
            setTimeout(() => {
                loadingNode.parentNode.removeChild(loadingNode)
            }, 450)
        }
    }
    render() {
        return (
            <div className="page-wrapper">
                <Header {...this.props}/>
                <div className="main-wrapper">
                {
                    this.props.children
                } 
                </div>
            </div>
        )
    }
}