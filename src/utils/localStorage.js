export function getAllItems() {
  if (window.localStorage.getItem('bookmark') === null) {
    return [];
  }
  return JSON.parse(window.localStorage.getItem('bookmark'));
}
export function clearAllItems() {}
export function saveItem(item) {
  if (window.localStorage.getItem('bookmark') === null) {
    window.localStorage.setItem('bookmark', '[]');
  }
  const updateData = JSON.parse(window.localStorage.getItem('bookmark'));
  updateData.push(item);
  window.localStorage.setItem('bookmark', JSON.stringify(updateData));
}
export function removeItemById(item) {
  const filteredData = JSON.parse(
    window.localStorage.getItem('bookmark')
  ).filter((data) => data.content.id !== item.content.id);
  window.localStorage.setItem('bookmark', JSON.stringify(filteredData));
}
