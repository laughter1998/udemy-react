import { forwardRef } from "react";

export default forwardRef(function InputGroup({ title }, ref) {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ref={ref}
        />
      </div>
    </div>
  );
});
