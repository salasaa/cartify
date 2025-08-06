import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AddListForm } from '@/components/add-list';
import { Checkbox } from '@/components/ui/checkbox';
import { dataLists, type ListItem } from '@/modules/list/data';
import { calculateLists } from '@/modules/list/helper';
import { Trash } from 'lucide-react';

export function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const calculatedLists = calculateLists(dataLists);

  const handleAddNewList = (listName: string) => {
    console.log('Create a new list:', listName);
    // Here you would typically add the new list to your state or backend.
    setOpenDialog(false);
  };

  return (
    <div className="min-h-screen bg-white p-4 text-gray-900 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <section className="mb-4 flex items-center justify-between">
          <div className="flex items-end space-x-2">
            <h1 className="font-['Inter'] text-2xl font-bold sm:text-3xl">
              Cartify
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your shopping lists efficiently!
            </p>
          </div>
        </section>

        <section>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>Add List</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create a New List</DialogTitle>
                <DialogDescription>
                  Enter a name for your new list
                </DialogDescription>
              </DialogHeader>
              <AddListForm onAddList={handleAddNewList} />
            </DialogContent>
          </Dialog>
        </section>

        <section className="mt-2 max-w-full overflow-auto">
          <Tabs defaultValue="recent">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              {calculatedLists.map((list) => (
                <CartList
                  key={list.id}
                  name={list.name}
                  isListCompleted={list.isListCompleted}
                  statusText={list.statusText}
                  items={list.items}
                  quantity={list.items.length}
                  unit={list.items[0]?.unit || 'pcs'}
                />
              ))}
            </TabsContent>
            <TabsContent value="completed">
              {calculatedLists
                .filter((list) => list.isListCompleted)
                .map((list) => (
                  <CartList
                    key={list.id}
                    name={list.name}
                    isListCompleted={list.isListCompleted}
                    statusText={list.statusText}
                    items={list.items}
                    quantity={list.items.length}
                    unit={list.items[0]?.unit || 'pcs'}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}

export function CartList({
  name,
  isListCompleted,
  statusText,
  items,
}: {
  name: string;
  isListCompleted?: boolean;
  statusText: string;
  items: ListItem[];
  quantity: number;
  unit: string;
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">
        {name} {isListCompleted && '✔️'}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{statusText}</p>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className={`mt-2 flex items-center justify-between rounded-md p-2 ${
                  item.isCompleted
                    ? 'bg-gray-200 text-gray-400 line-through dark:bg-gray-700 dark:text-gray-500'
                    : 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`item-${item.id}`}
                    checked={item.isCompleted}
                    // You would add an `onCheckedChange` handler here to update the state.
                  />
                  <label
                    htmlFor={`item-${item.id}`}
                    className="text-md cursor-pointer font-medium"
                  >
                    {item.name}
                    {item.quantity > 0 && (
                      <span className="ml-4 text-sm text-gray-400 dark:text-gray-500">
                        {item.quantity} {item.unit}
                      </span>
                    )}
                  </label>
                </div>
                <Button variant="ghost" size="icon-sm">
                  <Trash className="h-4 w-4" />
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
