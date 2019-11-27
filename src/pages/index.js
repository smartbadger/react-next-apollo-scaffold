import Layout from "../components/layout/layout"
import QuickStart from "../components/quick-start/quick-start"

class Index extends React.Component {
  state = {}
  componentDidMount() {
    console.log('mounted')
  }
 
  render() {
    return (
      <Layout>
        <QuickStart />
      </Layout>
    )
  }
}

export default Index;
