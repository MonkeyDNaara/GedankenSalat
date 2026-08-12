import Header from "./components/Header.jsx";
import EntryList from "./components/EntryList.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

// data structure: {id: "generated with crypto.randomUUID()", title: "...", date: "xxx", imgUrl: "url", content: "text"}

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
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-2">
          <legend className="fieldset fieldset-legend text-xl">Entry</legend>
          <form className="grid" onSubmit={handleForm}>
            <div className="pb-2">
              <label htmlFor="title" className="label">
                Title:{" "}
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title of todays entry"
                className="input input-primary"
              />
            </div>
            <div className="pb-2">
              <label htmlFor="date" className="label">
                Date:{" "}
              </label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="tt.mm.jjjj"
                className="input input-primary"
              />
            </div>
            <div className="pb-2">
              <label htmlFor="imgUrl" className="label">
                Image URL:
              </label>
              <label className="input input-primary">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </g>
                </svg>
                <input
                  type="url"
                  required
                  placeholder="https://"
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                />
              </label>
            </div>
            <div className="pb-2">
              <label htmlFor="content" className="label">
                Content:{" "}
              </label>
              <textarea
                name="content"
                id="content"
                placeholder="What's up today?"
                className="textarea textarea-primary"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-outline">
              Submit
            </button>
          </form>
        </fieldset>
      </div>
      <div>
        <div className="card bg-base-100 w-50 shadow-md shadow-black m-2">
          <figure>
            <img
              src={entry.imgUrl}
              alt="random picture"
              className="w-full h-40"
            />
          </figure>
          <div className="card card-body">
            <h2 className="card">{entry.title}</h2>
            <div>{entry.date}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
