import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

export function AddNewItem() {
  return (
    <Button className="mt-2 flex w-full rounded-md p-2">
      <PlusIcon className="mr-1" />
      Add Item
    </Button>
  );
}
