import { Container, Icon, Title } from "./styles"
import { TouchableHighlightProps } from "react-native"

type Props = TouchableHighlightProps &{
    title: string;
}

export default function GroupCard({title, ...props}: Props) {
    return (
        <Container {...props}>
            <Icon />
            <Title >{title}</Title>
        </Container>
    )
}