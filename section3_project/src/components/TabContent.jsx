import { EXAMPLES } from "../data.js";

export default function TabContent({ aa }) {
  console.log(EXAMPLES[aa]);
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[aa].title}</h3>
      <p>{EXAMPLES[aa].description}</p>
      <pre>
        <code>{EXAMPLES[aa].code}</code>
      </pre>
    </div>
  );
}
