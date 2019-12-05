import styled from 'styled-components'
import colorConvert from "../../services/color-convert"

const Logo = styled.img`
  width: auto;
  margin-left: 0;
  margin-right: auto;
  height: 100%;
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0;
`

const AppHeader = styled.header`
  background: ${props=> colorConvert.rgba(props.theme.global.colors.brand[props.theme.mode], 0.8)};
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 5%;
  position: fixed;
  z-index: 1;
`

const MenuIcon = styled.div`

`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const MenuText = styled.span`
  font-size: 2rem;
  color: white;
`

AppHeader.LogoWrapper = LogoWrapper
AppHeader.Logo = Logo
AppHeader.Menu = Menu
AppHeader.MenuIcon = MenuIcon
AppHeader.MenuText = MenuText


export default AppHeader