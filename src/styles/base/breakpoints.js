import { generateMedia } from "styled-media-query";
const defaults = {
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '450px',
}
const breakPoint = generateMedia(defaults)
export default breakPoint