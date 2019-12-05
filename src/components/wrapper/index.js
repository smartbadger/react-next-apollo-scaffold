import { ThemeProvider} from "styled-components"
import Normalize from "../../styles/base/normalize"
import { Grommet } from "grommet"
// Setup Base Theme 

// Setup a Wrapper Component
import Layout from "../layout/layout"


const Wrapper = (props) => {
    return (
        <div>
            <Normalize />
            <ThemeProvider theme={props.theme}>
                <Grommet theme={props.theme}>
                    <Layout>
                        {props.children}
                    </Layout>
                </Grommet>
            </ThemeProvider>
        </div>
    )
}

export default Wrapper;