import React from 'react'
import DocumentTitle from 'react-document-title';

import { getChildren } from 'jsonml.js/lib/utils';

import Demo from './Demo'
export default class ContentDoc extends React.Component {


  showDemos(demo, props) {

    return demo.map((d, index) => {
      return (
        <Demo key={index} {...d} {...props}/>
      )
    })
  }
  render() {
    const props = this.props
    const {pageData, utils, demos} = props
    const { meta, description, content } = pageData;
    const {chinese} = meta
    return (
      <DocumentTitle title={`${chinese}-lianjia tech`}>
        <article>
          <section className="markdown">
            <h1>{meta.title || meta.english} {meta.subtitle || meta.chinese}</h1>
            {
              props.utils.toReactComponent(
                ['section', { className: 'markdown' }]
                  .concat(getChildren(content))
              )
            }
            <h2>代码演示</h2>
          </section>
          <section>
            {
              demos && demos.length ? this.showDemos(demos, props) : null
            }
          </section>
          <section>
            {
              props.utils.toReactComponent(
                ['section', {
                  className: 'markdown api-container',
                }].concat(getChildren(pageData.api || ['placeholder']))
              )
            }
          </section>
        </article>
      </DocumentTitle>
    )
  }
}
