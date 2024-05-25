import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import HighLight from "@components/HightLight";
import Button from "@components/Button";

export default function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <HighLight title="Nova Turma" subTitle="Criar a turma para adicionar as pessoas" />
            </Content>

            <Button  title="Criar" />
        </Container>
    )
}