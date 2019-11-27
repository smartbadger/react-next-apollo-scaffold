import styled from 'styled-components'

const Logo = styled.img`
  width: auto;
  margin: 0 .5rem;
  height: 100%;
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0;
`

const AppHeader = styled.header`
  background: ${props=> props.theme.global.colors.brand[props.theme.mode]};
  width: 100%;
  position: relative;
  height: 4rem;
  display: flex;
  padding: 0.25rem;
`

AppHeader.LogoWrapper = LogoWrapper
AppHeader.Logo = Logo

export default AppHeader