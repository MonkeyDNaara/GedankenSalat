# GedankenSalat

German for "thought salad" — a messy jumble of thoughts. This is a little journaling app for exactly that: dumping down whatever's in your head as quick entries instead of trying to organize them first. Built to get proper practice with React and Tailwind after doing a few plain HTML/JS projects.

## Features

- Create, view, edit and delete journal entries
- Entry list view + a detail view for a single entry (`EntryList`, `EntryDetails`)
- Modal-based entry form for adding/editing without leaving the page
- Everything persists to `localStorage` — no backend, refresh-proof

## Stack

React 19, Vite, Tailwind CSS v4, DaisyUI for the component styling on top of Tailwind.

## Structure

```
src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── EntryList.jsx      # renders all entries
│   ├── EntryCard.jsx      # single entry preview
│   ├── EntryDetails.jsx   # full entry view
│   ├── EntryForm.jsx      # create/edit form
│   └── Modal.jsx
└── utils/
    └── storage.js          # localStorage read/write helpers
```

## Running it

```bash
npm install
npm run dev
```

## Why I built it this way

Wanted a project small enough to fully finish (no backend, no auth, no API calls) so I could focus purely on component structure — figuring out what's a "smart" component vs. a dumb presentational one, and where state should actually live. `storage.js` exists specifically so the components don't talk to `localStorage` directly, which felt like a more realistic pattern than what I'd normally reach for on a first React project.

## What's next

Thinking about adding tags/categories for entries and maybe a search bar once the list gets long — right now it's a flat list which works fine for testing but won't scale for actual daily use.
