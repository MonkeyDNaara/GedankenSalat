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

const addData = (item) => {
  const data = readData();
  data.push(item);
  writeData(data);
};

const deleteData = (id) => {
  const data = readData();
  const updatedData = data.filter((item) => item.id !== id);
  writeData(updatedData);
};

const isItemInData = (id) => {
  return readData().some((item) => item.id === id);
};

export { readData, writeData, addData, deleteData, isItemInData };
