import { PenSquareIcon, Trash2Icon, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 
                 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2
                 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-primary/10 overflow-hidden"
    >
      {/* Decorative Gradient Glow */}
      <div className="absolute -right-10 -top-10 size-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors pr-6">
          {note.title}
        </h3>
        <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition-all text-primary absolute right-6 top-6" />
      </div>

      <p className="text-base-content/70 line-clamp-4 leading-relaxed mb-6 font-medium">
        {note.content}
      </p>

      <div className="flex justify-between items-center pt-4 border-t border-white/5">
        <span className="text-[10px] uppercase tracking-widest font-bold text-base-content/40">
          {formatDate(new Date(note.createdAt))}
        </span>
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-error/20 text-error/60 hover:text-error transition-all"
            onClick={(e) => handleDelete(e, note._id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;