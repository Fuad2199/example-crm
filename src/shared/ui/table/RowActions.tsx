import { cn } from "@/lib/cn";

type Action<T> = {
  icon: React.ReactNode;
  label: string;
  onClick: (row: T) => void;
  className?: string;
   variant?: "primary" | "warning" | "danger";
};

type Props<T> = {
  row: T;
  actions: Action<T>[];
};

function getVariantClasses(variant?: string) {
  switch (variant) {
    case "primary":
      return "text-blue-600 hover:bg-blue-50";
    case "warning":
      return "text-yellow-600 hover:bg-yellow-50";
    case "danger":
      return "text-red-600 hover:bg-red-50";
    default:
      return "text-gray-600 hover:bg-gray-100";
  }
}

export function RowActions<T>({ row, actions }: Props<T>) {
  return (
    <div className="flex gap-2">
      {actions.map((action, i) => (
        <button
          key={i}
          onClick={() => action.onClick(row)}
          title={action.label}
          className={cn("p-1 rounded", getVariantClasses(action.variant))}
        >
          {action.icon}
        </button>
      ))}
    </div>
  );
}
