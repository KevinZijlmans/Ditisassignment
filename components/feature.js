import React from 'react'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        <div className="feature util__flex-eq">
          <h2>{content.name}</h2>
        </div>
      </SbEditable>
    )
  }
}