import React from 'react'
import cfg from '../../'

export default class Header extends React.Component{

    // 获得文档头部
    docHeaders(){
        cfg.docHeader = cfg.docHeader ||[]
        return (
            <ul className="header-menu">
            {
                cfg.docHeader.map((m,i) =>{
                    return (
                        <li key={i}>
                        <a href={m.url}>{m.name}</a>
                        </li>
                    )
                })
            }
            </ul>
        );
    }
    render(){
        return (
            <header className="clearfix" id="header">
            <a href="/" className="logo">
                <img src="http://s1.ljcdn.com/link-static/resource/img/tech/rectangular-logo.png"/>
            </a>
            {
                this.docHeaders()
            }
            </header>
        )
    }
}