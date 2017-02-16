import React from 'react'
import {Link} from 'react-router'

import config from '../../'

import ContentDoc from './ContentDoc'
import MainDoc from './MainDoc'

export default class Content extends React.Component{

  getSubMenuItem(list){

    return (
      <ul className="sub-menu-item">
        {
          list.map((a,index)=>{
            const url = a.meta.filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '')
            return (
              <li key={index} >
                <Link to={url}>
                  {a.meta.chinese}-{a.meta.english}
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
  getMenus(lib){

    const menuMap ={}

    lib.forEach((item) =>{
      let category = item.meta.category
      if(!menuMap[category]){
        menuMap[category] = []
      }
      menuMap[category].push(item)
    })

    let menuList = Object.keys(menuMap)
          .sort((a,b) => config.typeOrder[a] > config.typeOrder[b])
          .map((item)=>{
            const menu = menuMap[item]
            return (
              <li key={item}>
                <div>
                <h4>{item}</h4>
                {this.getSubMenuItem(menu)}
                </div>
              </li>
            )
          })
    return (
      <ul className="menu-item">
        <li >
          <div>
          <h4>
            <Link to="/">ReadMe</Link>
          </h4>
          </div>
        </li>
        {menuList}
      </ul>
    )
  }
  render(){
    const pageData = this.props.lib.filter((page) =>{
      return page.meta.filename
            .startsWith(this.props.location.pathname)
    })[0]

    let content =  null
    if(pageData){
      content = <ContentDoc {...this.props} pageData={pageData} />
    }else{
      content = <MainDoc {...this.props} />
    }

    return (
      <div className="ant-row">
        <div className="main-left">
          {
            this.getMenus(this.props.lib)
          }
        </div>
        <div className="main-container">
        {
          content
        }
        </div>
      </div>
    )
  }
}
