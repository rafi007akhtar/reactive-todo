import { useState } from "react";
import "./NewTask.scss";

const labelText = "Add New Task";
const placeholderText = "Type new task and press Enter";

function NewTask() {
  const [textToShow, setTextToShow] = useState(labelText);
  const [showLabel, setShowLabel] = useState(false);

  function onNewTaskFocus() {
    setTextToShow(placeholderText);
    setShowLabel(true);
  }

  function onNewTaskBlur() {
    setTextToShow(labelText);
    setShowLabel(false);
  }

  return (
    <div className="new-task row-start-3 row-end-4">
      <div className="new_task_block">
        <label
          htmlFor="new-task"
          className={`
            new_task_label relative 
            bg-white
            ${!showLabel ? "hidden" : "shown"}
          `}
        >
          {labelText}
        </label>
        <textarea
          placeholder={textToShow}
          className="new_task_input resize-none"
          id="new-task"
          onFocus={onNewTaskFocus}
          onBlur={onNewTaskBlur}
        />
      </div>
    </div>
  );
}

export default NewTask;
