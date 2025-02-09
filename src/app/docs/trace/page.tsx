import DocsPage from "@/components/DocsPage";
import { Title, Text, Title2, P } from "@/components/Docs";
import Code from "@/components/Code";
import { Op, S, N, C } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>The <code>trace</code> operation</Title>

            <Title2>Purpose</Title2>
            <P>
                The <code>trace</code> operation in Pile is a simple yet powerful debugging tool designed to provide quick feedback during development. It serves as a &quot;value checker&quot; that helps identify potential issues in your program by outputting the current value on top of the stack to the console.
            </P>

            <Title2>Usage</Title2>
            <P>The trace operation outputs the value at the top of the stack, allowing you to verify intermediate states in your program. Here&apos;s how it works:</P>
            <Text>
                <ol>
                    <li>The value at the top of the stack is displayed.</li>
                    <li>The stack remains unchanged (no items are popped).</li>
                </ol>
            </Text>

            <Title2>Examples</Title2>
            <Code>
                <S x='"This text"' /> <Op x="trace" /><br />
                <C x="# The previous text is still on the stack, that's why it is possible to concatenate now" /><br />
                <S x='"This is concatenated with "' /> <Op x="+" /><br />

                <br />
                <N x="1" /> <N x="1" /> <Op x="+" /> <Op x="trace" /><br />
                <C x="# Result: int 2" /><br />
                <C x="# Stack: [ 2 ]" /><br />
            </Code>
        </DocsPage>
    )
}