import { useState } from "react";

export default function UpdatingObjectinState() {
  const [books, setBooks] = useState({
    name: "Metamorphosis",
    genre: "thriller",
    published: 1935,
  });

  function onName(event) {
    setBooks((c) => ({ ...c, name: event.target.value }));
  }
  function onGenre(event) {
    setBooks((c) => ({ ...c, genre: event.target.value }));
  }
  function onPublish(event) {
    setBooks((c) => ({ ...c, published: event.target.value }));
  }
  return (
    <div>
      <h1> name : {books.name} </h1>
      <h1> genre : {books.genre} </h1>
      <h1> published: {books.published} </h1>

      <input type="text" value={books.name} onChange={onName} />
      <br />
      <input type="text" value={books.genre} onChange={onGenre} />
      <br />
      <input type="text" value={books.published} onChange={onPublish} />
    </div>
  );
}
