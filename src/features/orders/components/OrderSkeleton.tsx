import React from 'react';

const OrdersSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-3">
      {/* table header */}
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"
          />
        ))}
      </div>

      {/* table rows */}
      {Array.from({ length: 10 }).map((_, row) => (
        <div key={row} className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, col) => (
            <div
              key={col}
              className="h-5 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrdersSkeleton;
