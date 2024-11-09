import { Title, Subtitle, P } from "@/components/Docs";
import DocsPage from "@/components/DocsPage";

export default function Docs() {
  return (
    <DocsPage>
      <Title>Welcome to Pile Documentation</Title>
      <Subtitle>Start by choosing one of the topics on the left side.</Subtitle>
      <P>
        Or you can read the <a href="/docs/introduction">Introduction</a>.
      </P>
    </DocsPage>
  );
}
