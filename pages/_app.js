import React from "react"
import App, { Container } from "next/app"
import NextNprogress from "nextjs-progressbar"
import withGA from "next-ga"
import Router from "next/router"


class MyApp extends App {
    state = {
        night: false,
    }
    static async getInitialProps ({ Component, ctx, router }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps,
        }
    }
    render () {
        const { Component, pageProps } = this.props
        return (
            <withGA>
            <Container>
                <NextNprogress
                color="#29D"
                startPosition="200"
                stopDelayMs="200"
                height="5"
                 />
                <Component {...pageProps} />
            </Container>
            </withGA>
        )
    }
}

export default withGA("UA-146085375-1", Router)(MyApp);