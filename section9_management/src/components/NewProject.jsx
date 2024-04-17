import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show the error modal
      modal.current.open();
      return;
    }

    // validation...
    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDueDate,
    };
    onAdd(newProject); // onSave prop으로 전달된 함수 호출
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="닫기">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          이런... 값 입력을 잊으신 것 같습니다
        </p>
        <p className="text-stone-600 mb-4">
          모든 칸에 유효한 값을 입력하셨는지 확인해주세요
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
