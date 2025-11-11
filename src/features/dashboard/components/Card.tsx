import type { CardProps } from "../dashboard.types";


export const Card = ({
    icon: Icon,
    title,
    value,
    change,
    changeIcon: ChangeIcon,
    color = 'bg-blue-500/20 text-blue-500',
    children,
}: CardProps) => {
    return (
        <article className="card">
            <header className="card-header">
                <div className={`w-fit rounded-lg p-2 transition-colors ${color}`}>
                    <Icon size={26} />
                </div>
                <h2 className="card-title">{title}</h2>
            </header>
            <section className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                    {value}
                </p>
                {change && ChangeIcon && (
                    <span className={`flex w-fit items-center gap-x-2 rounded-full border px-2 py-1 font-medium ${color}`}>
                        <ChangeIcon size={18} aria-hidden="true" />
                        {change}
                    </span>
                )}
                {children}
            </section>
        </article>
    );
};
