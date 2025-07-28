/**
 * @param {Array<{id:number, sort_order:number}>} array
 * @param {number} fromIndex
 * @param {number} toIndex
 */
export function reorderWithSortOrder(array: any[], fromIndex: number, toIndex: number) {
  const arr = [...array]; // shallow clone to avoid mutations
  // move element
  const [moved] = arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, moved);

  // reassign sort_order equal to final index
  return arr.map((item, idx) => ({
    ...item,
    sort_order: idx
  }));
}