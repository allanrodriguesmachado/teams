
import { BackButton, BackIcon, Container, Logo } from "./styles";

import logImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean;
}

export default function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logImg} />
        </Container>
    )
}