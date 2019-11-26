// components/Layout.js
import style from "styled-components"
import Header from "../header/header";
import NavBar from "../nav/nav";

const LayoutMain = style.main`
`

const LayoutWrapper = style.div`
    width: 100%;
`

const Layout = props => (
    <LayoutWrapper>
        <Header />
        <NavBar />
        <LayoutMain>
            {props.children}
        </LayoutMain>
    </LayoutWrapper>
);

export default Layout;