import { Container } from "./components/Container/Container.tsx";
import { Logo } from "./components/Logo/Logo.tsx";
import { Menu } from "./components/Menu/Menu.tsx"
import { CountDown } from "./components/CountDown/CountDown.tsx"
import { DefaultInput } from './components/DefaultInput/DefaultInput';

import "./styles/theme.css"
import "./styles/global.css"
import { Cycles } from "./components/Cycles/Cycles.tsx";


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
                    placeholder="Digite aqui"
                    />
                </div>

                <div className="formRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="formRow">
                    <Cycles></Cycles>
                </div>

                <div className="formRow">
                    <button>Enviar</button>
                </div>
            </form>
        </Container>
    </>
    )
}