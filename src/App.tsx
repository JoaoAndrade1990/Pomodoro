import "./styles/theme.css"
import "./styles/global.css"
import { Heading } from "./components/Heading.tsx"
import { Timer as TimerIcon } from 'lucide-react'

export function App() {
    return (
    <>
    <Heading>
        Olá, mundo
        <button>
            <TimerIcon />
        </button>
    </Heading>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus iure velit eveniet, quos nostrum maiores natus eaque optio nesciunt explicabo, nulla totam hic tempora accusantium voluptates saepe provident enim.</p>
    </>
    )
}