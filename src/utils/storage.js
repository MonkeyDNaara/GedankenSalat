// data structe: {id: "generated with crypto.randomUUID()", title: "...", date: "xxx", img: "url", content: "text"}

const readData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const writeData = (data, key) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const isItemInData = (date, key) => {
  return readData(key).some((item) => item.date === date);
};

const addData = (item, key) => {
  if (!isItemInData(item, key)) {
    const data = readData(key);
    data.push(item);
    writeData(data, key);
  } else {
    console.error("Entry is already in Storage.");
  }
};

const deleteData = (date, key) => {
  const data = readData(key);
  const updatedData = data.filter((item) => item.date !== date);
  writeData(updatedData, key);
};

const updateData = (item, key) => {
  const data = readData(key);
  // update item with the right key
  writeData(data, key);
};

export { readData, writeData, addData, deleteData, isItemInData, updateData };
