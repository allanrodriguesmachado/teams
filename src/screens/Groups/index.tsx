import Header from "@components/Header"
import { Container} from "./styles"
import HighLight from "@components/HightLight"

export default function  Groups() {
    return (
        <Container>
            <Header />
            <HighLight title="Turmas" subTitle="Joge com a sua turma" />
        </Container>
    )
}