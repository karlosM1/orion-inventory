import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type Payment = {
  id: string;
  amount: number;
  products: string;
  manilaBranch: number;
  makatiBranch: number;
  bGCBranch: number;
  cebuBranch: number;
  davaoBranch: number;
  total: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// Helper function to get status badge color
const getStatusColor = (status: string) => {
  const colors = {
    success: "bg-green-100 text-green-800 hover:bg-green-100",
    processing: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    failed: "bg-red-100 text-red-800 hover:bg-red-100",
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

// Helper to check if stock is low (less than 50)
const isLowStock = (quantity: number) => quantity < 50;

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-mono text-sm font-medium uppercase">
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "products",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Products
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const products = row.getValue("products") as string;
      const productList = products.split(", ");
      return (
        <div className="max-w-75">
          <div className="font-medium truncate">{products}</div>
          <div className="text-xs text-muted-foreground">
            {productList.length} item{productList.length > 1 ? "s" : ""}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "manilaBranch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Manila
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity = row.getValue("manilaBranch") as number;
      return (
        <div className="text-center">
          <span
            className={`font-medium ${isLowStock(quantity) ? "text-red-600" : ""}`}
          >
            {quantity}
          </span>
          {isLowStock(quantity) && (
            <span className="ml-1 text-xs text-red-600">⚠</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "makatiBranch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Makati
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity = row.getValue("makatiBranch") as number;
      return (
        <div className="text-center">
          <span
            className={`font-medium ${isLowStock(quantity) ? "text-red-600" : ""}`}
          >
            {quantity}
          </span>
          {isLowStock(quantity) && (
            <span className="ml-1 text-xs text-red-600">⚠</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "bGCBranch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          BGC
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity = row.getValue("bGCBranch") as number;
      return (
        <div className="text-center">
          <span
            className={`font-medium ${isLowStock(quantity) ? "text-red-600" : ""}`}
          >
            {quantity}
          </span>
          {isLowStock(quantity) && (
            <span className="ml-1 text-xs text-red-600">⚠</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "cebuBranch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Cebu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity = row.getValue("cebuBranch") as number;
      return (
        <div className="text-center">
          <span
            className={`font-medium ${isLowStock(quantity) ? "text-red-600" : ""}`}
          >
            {quantity}
          </span>
          {isLowStock(quantity) && (
            <span className="ml-1 text-xs text-red-600">⚠</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "davaoBranch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Davao
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity = row.getValue("davaoBranch") as number;
      return (
        <div className="text-center">
          <span
            className={`font-medium ${isLowStock(quantity) ? "text-red-600" : ""}`}
          >
            {quantity}
          </span>
          {isLowStock(quantity) && (
            <span className="ml-1 text-xs text-red-600">⚠</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Total Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const total = row.getValue("total") as number;
      return (
        <div className="text-center font-bold text-lg">
          {total.toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant="secondary" className={getStatusColor(status)}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Contact",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground lowercase">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Item ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Item
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
