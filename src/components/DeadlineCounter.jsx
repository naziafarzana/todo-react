import { useState } from "react";

function DeadlineCounter({ todo, onUpdateDueDate }) {

    const [showPicker, setShowPicker] = useState(false);

    const formattedDate = todo.dueDate
        ? new Date(todo.dueDate).toLocaleString([], {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                })
        : "";

    return (
        <div className="mt-2">

                    {!showPicker && (
                <button
                    onClick={() => setShowPicker(true)}
                    className="text-sm text-blue-600 hover:underline"
                >
                    📅 Set Due Date
                </button>
            )}


                        {showPicker && (
                <input
                    id={`deadline-${todo.id}`}
                    name="deadline"
                    type="datetime-local"
                    value={todo.dueDate}
                    onChange={(e) => onUpdateDueDate(todo.id, e.target.value)
                    }
                    className="
                        bg-zinc-900
                        border
                        border-red-900
                        rounded-md
                        px-3
                        py-2
                        text-zinc-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-700
                        " />
            )}


                        {todo.dueDate && (
                    <div className="mt-2 text-sm text-zinc-400">
                    {formattedDate}
                    </div>
            )}


                    </div>
    );
}

export default DeadlineCounter;