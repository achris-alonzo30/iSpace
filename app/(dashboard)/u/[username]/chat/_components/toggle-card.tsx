"use client";

import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { startTransition, useTransition } from "react";
import { toast } from "sonner";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCard {
  field: FieldTypes;
  label: string;
  value: boolean;
}

const ToggleCard = ({ field, label, value = false }: ToggleCard) => {
  const [isPending, startTransition] = useTransition();
  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0 truncate">{label}</p>
        <div className="space-y-2">
          <Switch 
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
            >
            {value ? "Enabled" : "Disabled"}</Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
    return (
        <Skeleton className="rounded-xl pt-10 w-full" />
    )
}

export default ToggleCard;
