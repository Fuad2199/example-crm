
export interface OrdersStats {
  total: number;
  pending: number;
  shipped: number;
  delivered: number;
}

export const OrdersStatsCards = ({ stats }: { stats: OrdersStats }) => {
  const cards = [
    {
      label: 'Total Orders',
      value: stats.total,
      textColor: 'text-gray-900 dark:text-gray-100',
      labelColor: 'text-gray-600 dark:text-gray-400',
    },
    {
      label: 'Pending',
      value: stats.pending,
      textColor: 'text-yellow-900 dark:text-yellow-400',
      labelColor: 'text-yellow-700 dark:text-yellow-300',
    },
    {
      label: 'Shipped',
      value: stats.shipped,
      textColor: 'text-blue-900 dark:text-blue-400',
      labelColor: 'text-blue-700 dark:text-blue-300',
    },
    {
      label: 'Delivered',
      value: stats.delivered,
      textColor: 'text-green-900 dark:text-green-400',
      labelColor: 'text-green-700 dark:text-green-300',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {cards.map((card) => (
        <article
          key={card.label}
          className="card rounded-xl border border-gray-200 dark:border-slate-700 p-4 shadow-sm bg-white dark:bg-slate-900 transition-colors"
        >
          <div className={`text-sm mb-1 font-medium ${card.labelColor}`}>{card.label}</div>
          <div className={`text-2xl font-semibold ${card.textColor}`}>{card.value}</div>
        </article>
      ))}
    </div>
  );
};
