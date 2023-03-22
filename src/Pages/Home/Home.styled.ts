import styled from "styled-components";
import {COLORS} from "../../Constants/colors";

export const TitleSection = styled('div')`
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    height: 40vh;
    text-align: center;
`

export const Title = styled('h1')`
    padding-top: 8%;
`

export const Subtitle = styled('p')`
    color: ${COLORS.GRAY};
    font-size: 21px
`