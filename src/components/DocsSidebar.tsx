import Sidebar from "@/components/Sidebar"
import { SidebarGroup } from "@/components/Sidebar"
import Nav from "@/components/Nav"
import { ReactNode } from "react"

export interface DocsSidebarProps {
    children: ReactNode,
}

export default function DocsSidebar({ children }: DocsSidebarProps) {
    return (
        <>
            <div className="columns">
                <div className="column is-2">
                    <Sidebar>
                        <SidebarGroup title="Introduction">
                            <li><a href="/docs/introduction">Introduction</a></li>
                        </SidebarGroup>
                        <SidebarGroup title="The concept of Pile">
                            <li><a href="/docs/howpileworks">How Pile works</a></li>
                            <li><a href="/docs/basics">Basics</a></li>
                        </SidebarGroup>
                        <SidebarGroup title="Operations">
                            <li><a href="/docs/math">Mathematical operations</a></li>
                            <li><a href="/docs/logic">Logical operations</a></li>
                            <li><a href="/docs/bitwise">Bitwise operations</a> </li>
                            <li><a href="/docs/stack">Stack manipulation operations</a></li>
                        </SidebarGroup>
                        <SidebarGroup title="Pile Structures">
                            <li><a href="/docs/controlflow">Control flow</a></li>
                            <li><a href="/docs/procs">Procedures</a></li>
                            <li><a href="/docs/defs">Definitions</a> </li>
                        </SidebarGroup>
                        <SidebarGroup title="Other">
                            <li><a href="/docs/builtins">Builtins</a></li>
                            <li><a href="/docs/io">I/O</a> </li>
                            <li><a href="/docs/examples/">Code examples</a> </li>
                        </SidebarGroup>
                    </Sidebar>
                </div>
                <div className="column">
                    {children}
                </div>
            </div>
        </>
    )
}