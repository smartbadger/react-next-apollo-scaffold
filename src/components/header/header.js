import AppHeader from "../../blocks/app-header"
import AppNav from "../../blocks/app-nav"
const Header = props => {
    return (
        <AppHeader>
            <AppHeader.Container>
                <AppHeader.Logo src={"/static/logo.png"}/>
            </AppHeader.Container>
            <AppNav>
                {props.children}
            </AppNav>
        </AppHeader>
    )
}

export default Header