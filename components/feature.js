import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  resizedImage(index) {
    const { content } = this.props
    if (typeof content.image !== 'undefined') {
      return content.image.replace('//img2.storyblok.com/80x80', '//a.storyblok.com')
    }
    return null
  }

  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        <div className="feature util__flex-eq">
          <img src={this.resizedImage()} className="feature__image" />
          <h2>{content.name}</h2>
          <div className="feature__description">
            {content.description}
          </div>
          <style jsx>{`
            .feature {
              text-align: center;
              padding: 30px 10px 100px;
            }

            .feature__image {
              max-width: 80px;
            }
          `}</style>
        </div>
      </SbEditable>
    )
  }
}