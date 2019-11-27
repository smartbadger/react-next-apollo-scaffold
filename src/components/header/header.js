import AppHeader from "../../styles/components/app-header"
import AppNav from "../../styles/components/app-nav"
const Header = props => {
    return (
        <AppHeader>
            <AppHeader.LogoWrapper>
                <AppHeader.Logo src={"/static/logo.png"}/>
            </AppHeader.LogoWrapper>
            <AppNav>
                {props.children}
            </AppNav>
        </AppHeader>
    )
}

export default Header