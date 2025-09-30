import "./NoteCard.css";

export default function NoteCard({ title, content }) {
  return (
    <div className="note-card">
      <h3 className="note-card__title">{title}</h3>
      <p className="note-card__content">{content}</p>
    </div>
  );
}
