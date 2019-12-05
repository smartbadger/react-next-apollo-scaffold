import AppHeader from "../../styles/components/app-header"

const Header = props => {
    return (
        <AppHeader>
            <AppHeader.LogoWrapper>
                <AppHeader.Logo src={props.logo}/>
            </AppHeader.LogoWrapper>
            <AppHeader.Menu onClick={props.menuHandler}>
                <AppHeader.MenuText>{props.menu}</AppHeader.MenuText>
                <AppHeader.MenuIcon />
            </AppHeader.Menu>
        </AppHeader>
    )
}

export default Header