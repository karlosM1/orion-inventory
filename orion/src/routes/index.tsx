import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "@/features/payments/data-table";
import { data } from "@/features/types/payment";
import { columns } from "@/features/payments/columns";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
