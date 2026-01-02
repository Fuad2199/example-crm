import { Button } from "@/components/ui";
import { Users } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ 
  title, 
  description, 
  actionLabel, 
  onAction 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-5 shadow-sm">
        <Users className="w-10 h-10 text-gray-400" />
      </div>
      <p className="text-gray-900 font-medium mb-2">{title}</p>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="shadow-sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}