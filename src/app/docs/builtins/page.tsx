import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P } from "@/components/Docs";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Builtins</Title>
            <Subtitle>This topic is meant to document builtins in Pile</Subtitle>
            <Title2>What is a builtin?</Title2>
            <P>A builtin is an operation that is built into Pile&apos;s interpreter. Builtins can have various use cases and help the developer to create programs with basic features.</P>
            <Title2>Builtins</Title2>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Builtin</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>print</code></td>
                        <td>
                            Prints the last element on the stack to stdout.
                        </td>
                    </tr>
                    <tr>
                        <td><code>println</code></td>
                        <td>
                            Prints the last element on the stack to stdout with a newline character at the end.
                        </td>
                    </tr>
                    <tr>
                        <td><code>eprint</code></td>
                        <td>
                            Prints the last element on the stack to stderr.
                        </td>
                    </tr>
                    <tr>
                        <td><code>eprintln</code></td>
                        <td>
                            Prints the last element on the stack to stderr with a newline character at the end.
                        </td>
                    </tr>
                    <tr>
                        <td><code>input</code></td>
                        <td>
                            Reads input from stdin until EOF and pushes the input on top of the stack.
                        </td>
                    </tr>
                    <tr>
                        <td><code>inputln</code></td>
                        <td>
                            Reads only a line from stdin and pushes the input on top of the stack.
                        </td>
                    </tr>
                    <tr>
                        <td><code>tostring</code></td>
                        <td>
                            Converts the last element on the stack to a <code>string</code>.
                        </td>
                    </tr>
                    <tr>
                        <td><code>tofloat</code></td>
                        <td>
                            Converts the last element on the stack to a <code>float</code>.
                            If the conversion fails, it pushes a <code>nil</code> value instead.
                        </td>
                    </tr>
                    <tr>
                        <td><code>toint</code></td>
                        <td>
                            Converts the last element on the stack to a <code>int</code>.
                            If the conversion fails, it pushes a <code>nil</code> value instead.
                        </td>
                    </tr>
                    <tr>
                        <td><code>tobool</code></td>
                        <td>
                            Converts the last element on the stack to a <code>bool</code>.
                            If the conversion fails, it pushes a <code>nil</code> value instead.
                        </td>
                    </tr>
                    <tr>
                        <td><code>exit</code></td>
                        <td>
                            Halts the execution of the program and exits with the exit code at the top of the stack.
                        </td>
                    </tr>
                </tbody>
            </Table>
        </DocsPage>
    )
}