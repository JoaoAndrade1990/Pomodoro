import { Container } from "./components/Container/Container.tsx";
import { Heading } from "./components/Heading/Heading.tsx";
import { Logo } from "./components/Logo/Logo.tsx";

import "./styles/theme.css"
import "./styles/global.css"

export function App() {
    return (
    <>
        
        <Container>
            <Logo></Logo>
        </Container>

        <Container>
           <Heading>MENU</Heading>
        </Container>
    </>
    )
}