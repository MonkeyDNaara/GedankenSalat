# GedankenSalat

German for "thought salad" — a messy jumble of thoughts. This is a little journaling app for exactly that: dumping down whatever's in your head as quick entries instead of trying to organize them first. Built to get proper practice with React and Tailwind after doing a few plain HTML/JS projects.

## Features

- Create, view, edit and delete journal entries (title, date, image URL, content)
- Entry list view + a modal detail view for a single entry
- Modal-based entry form for adding/editing without leaving the page, with duplicate-date validation and an error alert
- Light/dark theme toggle (`gedankensalat` / `forest` DaisyUI themes)
- Everything persists to `localStorage` — no backend, refresh-proof

## Stack

React 19, Vite, Tailwind CSS v4, DaisyUI for the component styling on top of Tailwind.

## Structure

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Header.jsx         # add-entry button + theme toggle
│   ├── Footer.jsx
│   ├── Modal.jsx           # single modal host, switches content by state
│   ├── AlertModal.jsx      # error alert content
│   ├── EntryForm.jsx       # create/edit form
│   ├── EntryList.jsx       # renders all entries
│   ├── EntryCard.jsx       # single entry preview
│   └── EntryDetails.jsx    # full entry view (edit/delete actions)
├── contexts/
│   ├── EntriesContext.jsx / EntriesContextProvider.jsx   # entries state
│   ├── StateContext.jsx / StateContextProvider.jsx       # UI/modal state
│   └── ThemeContext.jsx / ThemeContextProvider.jsx       # theme state
└── utils/
    ├── storage.js          # localStorage read/write/CRUD helpers
    └── config.js           # storage key constant
```

## Running it

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Why I built it this way

Wanted a project small enough to fully finish (no backend, no auth, no API calls) so I could focus purely on component structure — figuring out what's a "smart" component vs. a dumb presentational one, and where state should actually live. State is split across three React Context providers (entries, UI/modal state, theme) instead of one big blob, which felt like a more realistic pattern than what I'd normally reach for on a first React project. `storage.js` exists specifically so the components don't talk to `localStorage` directly.

## What's next

Thinking about adding tags/categories for entries and maybe a search bar once the list gets long — right now it's a flat list which works fine for testing but won't scale for actual daily use.
