import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P } from "@/components/Docs";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Datatypes</Title>
            <Subtitle>This topic is meant to document all Datatypes in Pile</Subtitle>
            <Title2>Datatypes</Title2>
            <P>Pile has a total of 5 datatypes:</P>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Datatype</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>int</code></td>
                        <td>
                            64-bit Integer
                        </td>
                    </tr>
                    <tr>
                        <td><code>float</code></td>
                        <td>
                            64-bit float
                        </td>
                    </tr>
                    <tr>
                        <td><code>string</code></td>
                        <td>
                            Array of UTF8 characters, unlimited size 
                        </td>
                    </tr>
                    <tr>
                        <td><code>bool</code></td>
                        <td>
                            <code>true</code> or <code>false</code>. Also known as 1-bit Integer.
                        </td>
                    </tr>
                    <tr>
                        <td><code>nil</code></td>
                        <td>
                            Null type
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title2>Literals</Title2>
            <P>Here are some examples of literals in Pile:</P>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Datatype</td>
                        <td>Literal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>int</code></td>
                        <td>
                            e.g. <code>10</code>, <code>0</code>, <code>-10</code>, <code>100</code>
                        </td>
                    </tr>
                    <tr>
                        <td><code>float</code></td>
                        <td>
                            e.g. <code>10.5</code>, <code>10.0</code>, <code>0.0</code>, <code>0.5</code>
                        </td>
                    </tr>
                    <tr>
                        <td><code>string</code></td>
                        <td>
                            e.g. <code>&quot;Hello, World!&quot;</code>, <code>&quot;This is a string&quot;</code>, <code>&quot;&quot;</code>, <code>&quot; &quot;</code>
                        </td>
                    </tr>
                    <tr>
                        <td><code>bool</code></td>
                        <td>
                            <code>true</code> or <code>false</code>
                        </td>
                    </tr>
                    <tr>
                        <td><code>nil</code></td>
                        <td>
                            <code>nil</code>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </DocsPage>
    )
}