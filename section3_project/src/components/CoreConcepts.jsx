import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function () {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => {
          return <CoreConcept key={index} {...concept} />;
        })}
      </ul>
    </Section>
  );
}
