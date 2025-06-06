import IngredientsDataTable from "@/app/admin/ingredients/_components/ingredients-data-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Ingredients",
};

export default function IngredientsPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <div className="">
            <CardTitle>Ingredients</CardTitle>
            <CardDescription>
              A management panel to add, edit, and track ingredients, including
              details like stock levels, allergens, and suppliers. Streamlines
              inventory control and recipe management.
            </CardDescription>
          </div>

          <Button>
            <Plus /> Create
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <IngredientsDataTable />
      </CardContent>
    </Card>
  );
}
