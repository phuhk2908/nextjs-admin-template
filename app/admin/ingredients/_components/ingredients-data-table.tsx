import { columns, Payment } from "@/app/admin/ingredients/column";
import { DataTable } from "../../../../components/data-table/data-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  // ...
];

export default function IngredientsDataTable() {
  return <DataTable columns={columns} data={data} keySearch="email" />;
}
