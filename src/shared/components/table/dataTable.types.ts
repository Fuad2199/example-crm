export interface TableColumn<T> {
  key: keyof T;
  label: string;
  className?: string;
  render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  emptyText?: string;
}
