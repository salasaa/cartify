// src/modules/list/components/cart-list.tsx
import { Checkbox } from '@/components/ui/checkbox';
import { type ListItem } from '@/modules/list/data';
import { PlusIcon, TrashIcon, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function CartList({
  name,
  isListCompleted,
  statusText,
  items,
  onAddNewItem,
  deleteList,
  deleteItem,
}: {
  name: string;
  isListCompleted?: boolean;
  statusText: string;
  items: ListItem[];
  onAddNewItem?: () => void;
  deleteList?: () => void;
  deleteItem?: (itemId: number) => void;
  quantity: number;
  unit: string;
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold">
          {name} {isListCompleted && '✔️'}
        </h2>
        <Button
          variant="destructive"
          className="rounded-xl"
          size="icon-sm"
          onClick={deleteList}
        >
          <Trash2 />
        </Button>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">{statusText}</p>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className={cn(
                  'mt-2 flex items-center justify-between rounded-md p-2',
                  item.isCompleted &&
                    'bg-gray-200 text-gray-400 line-through dark:bg-gray-700 dark:text-gray-500',
                  !item.isCompleted &&
                    'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
                )}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`item-${item.id}`}
                    defaultChecked={item.isCompleted}
                  />
                  <label
                    htmlFor={`item-${item.id}`}
                    className="peer-data-[state=checked]:line-through"
                  >
                    <span>{item.name}</span>
                    {item.quantity > 0 && (
                      <span className="text-align-center bg ml-4 text-sm text-gray-400 dark:text-gray-500">
                        {item.quantity} {item.unit}
                      </span>
                    )}
                  </label>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteItem?.(item.id)}
                >
                  <TrashIcon />
                </Button>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <Button
            className="mt-2 flex w-full rounded-md p-2"
            onClick={onAddNewItem}
          >
            <PlusIcon className="mr-1" />
            Add Item
          </Button>
        </div>
      </div>
    </div>
  );
}
