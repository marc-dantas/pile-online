import { ReactNode } from "react"

export function DocsContent({ children }: { children: ReactNode }) {
    return (
        <div id="top" className="box">
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export function Title({ children }: { children: ReactNode }) {
    return (
        <h1 className="title is-1 is-size-4-mobile">{children}</h1>
    )
}

export function Subtitle({ children }: { children: ReactNode }) {
    return (
        <p className="subtitle">{children}</p>
    )
}

export function P({ children }: { children: ReactNode }) {
    return (
        <p className="has-text-justified has-text-left-mobile is-size-5">{children}</p>
    )
}

export function Title2({ children }: { children: ReactNode }) {
    return (
        <h2 className="title is-3 is-size-5-mobile">{children}</h2>
    )
}

export function Title3({ children }: { children: ReactNode }) {
    return (
        <h3 className="title is-4 is-size-6-mobile">{children}</h3>
    )
}

export function Highlighted({ children }: { children: ReactNode }) {
    return (
        <h3 className="has-text-justified has-text-weight-bold is-italic is-size-5 is-size-6-mobile">{children}</h3>
    )
}

export function Table({ children }: { children: ReactNode }) {
    return (
        <table className="table is-fullwidth is-striped is-bordered">{children}</table>
    )
}
