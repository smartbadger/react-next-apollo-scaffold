import QuickStart from "../components/quick-start/quick-start"

class Index extends React.Component {
  state = {}
  componentDidMount() {
    console.log('mounted')
  }
 
  render() {
    return (
        <QuickStart />
    )
  }
}

export default Index;
