import { Container } from "./components/Container/Container.tsx";
import { Heading } from "./components/Heading/Heading.tsx";
import { Logo } from "./components/Logo/Logo.tsx";
import { Menu } from "./components/Menu/Menu.tsx"
import { CountDown } from "./components/CountDown/CountDown.tsx"
import { DefaultInput } from './components/DefaultInput/DefaultInput';

import "./styles/theme.css"
import "./styles/global.css"


export function App() {
    return (
    <>
        <Container>
            <Logo></Logo>
        </Container>

        <Container>
           <Menu></Menu>
        </Container>

        <Container>
            <CountDown></CountDown>
        </Container>

        <Container>
            <form className="form">
                <div className="formRow">
                    <DefaultInput 
                    labelText="Qq coisa" 
                    id="meuInput" 
                    type="text"
                    title="titulo"
                    placeholder="Digite aqui"/>
                </div>

                <div className="formRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="formRow">
                    <p>Ciclos</p>
                    <p>0 0 0 0 0 0</p>
                </div>

                <div className="formRow">
                    <button>Enviar</button>
                </div>
            </form>
        </Container>
    </>
    )
}