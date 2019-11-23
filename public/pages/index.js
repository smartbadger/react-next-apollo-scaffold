import {Welcome, Button, Message} from "../../src/components/quick-start/quick-start"
class Index extends React.Component {
  state = {}
  componentDidMount() {
    console.log('mounted')
  }
 
  render() {
    return (
        <Welcome>
            <Button>
                <Message>Yodi Quick Start</Message>
            </Button>
        </Welcome>
    )
  }
}

export default Index;
