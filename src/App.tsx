import "./styles/theme.css"
import "./styles/global.css"
import { Container } from './components/Container';
import { Heading } from "./components/Heading.tsx";

export function App() {
    return (
    <>
        
        <Container>
            <Heading>LOGO</Heading>
        </Container>

        <Container>
           <Heading>MENU</Heading>
        </Container>
    </>
    )
}