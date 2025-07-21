import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/atoms/button";
import { Card } from "~/components/ui/atoms/card";

const UserPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button variant={"outline"} size={"icon"} asChild>
        <Link href={"/dashboard"}>
          <ArrowLeftIcon />
        </Link>
      </Button>
      <Card className="min-h-full">

      </Card>
    </div>
  );
};

export default UserPage;
