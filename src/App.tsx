import { Container } from "./components/Container/Container.tsx";
import { Heading } from "./components/Heading/Heading.tsx";
import { Logo } from "./components/Logo/Logo.tsx";
import { Menu } from "./components/Menu/Menu.tsx"

import "./styles/theme.css"
import "./styles/global.css"

export function App() {
    return (
    <>
        <Container>
            <Heading>Pomodoro Timer</Heading>
        </Container>


        <Container>
            <Logo></Logo>
        </Container>

        <Container>
           <Menu></Menu>
        </Container>
    </>
    )
}