import styled from "styled-components"
import { Button } from 'grommet';

const HeroBanner = styled.div`
    overflow: visible;
    height: ${props => props.height || '100vh'};
    position: relative;
`
const FullBleedWrapper = styled.div`
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100vw;
    position: absolute;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

`
const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('${props=> props.src}');
    background-position: ${props => props.backgroundPosition || 'center'};
    background-repeat: ${props => props.backgroundRepeat || 'no-repeat'};
    background-size: ${props => props.backgroundSize || 'cover'};
`
const Image = styled.img`
`

const ImageWrapper = styled.div`
`

const CTAWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

`
const CTA = Button

HeroBanner.FullBleedWrapper = FullBleedWrapper
HeroBanner.BackgroundImage = BackgroundImage
HeroBanner.Image = Image
HeroBanner.ImageWrapper = ImageWrapper
HeroBanner.CTAWrapper = CTAWrapper
HeroBanner.CTA = CTA


export default HeroBanner