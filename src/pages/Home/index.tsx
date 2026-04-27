import { MainTemplate } from '../../templates/MainTemplates/index';
import { Container } from '../../components/Container/Container';
import { CountDown } from '../../components/CountDown/CountDown.tsx';
import { MainForm } from '../../components/MainForm/MainForm';

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <CountDown></CountDown>
            </Container>

            <Container>
                <MainForm></MainForm>
            </Container>
        </MainTemplate>

    )
}