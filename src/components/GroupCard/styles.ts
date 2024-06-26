import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
height: 90px;
background-color:  ${({ theme }) => theme.COLORS.GRAY_500};
border-radius: 6px;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 24px;
margin: 12px;
`;

export const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
 color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(UsersThree).attrs(({theme})=> ({
    size: 32,
    color: theme.COLORS.GREEN_700,
    weight: 'fill'
}))`margin-right: 20px`