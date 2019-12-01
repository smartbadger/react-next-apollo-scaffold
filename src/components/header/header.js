import AppHeader from "../../styles/components/app-header"
import AppNav from "../../styles/components/app-nav"

const Header = props => {
    return (
        <AppHeader>
            <AppHeader.LogoWrapper>
                <AppHeader.Title>Yodi</AppHeader.Title>
            </AppHeader.LogoWrapper>
            <AppNav>
                {props.children}
            </AppNav>
        </AppHeader>
    )
}

export default Header