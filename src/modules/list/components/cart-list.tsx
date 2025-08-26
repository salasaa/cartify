// src/modules/list/components/cart-list.tsx
import { Checkbox } from '@/components/ui/checkbox';
import { type ListItem } from '@/modules/list/data';
import { PlusIcon, TrashIcon, Trash2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical, EyeIcon, PencilIcon } from 'lucide-react';

export function CartList({
  listId,
  name,
  isListCompleted,
  statusText,
  items,
  onAddNewItem,
  deleteList,
  deleteItem,
  onToggleItem,
  viewList,
}: {
  listId: number;
  name: string;
  isListCompleted?: boolean;
  statusText: string;
  items: ListItem[];
  onAddNewItem: (event: React.FormEvent<HTMLFormElement>) => void;
  deleteList?: () => void;
  deleteItem?: (itemId: number) => void;
  onToggleItem: (itemId: number) => void;
  viewList?: () => void;
  quantity: number;
  unit: string;
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold">
          {name} {isListCompleted && '✔️'}
        </h2>

        <section>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuItem
                onClick={viewList}
                className="flex items-center gap-2"
              >
                <EyeIcon className="h-4 w-4" />
                <span>View</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <PencilIcon className="h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={deleteList}
                className="flex items-center gap-2 text-red-500"
              >
                <Trash2Icon className="h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
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
                    checked={item.isCompleted}
                    onCheckedChange={() => onToggleItem(item.id)}
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
          <form onSubmit={onAddNewItem} method="post">
            <input type="hidden" name="listId" defaultValue={listId} />
            <Input type="text" name="name" placeholder="Add Item" />
            <div className="-mt-px flex">
              <Input
                className="flex-1"
                type="number"
                name="quantity"
                placeholder="1"
              />
              <Input
                className="flex-1"
                type="text"
                name="unit"
                placeholder="kg"
              />
            </div>
            <Button className="mt-2 flex w-full rounded-md p-2">
              <PlusIcon className="mr-1" />
              Add Item
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
