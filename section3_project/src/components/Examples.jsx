import { useState } from "react";

import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

export default function () {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>토픽을 골라요</p>;
  if (selectedTopic) {
    tabContent = <TabContent aa={selectedTopic}></TabContent>;
  }

  return (
    <Section id="examples" title="Examples" data-num="1" className="section">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              jSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              state
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
