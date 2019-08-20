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
        <div className="something util__flex-eq">
          <img src={this.resizedImage()} className="something__image" />
          <h2>{content.name}</h2>
          <div className="something__description">
            {content.description}
          </div>
          <style jsx>{`
            .something {
              text-align: center;
              padding: 30px 10px 100px;
            }

            .something__image {
              width: 100%;
              height: 500px;
            }
          `}</style>
        </div>
      </SbEditable>
    )
  }
}