export const saveToStorage = (itemName, state) => {
    localStorage.setItem(itemName, JSON.stringify(state));
};

export const getFromStorage = (itemName) => {
    const items = localStorage.getItem(itemName);
    if (items === null) return [];
    return JSON.parse(items);
};
