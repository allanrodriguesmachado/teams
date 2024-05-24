import { View } from "react-native"
import { Container, Message, Rocket} from "./styles"

type Props = {
    message: string
}
export default function ListEmpty({ message }: Props) {
    return (
        <Container>
            <View style={{alignItems: 'center', marginBottom: 30 }}>
            <Rocket />
            </View>
            <Message>{message}</Message>
        </Container>
    )
}