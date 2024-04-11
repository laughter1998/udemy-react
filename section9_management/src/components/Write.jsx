import { useRef } from "react";
import InputGroup from "./InputGroup";

export default function Write({ onSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  console.log(onSave);
  //   const titleValue = title.current.value;

  function handleClickSave() {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dateValue = date.current.value;
  }
  return (
    <div>
      <p className="text-right">
        <button className="px-4 py-2 text-xs md:text-base rounded-md  text-stone-400 ">
          취소
        </button>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 "
          onClick={() => onSave("titleValue")}
        >
          저장
        </button>
      </p>
      <InputGroup title="title" ref={title}></InputGroup>

      <InputGroup title="description" ref={description}>
        {/* <textarea
          type="text"
          name="description"
          id="description"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea> */}
      </InputGroup>

      <InputGroup title="date" ref={date}>
        {/* <input
          type="date"
          name="date"
          id="date"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        /> */}
      </InputGroup>
    </div>
  );
}
