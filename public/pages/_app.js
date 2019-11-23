import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import App from "next/app"
import fetch from "node-fetch"
import { ThemeProvider} from "styled-components"
// Setup Base Theme 
import theme from "../../src/components/theme"

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
            <ThemeProvider theme={theme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        </ApolloProvider>
    )
  }
}

export default MyApp;
