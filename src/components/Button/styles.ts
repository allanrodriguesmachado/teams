import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export type ButtonTypeStyledProps  = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyledProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    margin: 20px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ?  theme.COLORS.GREEN_700 :  theme.COLORS.RED_DARK};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: bold;
`;