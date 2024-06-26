import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.GRAY_100};
`;