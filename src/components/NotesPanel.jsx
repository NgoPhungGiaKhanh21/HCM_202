import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function NotesPanel() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNote = () => {
    if (inputValue.trim()) {
      setNotes([...notes, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="fixed right-0 top-20 w-72 h-[calc(100vh-80px)] bg-yellow-50 shadow-lg p-4 overflow-y-auto z-40 border-l-4 border-blue-600">
      <h2 className="text-xl font-bold text-gray-800 mb-4">📝 Ghi chú</h2>

      <div className="mb-4">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập ghi chú của bạn..."
          className="w-full p-2 border-2 border-gray-300 rounded text-sm focus:border-blue-600 focus:outline-none"
          rows="4"
        />
        <button
          onClick={addNote}
          className="w-full mt-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Thêm ghi chú
        </button>
      </div>

      <div className="space-y-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-3 rounded border-l-4 border-blue-600 text-sm shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <p className="flex-1">{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
