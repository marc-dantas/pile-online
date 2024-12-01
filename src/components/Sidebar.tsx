import { ReactNode } from "react"

export interface SidebarProps {
    children: ReactNode,
}

export interface SidebarGroupProps {
    children: ReactNode,
    title: string,
    is_grouped?: boolean,
}

export function SidebarGroup({ is_grouped, children, title }: SidebarGroupProps) {
    if (is_grouped === undefined || is_grouped === false) {
        return (
            <>
                
                <p className="menu-label">{title}</p>
                <ul className="menu-list">
                    {children}
                </ul>
            </>
        )
    } else {
        return (
            <>
                <a>{title}</a>
                <ul className="menu-list">
                    {children}
                </ul>
            </>
        )
    }
}

export default function Sidebar({ children }: SidebarProps) {
    return (
        <aside className="menu">
            {children}
        </aside>
    )
}