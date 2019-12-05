import AppNav from "../../styles/components/app-nav"
import Link from 'next/link';

const Nav = props => {
    const links = props.links || []
    const list = links.map((link,index)=>{
        return <HeaderLinks key={index} path={link.path} title={link.title} />
    })
    return (
        <AppNav visible={props.visible}>
            <AppNav.List>
                <AppNav.LinkWrapper>
                    <AppNav.Closer onClick={props.menuHandler}>X</AppNav.Closer>
                </AppNav.LinkWrapper>
                {list}
            </AppNav.List>
        </AppNav>
    )
}
const HeaderLinks = props => {
    return(
        <AppNav.LinkWrapper>
            <Link href={props.path}>
                <AppNav.Link>{props.title}</AppNav.Link>
            </Link>
        </AppNav.LinkWrapper>
    )
}
export default Nav