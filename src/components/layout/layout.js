// components/Layout.js
import Head from 'next/head'
import Header from "../header/header"
import AppLayout from "../../styles/components/app-layout"

const Layout = props => (
    <AppLayout>
        <Head>
            <title>Default Page title</title>
        </Head>
        <Header />
        <AppLayout.Main>
            {props.children}
        </AppLayout.Main>
    </AppLayout>
)

export default Layout