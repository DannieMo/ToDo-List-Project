/* ======== Stores a list to localstorage ============= */
// eslint-disable-next-line consistent-return
const updateIndex = (list) => {
  if (list.length > 0) {
    const newList = list.map((el, id) => {
      const ind = { ...el, index: id + 1 };
      return ind;
    });
    return newList;
  }
};

const storeItems = (items) => {
  const list = JSON.stringify(updateIndex(items));
  localStorage.setItem('todo', list);
};

/* ======== Gets a list from localstorage ============= */
const getItems = () => {
  if (localStorage.getItem('todo')) {
    return JSON.parse(localStorage.getItem('todo'));
  }
  return [];
};

export default getItems;
export { storeItems };
