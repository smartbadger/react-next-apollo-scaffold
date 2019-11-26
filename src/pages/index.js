import {Welcome, Button, Message} from "../components/quick-start/quick-start"
import Layout from "../components/layout/layout"
class Index extends React.Component {
  state = {}
  componentDidMount() {
    console.log('mounted')
  }
 
  render() {
    return (
      <Layout>
        <Welcome>
            <Button>
                <Message>Yodi Quick Start</Message>
            </Button>
        </Welcome>
      </Layout>
    )
  }
}

export default Index;
