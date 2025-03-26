"use client"
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { SidebarGroup } from "@/components/Sidebar";
import { ReactNode } from "react";

export interface DocsSidebarProps {
    children: ReactNode;
}

export default function DocsSidebar({ children }: DocsSidebarProps) {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href ? "is-active" : "";

    return (
        <div className="columns">
            <div className="column is-hidden-mobile is-2">
                <Sidebar>
                    <SidebarGroup title="Introduction">
                        <li>
                            <a href="/docs/introduction" className={isActive("/docs/introduction")}>Introduction</a>
                        </li>
                    </SidebarGroup>
                    <SidebarGroup title="The concept of Pile">
                        <li>
                            <a href="/docs/howpileworks" className={isActive("/docs/howpileworks")}>How Pile works</a>
                        </li>
                        <li>
                            <a href="/docs/basics" className={isActive("/docs/basics")}>Basics</a>
                        </li>
                    </SidebarGroup>
                    <SidebarGroup title="Reference">
                        <li>
                            <SidebarGroup is_grouped={true} title="Operations">
                                <li>
                                    <a href="/docs/math" className={isActive("/docs/math")}>Mathematical operations</a>
                                </li>
                                <li>
                                    <a href="/docs/logic" className={isActive("/docs/logic")}>Logical operations</a>
                                </li>
                                <li>
                                    <a href="/docs/bitwise" className={isActive("/docs/bitwise")}>Bitwise operations</a>
                                </li>
                                <li>
                                    <a href="/docs/stack" className={isActive("/docs/stack")}>Stack manipulation operations</a>
                                </li>
                                <li>
                                    <a href="/docs/sequence" className={isActive("/docs/sequence")}>Sequence operations</a>
                                </li>
                                <li>
                                    <a href="/docs/trace" className={isActive("/docs/trace")}>The trace operation</a>
                                </li>
                            </SidebarGroup>
                        </li>
                        <li>
                            <a href="/docs/datatypes" className={isActive("/docs/datatypes")}>Datatypes</a>
                        </li>
                        <li>
                            <a href="/docs/builtins" className={isActive("/docs/builtins")}>Builtins</a>
                        </li>
                        <li>
                            <a href="/docs/error" className={isActive("/docs/error")}>Errors</a>
                        </li>
                    </SidebarGroup>
                    <SidebarGroup title="Structures">
                        <li>
                            <a href="/docs/controlflow" className={isActive("/docs/controlflow")}>Control flow</a>
                        </li>
                        <li>
                            <a href="/docs/globals" className={isActive("/docs/globals")}>Global Variables</a>
                        </li>
                        <li>
                            <a href="/docs/locals" className={isActive("/docs/locals")}>Local Variables</a>
                        </li>
                        <li>
                            <a href="/docs/arrays" className={isActive("/docs/arrays")}>Arrays</a>
                        </li>
                        <li>
                            <a href="/docs/strings" className={isActive("/docs/strings")}>Strings</a>
                        </li>
                        <li>
                            <a href="/docs/procs" className={isActive("/docs/procs")}>Procedures</a>
                        </li>
                        <li>
                            <a href="/docs/defs" className={isActive("/docs/defs")}>Definitions</a>
                        </li>
                    </SidebarGroup>
                </Sidebar>
            </div>
            <div className="column">
                {children}
            </div>
        </div>
    );
}
