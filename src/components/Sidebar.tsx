import { ReactNode } from "react"

export interface SidebarProps {
    children: ReactNode,
}

export interface SidebarLabelProps {
    title: string,
}

export function SidebarLabel({ title }: SidebarLabelProps) {
    return (
        <p className="menu-label">{title}</p>
    )
}

export interface SidebarGroupProps {
    children: ReactNode,
    title: string,
}

export function SidebarGroup({ children, title }: SidebarGroupProps) {
    return (
        <>
            <SidebarLabel title={title} />
            <ul className="menu-list">
                {children}
            </ul>
        </>
    )
}

export default function Sidebar({ children }: SidebarProps) {
    return (
        <aside className="menu">
            {children}
        </aside>
    )
}