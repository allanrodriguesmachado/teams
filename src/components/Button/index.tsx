import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonTypeStyledProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
    type?: ButtonTypeStyledProps;
}

export default function Button({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}