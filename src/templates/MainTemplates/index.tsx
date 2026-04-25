import { Container } from "../../components/Container/Container.tsx";
import { Logo } from "../../components/Logo/Logo.tsx";
import { Menu } from "../../components/Menu/Menu.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {
    return (
    <>
        <Container>
            <Logo></Logo>
        </Container>

        <Container>
           <Menu></Menu>
        </Container>

        {children}

        <Container>
            <Footer></Footer>
        </Container>
    </>
    )
}