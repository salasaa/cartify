// components/AddListForm.tsx
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  listName: z.string().min(1, 'List name cannot be empty'),
});

export function AddListForm({
  onAddList,
}: {
  onAddList: (listName: string) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      listName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onAddList(values.listName);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="listName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the List</FormLabel>
              <FormControl>
                <Input placeholder="Shopping List" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Buat List
        </Button>
      </form>
    </Form>
  );
}
