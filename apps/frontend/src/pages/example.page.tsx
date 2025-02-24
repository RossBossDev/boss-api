import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function App({
  examples,
}: { examples: { id: number; description: string; name: string }[] }) {
  console.log(examples);

  return (
    <div>
      <h1 className="text-2xl font-bold">Examples</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {examples.map((example) => (
            <TableRow key={example.id}>
              <TableCell>{example.id}</TableCell>
              <TableCell>{example.name}</TableCell>
              <TableCell>{example.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>
              <Button>Click me</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
