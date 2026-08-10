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

const updateData = (item, key) => {
  const data = readData(key);
  data.push(item);
  writeData(data, key);
};

const deleteData = (date, key) => {
  const data = readData(key);
  const updatedData = data.filter((item) => item.date !== date);
  writeData(updatedData);
};

const isItemInData = (date, key) => {
  return readData(key).some((item) => item.date === date);
};

export { readData, writeData, updateData, deleteData, isItemInData };
