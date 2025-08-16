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
import { dataLists, type ListItem } from '@/modules/list/data';
import { AddListForm } from '@/modules/list/components/add-list';
import { CartList } from '@/modules/list/components/cart-list';

export function App() {
  const [lists, setLists] = useState(dataLists);

  const AddNewItem = (listId: number) => {
    const newItem = {
      id: lists[lists.length - 1]?.id + 1 || 1,
      name: 'New Item',
      quantity: 1,
      unit: 'pcs',
      isCompleted: false,
    };

    const newList = lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          items: [...list.items, newItem as ListItem],
        };
      }
      return list;
    });

    setLists(newList);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleAddNewList = (listName: string) => {
    setOpenDialog(false);

    setLists([
      ...lists,
      {
        id: lists[lists.length - 1]?.id + 1 || 1,
        name: listName,
        isCompleted: false,
        statusText: '',
        items: [],
      },
    ]);
  };

  const handleDeleteList = (listId: number) => {
    const updatedLists = lists.filter((list) => list.id !== listId);
    setLists(updatedLists);
  };

  const handleDeleteItem = (itemId: number, listId: number) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedItems = list.items.filter((item) => item.id !== itemId);
        return {
          ...list,
          items: updatedItems,
        };
      }
      return list;
    });
    setLists(updatedLists);
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
              {lists.map((list) => (
                <CartList
                  key={list.id}
                  name={list.name}
                  isListCompleted={list.isCompleted}
                  statusText={list.statusText}
                  items={list.items}
                  quantity={list.items.length}
                  unit={list.items[0]?.unit || 'pcs'}
                  onAddNewItem={() => AddNewItem(list.id)}
                  deleteList={() => handleDeleteList(list.id)}
                  deleteItem={(itemId) => handleDeleteItem(itemId, list.id)}
                />
              ))}
            </TabsContent>
            <TabsContent value="completed">
              {lists
                .filter((list) => list.isCompleted)
                .map((list) => (
                  <CartList
                    key={list.id}
                    name={list.name}
                    isListCompleted={list.isCompleted}
                    statusText={list.statusText}
                    items={list.items}
                    quantity={list.items.length}
                    unit={list.items[0]?.unit || 'pcs'}
                    onAddNewItem={() => AddNewItem(list.id)}
                    deleteList={() => handleDeleteItem(list.id, list.id)}
                    deleteItem={(itemId) => handleDeleteItem(itemId, list.id)}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
