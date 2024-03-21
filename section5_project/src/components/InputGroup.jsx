import { useState } from "react";

export default function InputGroup({ children, initail, onChangeNumber }) {
  const [value, setValue] = useState(initail);
  const handleInputChange = (event) => {
    setValue(event.target.value);
    onChangeNumber(event.target.value);
  };
  return (
    <label>
      {children}
      <input type="text" value={value} onChange={handleInputChange} />
      <p>{value}</p>
    </label>
  );
}
