import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

// data structe: {id: "generated with crypto.randomUUID()", title: "...", date: "xxx", imgUrl: "url", content: "text"}

const entry = {
  id: "123abc456def",
  title: "Nice day",
  date: "2026-08-11",
  imgUrl: "https://picsum.photos/200",
  content: "Today was a nice day.",
};

const App = () => {
  const [entryList, setEntryList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const newEntry = {
      id: "xxx",
      title: `${e.target.title.value}`,
      date: `${e.target.date.value}`,
      imgUrl: `${e.target.imgUrl.value}`,
      content: `${e.target.content.value}`,
    };
    setEntryList((prev) => prev.push(newEntry));
    console.log(entryList);
  };

  return (
    <>
      <Header />
      <EntryList />
      <h1>Diary</h1>
      <div>
        <h2>Input</h2>
        <form className="grid" onSubmit={handleForm}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" />
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" id="date" />
          <label htmlFor="imgUrl">Image URL: </label>
          <input type="text" name="imgUrl" id="imgUrl" />
          <label htmlFor="content">Content: </label>
          <textarea name="content" id="content"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2>Output</h2>
        <div>{entry.id}</div>
        <div>{entry.title}</div>
        <div>{entry.date}</div>
        <div>
          <img src={entry.imgUrl} alt="random picture" />
        </div>
        <div>{entry.content}</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
