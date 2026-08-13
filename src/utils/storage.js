import { STORAGE_KEY } from "./config.js";

const compareDate = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
};

const readData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parseData = data ? JSON.parse(data) : [];
    parseData.sort(compareDate);
    return parseData;
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
    return true;
  } else {
    console.error("Entry is already in Storage.");
    return false;
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
