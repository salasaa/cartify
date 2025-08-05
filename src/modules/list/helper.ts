import type { DataList } from '@/modules/list/data';

export function calculateLists(dataList: DataList[]) {
  return dataList.map((list) => {
    const completedItems = list.items.filter((item) => item.isCompleted).length;
    const totalItems = list.items.length;

    // this is the logic to determaine the status of list
    let statusText = '';
    let isListCompleted = false;

    if (totalItems === 0) {
      statusText = 'No items in list.';
    } else if (completedItems === totalItems) {
      statusText = 'Task is completed.';
      isListCompleted = true;
    } else {
      statusText = `${completedItems} of ${totalItems} tasks are completed.`;
    }

    return {
      ...list,
      statusText,
      isListCompleted,
    };
  });
}
