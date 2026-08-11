// data structe: {id: "generated with crypto.randomUUID()", title: "...", date: "xxx", imgUrl: "url", content: "text"}

import { STORAGE_KEY } from "./config.js";

const readData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const writeData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const isItemInData = (date) => {
  return readData().some((item) => item.date === date);
};

const addData = (item) => {
  if (!isItemInData(item.date)) {
    const data = readData();
    data.push(item);
    writeData(data);
  } else {
    console.error("Entry is already in Storage.");
  }
};

const deleteData = (id) => {
  const data = readData();
  const updatedData = data.filter((item) => item.id !== id);
  writeData(updatedData);
};

const updateData = (item) => {
  const data = readData();
  const updatedData = data.map((entry) =>
    entry.id === item.id ? item : entry,
  );
  writeData(updatedData);
};

export { readData, writeData, addData, deleteData, isItemInData, updateData };
