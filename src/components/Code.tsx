import { ReactNode } from "react"

export default function Code({ children }: { children: ReactNode }) {
    return (
        <pre className="has-text-white is-size-5">{children}</pre>
    )
}

export function Kw({ x }: { x: string }) {
    return <span className="kw">{x}</span>
}

export function N({ x }: { x: string }) {
    return <span className="n">{x}</span>
}

export function Op({ x }: { x: string }) {
    return <span className="op">{x}</span>
}

export function S({ x }: { x: string }) {
    return <span className="str">{x}</span>
}

export function C({ x }: { x: string }) {
    return <span className="c">{x}</span>
}