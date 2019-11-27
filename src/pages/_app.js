import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import App from "next/app"
import fetch from "node-fetch"
import { ThemeProvider} from "styled-components"
import Normalize from "../styles/normalize"
import { Grommet } from "grommet"
// Setup Base Theme 
import theme from "../styles/theme"
theme.mode = "light" // set the theme mode

// Setup the Apollo Client
const client = new ApolloClient({
    fetchOptions: {
      credentials: "include"
    },
    fetch: fetch
})

// Main App Wrapper
// Apollo Wrapper -> ApolloProvider
// Component -> React Component 
class MyApp extends App {
  static async getInitialProps(server) {
    console.log(server)
    return {}
  }
  render() {
    const { Component, pageProps} = this.props;
    return (
        <ApolloProvider client={client}>
            <Normalize />
            <ThemeProvider theme={theme}>
              <Grommet theme={theme}>
                <Component {...pageProps}/>
              </Grommet>
            </ThemeProvider>
        </ApolloProvider>
    )
  }
}

export default MyApp;