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
import { dataLists } from '@/modules/list/data';
import { calculateLists } from '@/modules/list/helper';
import { AddListForm } from '@/modules/list/components/add-list';
import { CartList } from '@/modules/list/components/cart-list';

export function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddNewList = (listName: string) => {
    console.log('Create a new list:', listName);
    // Here you would typically add the new list to your state or backend.
    setOpenDialog(false);
  };

  const calculatedLists = calculateLists(dataLists);

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
