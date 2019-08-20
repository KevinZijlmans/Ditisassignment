import NextHead from 'next/head'
import Components from '../components/index'
import StoryblokService from '../utils/storyblok-service'
import SbEditable from 'storyblok-react'
import React from 'react'
import Layout from '../components/layout'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pageContent: props.page.data.story.content
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let [page, settings] = await Promise.all([
        StoryblokService.get('cdn/stories/about'),
        StoryblokService.get('cdn/stories/en/settings')
      ])
  
      return {
        page,
        settings
      }
    }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const { settings } = this.props
    const { pageContent } = this.state
    return (
      <Layout settings={settings.data.story}>
        {Components(pageContent)}
      </Layout>
    )
  }
}
