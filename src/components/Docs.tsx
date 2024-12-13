import { ReactNode } from "react"

export function DocsContent({ children }: { children: ReactNode }) {
    return (
        <div className="box">
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export function Title({ id, children }: { id?: string, children: ReactNode }) {
    return (
        <h1 id={id} className="title is-1 is-size-4-mobile">{children}</h1>
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

export function Text({ children }: { children: ReactNode }) {
    return (
        <div className="content has-text-justified has-text-left-mobile is-size-5">{children}</div>
    )
}

export function Title2({ id, children }: { id?: string, children: ReactNode }) {
    return (
        <h2 id={id} className="title is-3 is-size-5-mobile">{children}</h2>
    )
}

export function Title3({ id, children }: { id?: string, children: ReactNode }) {
    return (
        <h3 id={id} className="title is-4 is-size-6-mobile">{children}</h3>
    )
}

export function Title4({ id, children }: { id?: string, children: ReactNode }) {
    return (
        <h4 id={id} className="title is-5 is-size-6-mobile">{children}</h4>
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
