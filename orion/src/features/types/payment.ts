// import React from "react";
// import { DataTable } from "@/features/payments/data-table";
// import { columns } from "@/features/payments/columns";
import { type Payment } from "@/features/payments/columns";

export const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    products: "Product A, Product B",
    manilaBranch: 50,
    makatiBranch: 80,
    bGCBranch: 70,
    cebuBranch: 60,
    davaoBranch: 56,
    total: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    products: "Product C",
    manilaBranch: 40,
    makatiBranch: 50,
    bGCBranch: 60,
    cebuBranch: 42,
    davaoBranch: 50,
    total: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    products: "Product D, Product E, Product F",
    manilaBranch: 150,
    makatiBranch: 200,
    bGCBranch: 180,
    cebuBranch: 157,
    davaoBranch: 150,
    total: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    products: "Product G",
    manilaBranch: 160,
    makatiBranch: 180,
    bGCBranch: 200,
    cebuBranch: 167,
    davaoBranch: 167,
    total: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    products: "Product H, Product I",
    manilaBranch: 130,
    makatiBranch: 150,
    bGCBranch: 170,
    cebuBranch: 135,
    davaoBranch: 136,
    total: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

// export default function InventoryPage(): React.JSX.Element {
//   return (
//     <div className="container mx-auto py-10 px-4">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
