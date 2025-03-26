import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P, Text, Title3 } from "@/components/Docs";
import Code, { Kw, S } from "@/components/Code";
// Code highlighting components
import { C, Op, N } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Sequence Operations</Title>
            <Subtitle>Learn how work with sequence structures in Pile.</Subtitle>
            <Title2>What are sequences in Pile?</Title2>
            <P>In Pile, there are 2 types of sequences:</P>
            <Text>
                <ul>
                    <li><a href="/docs/arrays">Arrays</a></li>
                    <li><a href="/docs/strings">Strings</a></li>
                </ul>
            </Text>
            <P>Sequence operations work in both of the sequence types but they may have different behaviors.</P>
            <P>All behaviors for each operation/sequence type are documented here.</P>
            <Title2>Reference</Title2>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Name</td>
                        <td>Operation</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Index At</td>
                        <td><code>@</code></td>
                        <td>Reads an element of a sequence from a specified index (starting from 0)</td>
                    </tr>
                    <tr>
                        <td>Write At Index</td>
                        <td><code>!</code></td>
                        <td>Writes a specified element into the sequence at a determined index (starting from 0)</td>
                    </tr>
                </tbody>
            </Table>

            <Title2>Usage</Title2>
            
            <Title3>Usage for arrays</Title3>
            <Code>
                <C x="# Define array to be used and save it in a variable"/><br />
                <Kw x="array" /> <Op x="1 2 3" /> <Kw x="end" /><br />
                <Kw x="  let"/> my_array<br />
                <br />
                <C x="# Use @ to read at a specific index of the array"/><br />
                my_array <N x="1" /> <Op x="@"/> <C x="# Result: 2" /><br />
                <C x="# Use ! to change the element at the index"/><br />
                my_array <N x="790 1" /> <Op x="!"/> <C x="# Changed 2 to 790" /><br />
            </Code>
            
            <Title3>Usage for strings</Title3>
            <Code>
                <C x="# Create string to be used and save it in a variable"/><br />
                <S x='"fello"' /><br />
                <Kw x="  let"/> my_string<br />
                <br />
                <C x="# Use @ to read a character at a specific index of the array"/><br />
                <C x="# (the result is always a string of length 1)" /><br />
                my_string <N x="2" /> <Op x="@"/> <C x='# Result: "l"' /><br />
                <C x="# Use ! to replace the character at the index in the string"/><br />
                my_string <S x="'h" /> <N x="2" /> <Op x="!"/> <C x='# Now the string is "hello"' /><br />
            </Code>
            
            <Title2>Possible Errors</Title2>
            <Text>
                <ul>
                    <li><a href="/docs/error#arrayindexoutofbounds">Array Index Out Of Bounds</a></li>
                    <li><a href="/docs/error#stringindexoutofbounds">String Index Out Of Bounds</a></li>
                </ul>
            </Text>
        </DocsPage>
    );
}
