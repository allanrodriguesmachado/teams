import { RocketLaunch } from "phosphor-react-native";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-self: center;
    margin-top: 50px;
`;

export const Message = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-weight: bold;
`;

export const Rocket = styled(RocketLaunch).attrs(({theme}) => ({
    size: 70,
    color: theme.COLORS.GREEN_500,
    weight: 'fill'
}))``;