import React from 'react'
import SbEditable from 'storyblok-react'

export default ({ content }) => (
  <SbEditable content={content}>
    <div className="homeimage">
      <img src={content.image} />
      <style jsx>{`
        .homeimage img {
          width: 100%;
          max-height: 500px;
        }
      `}</style>
    </div>
  </SbEditable>
)