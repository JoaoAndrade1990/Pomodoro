import styles from "./Heading.module.css"
import type { ReactNode } from 'react'

type HeadingProps = {
    children: React.ReactNode;
}

// O componente Heading é um componente funcional que recebe props do tipo HeadingProps, que inclui uma propriedade children do tipo ReactNode. Ele retorna um elemento h1 com a classe CSS definida em styles.heading, e o conteúdo do children é renderizado dentro desse elemento h1.

export function Heading(props: HeadingProps) {
    const { children } = props;
    return <h1 className={styles.heading}>{children}</h1>
}