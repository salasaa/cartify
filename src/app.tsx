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
import { initialDataLists, type ListItem } from '@/modules/list/data';
import { AddListForm } from '@/modules/list/components/add-list';
import { CartList } from '@/modules/list/components/cart-list';

export function App() {
  const [lists, setLists] = useState(initialDataLists);

  const addNewItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const listId = Number(formData.get('listId'));
    if (!listId) return;

    const name = formData.get('name')?.toString();
    const quantity = Number(formData.get('quantity'));
    const unit = formData.get('unit')?.toString();

    if (!name) return;
    if (!quantity) return;
    if (!unit) return;

    const list = lists.find((list) => list.id === listId);

    const items = list?.items || [];

    const newItem = {
      id: items[items.length - 1]?.id + 1 || 1,
      name: name,
      quantity: quantity,
      unit: unit,
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
    event.currentTarget.reset();
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
          {lists.length === 0 ? (
            <div className="py-12 text-center">
              <div className="mx-auto justify-items-center rounded-lg p-8 shadow-md">
                <img src="./public/no-data-img.svg" alt="empty image" />
                <img src="../public/no-data-img.svg" alt="empty image" />
                <h2 className="mb-4 text-xl font-semibold text-gray-700">
                  Start by creating list
                </h2>
                <p className="mb-6 text-gray-600">
                  Your smart shopping list will shown here. start by creating a
                  new list
                </p>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="recent">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="recent">
                <ul>
                  {lists.map((list) => (
                    <li key={list.id}>
                      <CartList
                        listId={list.id}
                        name={list.name}
                        isListCompleted={list.isCompleted}
                        statusText={list.statusText}
                        items={list.items}
                        quantity={list.items.length}
                        unit={list.items[0]?.unit || 'pcs'}
                        onAddNewItem={addNewItem}
                        deleteList={() => handleDeleteList(list.id)}
                        deleteItem={(itemId) =>
                          handleDeleteItem(itemId, list.id)
                        }
                      />
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="completed">
                <ul>
                  {lists
                    .filter((list) => list.isCompleted)
                    .map((list) => (
                      <li key={list.id}>
                        <CartList
                          listId={list.id}
                          name={list.name}
                          isListCompleted={list.isCompleted}
                          statusText={list.statusText}
                          items={list.items}
                          quantity={list.items.length}
                          unit={list.items[0]?.unit || 'pcs'}
                          onAddNewItem={addNewItem}
                          deleteList={() => handleDeleteItem(list.id, list.id)}
                          deleteItem={(itemId) =>
                            handleDeleteItem(itemId, list.id)
                          }
                        />
                      </li>
                    ))}
                </ul>
              </TabsContent>
            </Tabs>
          )}
        </section>
      </div>
    </div>
  );
}
