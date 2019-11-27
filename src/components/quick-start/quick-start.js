import {Button,Box,Heading} from "grommet"
import CenterBlock from "../../blocks/center-block"
const QuickStart = props => {
    return(
        <CenterBlock>
            <Button primary>
                <Box pad="small">
                    <Heading color="light-1">Yodi QuickStart</Heading>
                </Box>
            </Button>
        </CenterBlock>
    )
}
export default QuickStart
