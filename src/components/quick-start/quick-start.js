import styled from "styled-components"

const Welcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const Button = styled.button`
    background-color: ${props => props.bgColor ? props.bgColor:props.theme.bgColor};
    border-radius: 5px;
    &:hover {
        ${props => props.bgColorHover ? props.bgColor:props.theme.bgColorHover}
    }
`
const Message = styled.h1`
    font-family: ${props => props.font ? props.font : props.theme.font} 
`
export {Welcome, Message, Button}