import styled from 'styled-components'
import Logo from './logo'
import Title from './title'
import Container from './container'

const AppHeader = styled.header`
  background: ${props=> props.theme.global.colors.brand[props.theme.mode]};
  width: 100%;
  position: relative;
  height: 3rem;
  display: flex;
  padding: 0.25rem;
`

AppHeader.Container = Container
AppHeader.Logo = Logo
AppHeader.Title = Title

export default AppHeader