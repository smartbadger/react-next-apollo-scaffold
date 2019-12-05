import HeroBanner from "../styles/components/hero-banner"
import {Box} from "grommet"
class Index extends React.Component {
  state = {}
  componentDidMount() {
    console.log('mounted')
  }
 
  render() {
    return (
      <div>
        <HeroBanner>
          <HeroBanner.FullBleedWrapper>
            <HeroBanner.BackgroundImage src={"https://picsum.photos/1600/900"}>
              <HeroBanner.CTAWrapper>
                <HeroBanner.CTA primary label={"Learn More"}/>
              </HeroBanner.CTAWrapper>
            </HeroBanner.BackgroundImage>
          </HeroBanner.FullBleedWrapper>
        </HeroBanner>
        <Box padding="small" height={"100px"} />
        <Box padding="small" />
        <HeroBanner>
          <HeroBanner.FullBleedWrapper></HeroBanner.FullBleedWrapper>

        </HeroBanner>
      </div>
    )
  }
}

export default Index;
