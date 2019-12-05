import styled from 'styled-components';

const AppNav = styled.nav`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    will-change: opacity;
    transition: 1s ease-in-out all;
    opacity: ${props => props.visible ? "1":"0"};
    visibility: ${props => props.visible ? "visible":"hidden"}
    background-color: ${props => props.theme.global.colors.brand[props.theme.mode]};
`
const Link = styled.a`
    text-decoration: none;
    color: white;
`
const LinkWrapper = styled.li`
    font-size: 3rem;
    line-height: 3.5rem;
    display: block;
`
const List = styled.ul`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: center;
`
const Closer = styled.span`
    width: 4rem;
    height: 4rem;
    background: blue;
    &:before {
        display: block;
        width: 1rem;
        height: 1rem;
        background: yellow;
    }
`
AppNav.List = List
AppNav.Closer = Closer
AppNav.LinkWrapper = LinkWrapper
AppNav.Link = Link
export default AppNav