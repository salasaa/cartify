import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { dataLists, type ListItem } from '@/modules/list/data';
import { calculateLists } from '@/modules/list/helper';

export function App() {
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
          <Button>Add List</Button>
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
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">
        {name} {isListCompleted && '✔️'}
      </h2>
      <p>{statusText}</p>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} {item.isCompleted && '✅'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
