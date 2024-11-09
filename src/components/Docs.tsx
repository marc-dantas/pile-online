import { ReactNode } from "react"

export function DocsContent({ children }: { children: ReactNode }) {
    return (
        <div id="top" className="box p-6">
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export function Title({ children }: { children: ReactNode }) {
    return (
        <h1 className="title is-1">{children}</h1>
    )
}

export function Subtitle({ children }: { children: ReactNode }) {
    return (
        <p className="subtitle">{children}</p>
    )
}

export function P({ children }: { children: ReactNode }) {
    return (
        <p className="has-text-justified is-size-5">{children}</p>
    )
}

export function Title2({ children }: { children: ReactNode }) {
    return (
        <h2 className="title is-3">{children}</h2>
    )
}

export function Title3({ children }: { children: ReactNode }) {
    return (
        <h3 className="title is-4">{children}</h3>
    )
}
