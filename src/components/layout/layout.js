// components/Layout.js
import Head from 'next/head'
import Header from "../header/header"
import AppLayout from "../../styles/components/app-layout"
import Nav from "../nav"

const config = {
    nav: {
        links: [{
            path: "/index",
            title: "Home"
        }, {
            path: "/about", 
            title: "About Us"
        }],
        logo: "/static/logo.png",
        menu: "Menu"
    },
    meta: {
        title: "Yodi"
    }
}

class Layout extends React.Component {
    state = {
        menuVisible: false
    }
    menuHandler =()=>{
        this.state.menuVisible ? this.setState({menuVisible:false}):this.setState({menuVisible:true})
    }
    render(){
        return (
            <AppLayout>
                <Head>
                    <title>{config.meta.title}</title>
                </Head>
                <Header 
                    logo={config.nav.logo}
                    menu={config.nav.menu}
                    menuHandler={this.menuHandler}
                />
                <Nav 
                    links={config.nav.links} 
                    visible={this.state.menuVisible}
                    menuHandler={this.menuHandler}
                />
                <AppLayout.Main>
                    {this.props.children}
                </AppLayout.Main>
            </AppLayout>
        )
    }
}

export default Layout