import { DefaultInput } from "../DefaultInput/DefaultInput.tsx";
import { Cycles } from "../Cycles/Cycles.tsx";
import { DefaultButton } from '../DefaultButton/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm(){
    return(
        <>
            <div className="formRow">
                <DefaultInput 
                labelText= "task"
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
                <DefaultButton icon={<PlayCircleIcon />}></DefaultButton>
            </div>
        </>
    );
}