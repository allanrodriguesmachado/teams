import Header from "@components/Header"
import HighLight from "@components/HightLight"
import GroupCard from "@components/GroupCard"
import ListEmpty from "@components/ListEmpty"
import Button from "@components/Button"

import { useState } from "react"
import { FlatList } from "react-native"
import { Container } from "./styles"


export default function Groups() {
    const [groups, setGroups] = useState(['ewqewqe']);

    return (
        <Container>
            <Header />
            <HighLight title="Turmas" subTitle="Joge com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
                ListEmptyComponent={
                    () => <ListEmpty message="Que tal cadastrar sua primeira turma" />
                }
            />

            <Button title="Criar um novo Grupo" />

        </Container>
    )
}