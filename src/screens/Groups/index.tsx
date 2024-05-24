import Header from "@components/Header"
import { Container} from "./styles"
import HighLight from "@components/HightLight"
import GroupCard from "@components/GroupCard"
import { useState } from "react"
import { FlatList } from "react-native"

export default function  Groups() {
    const [groups, setGroups] = useState(['Galera do Diablo IV', 'Galera do COD']);

    return (
        <Container>
            <Header />
            <HighLight title="Turmas" subTitle="Joge com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <GroupCard title={item} />
                )}
            />
            
        </Container>
    )
}