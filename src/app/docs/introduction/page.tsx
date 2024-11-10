import { Title, Subtitle, Title2, P } from "@/components/Docs";
import DocsPage from "@/components/DocsPage"

export default function Docs() {
  return (
    <DocsPage>
      <Title>Introduction</Title>
      <Subtitle>This topic is meant to explain Pile briefly</Subtitle>
      <Title2>What is Pile?</Title2>
      <P>
        Pile is a stack-based programming language designed to bring clarity and precision to programming logic. With a primary focus on stack-based concepts, Pile operates around a single stack where every operation directly manipulates values in a last-in, first-out (LIFO) sequence. This distinctive design allows users to visualize program flow and logic in a straightforward manner, minimizing the need for complex abstractions.
      </P>
      <P>
        In Pile, control flow and arithmetic are seamlessly managed through concise commands that interact with the stack, making it easier to understand core concepts like looping, conditionals, and procedural execution. This structure is ideal for learners and professionals who wish to build a strong foundation in computational thinking, as each command leads to visible, predictable changes in the stack.
      </P>
      <P>
        By minimizing extraneous syntax and focusing on fundamental programming principles, Pile offers a direct approach to problem-solving, equipping users with an intuitive yet powerful toolkit for exploring the essence of programming.
      </P>
      <Title2>History of Pile</Title2>
      <P>Pile&apos;s origins trace back to two influential stack-based programming languages: <i>Joy</i> and <i>Porth</i>.</P>
      <P>
        Joy, a well-established stack-based language, is known for its unique data structure handling, allowing fine-grained control over data manipulation. Despite its slightly cryptic syntax, Joy has become a respected model for efficient stack-based computation in various environments.
      </P>
      <P>
        The other key influence, Porth, is a lesser-known stack-based language developed by Russian livestreamer Alexey Kutepov (also known as Tsoding). Porth&apos;s development journey was unique in that Kutepov live-streamed nearly every stage of its creation, starting with an implementation in Python. This open and engaging approach to language development, now available on his YouTube channel <a href="https://youtube.com/@TsodingDaily">@TsodingDaily</a>, became a major inspiration for Pile&apos;s development.
      </P>
      <P>
        Originally, Pile went by the name <i>Somescript</i> and featured a different syntax. However, as the language evolved, it adapted new structures and refined its syntax to become what it is today: a stack-based, intuitively designed language aimed at simplifying complex programming concepts.
      </P>
      <Title2>Why Pile?</Title2>
      <P>
        Pile was created with educational goals at its core, designed to introduce users to stack-based programming principles in an accessible way. It simplifies complex concepts in programming by centering its syntax and operations around a stack model, allowing users to engage directly with fundamental operations like pushing, popping, and manipulating stack elements. While Pile is not built for large-scale production, it serves as an excellent tool for understanding core programming logic and experimenting with efficient mathematical algorithms that benefit from its stack-based design.
      </P>
      <P>
        Pile&apos;s focus on educational use makes it ideal for those studying computer science, especially those interested in foundational principles, algorithmic thinking, and logical reasoning. The language offers an efficient approach to certain mathematical and algorithmic tasks, enabling users to explore solutions with a minimalistic and efficient coding style that leverages Pile&apos;s unique approach.
      </P>
      <Title2>The future of Pile</Title2>
      <P>
        Looking to the future, we envision Pile becoming an open learning community for enthusiasts and learners alike, where ideas, projects, and educational content can flourish. Although the Pile community is still in its early days, we are excited to grow it together with other curious minds and share Pile&apos;s potential with the world. We&apos;re eager to see Pile evolve alongside its community, gathering feedback and insights that can shape its future directions and applications.
      </P>
    </DocsPage>
  );
}
