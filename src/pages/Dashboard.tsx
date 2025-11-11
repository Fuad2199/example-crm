import { overviewData, recentSalesData, topProducts } from '../constants';
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users, type LucideIcon } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '@/features/dashboard/components/Card';
import useDashboard from '@/features/dashboard/hooks/useDashboard';
import { useTheme } from '@/features/dashboard/hooks/use-theme';

const iconMap: Record<string, LucideIcon> = {
    package: Package,
    dollar: DollarSign,
    users: Users,
    'credit-card': CreditCard,
};

const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/20 text-blue-500',
    green: 'bg-green-500/20 text-green-500',
    yellow: 'bg-yellow-500/20 text-yellow-500',
    red: 'bg-red-500/20 text-red-500',
};

const Dashboard = () => {
    const { theme } = useTheme();
    const { cards, isLoading } = useDashboard();

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <section className="flex flex-col gap-y-4 pb-2">
                <h1 className="title">Dashboard</h1>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id ?? index}
                            icon={iconMap[String(card.icon)] ?? Users}
                            title={card.title}
                            value={card.value.toLocaleString()}
                            change={`${card.change}%`}
                            changeIcon={TrendingUp}
                            color={colorMap[card.color] ?? colorMap.blue}
                        />
                    ))}
                </div>
            </section>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 pb-2">
                <article className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <header className="card-header">
                        <h3 className="cart-title">Overview</h3>
                    </header>
                    <section className="card-body p-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart
                                data={overviewData}
                                margin={{
                                    top: 0,
                                    right: 20,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip cursor={false} formatter={(value) => `$${value}`} />
                                <XAxis dataKey="name" strokeWidth={0} stroke={theme === 'light' ? '#475569' : '#94a3b8'} tickMargin={6} />
                                <YAxis
                                    dataKey="total"
                                    strokeWidth={0}
                                    stroke={theme === 'light' ? '#475569' : '#94a3b8'}
                                    tickFormatter={(value) => `$${value}`}
                                    tickMargin={6}
                                />
                                <Area type="monotone" dataKey="total" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </section>
                </article>
                <article className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <header className="card-header">
                        <h3 className="card-title">Recent Sales</h3>
                    </header>
                    <section className="card-body h-75 overflow-auto p-0">
                        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                            {recentSalesData.map((sale) => (
                                <li key={sale.id} className="flex items-center justify-between gap-x-4 py-2 pr-2">
                                    <figure className="flex items-center gap-x-4">
                                        <img src={sale.image} alt={sale.name} className="size-10 shrink-0 rounded-full object-cover" />
                                        <figcaption className="flex flex-col gap-y-2">
                                            <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                                        </figcaption>
                                    </figure>
                                    <data value={sale.total} className="font-medium text-slate-900 dark:text-slate-50">
                                        ${sale.total}
                                    </data>
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>
            </section>
            <section>
                <article className="card">
                    <header className="card-header">
                        <h3>Top Orders</h3>
                    </header>
                    <section className="card-body p-0">
                        <div className="relative h-125 w-full shrink-0 overflow-auto rounded-none [scrollbar-width:thin]">
                            <table className="table">
                                <thead className="table-header">
                                    <tr className="table-row">
                                        <th className="table-head">#</th>
                                        <th className="table-head">Product</th>
                                        <th className="table-head">Price</th>
                                        <th className="table-head">Status</th>
                                        <th className="table-head">Rating</th>
                                        <th className="table-head">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {topProducts.map((product) => (
                                        <tr key={product.number} className="table-row">
                                            <td className="table-cell">{product.number}</td>
                                            <td className="table-cell">
                                                <figure className="flex w-max gap-x-4">
                                                    <img src={product.image} alt={product.name} className="size-14 rounded-lg object-cover" />
                                                    <figcaption className="flex flex-col">
                                                        <span>{product.name}</span>
                                                        <span className="font-normal text-slate-600 dark:text-slate-400">{product.description}</span>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td className="table-cell">${product.price}</td>
                                            <td className="table-cell">{product.status}</td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-2">
                                                    <Star size={18} className="fill-yellow-600 stroke-yellow-600" />
                                                </div>
                                                {product.rating}
                                            </td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-4">
                                                    <button className="text-blue-500 dark:text-blue-600 cursor-pointer">
                                                        <PencilLine size={20} />
                                                    </button>
                                                    <button className="text-red-500 dark:text-red-600 cursor-pointer">
                                                        <Trash size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    );
};

export default Dashboard;
