// components/Layout.js
import Header from "../header/header";
import AppLayout from "../../blocks/app-layout"

const Layout = props => (
    <AppLayout>
        <Header />
        <AppLayout.Main>
            {props.children}
        </AppLayout.Main>
    </AppLayout>
)

export default Layout