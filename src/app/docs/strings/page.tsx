import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, P } from "@/components/Docs";
import Code, { S } from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, C } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Strings</Title>
            <Subtitle>This topic is meant to document strings in Pile</Subtitle>

            <Title2>String Literals</Title2>
            <P>String is a sequence of characters that are stored in memory. You can create them using double quotes (<code>&quot;</code>):</P>
            <Code>
                <S x='"This is my String"' />
            </Code>
            <P>Everytime you use string literals, the Pile interpreter will allocate the string in memory and push on the stack the corresponding metadata of the string back, that can later be used as a normal string.</P>
            
            <Title2>String Manipulation</Title2>
            <P><strong>In Pile, strings are mutable, but not growable</strong>. If you are searching for a growable data structure, check <a href="/docs/arrays">arrays</a>.</P>
            <P>You can use <a href="/docs/sequences">sequence operations</a> to manipulate strings in Pile.</P>

            <Title2>Character Literals</Title2>
            <P>Sometimes you don't need Pile's interpreter to allocate just a single character in memory just to be able to use it as text. You can avoid that by using character literals</P>
            <P>To push a character on the stack, you use single quotes (<code>&apos;</code>). You do not need to close it with another <code>&apos;</code>.</P>
            <Code>
                <C x="# This is not a typo, you actually don't need to close it" /><br />
                <S x="'x" />
            </Code>
            <P><strong>WARNING</strong>: Since character literals do not allocate strings, it just pushes the character code as an <code>int</code> on the stack.</P>   
        </DocsPage>
    );
}
