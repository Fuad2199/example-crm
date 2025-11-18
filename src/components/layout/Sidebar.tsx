import { forwardRef } from 'react';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import { navbarLinks } from '../../constants';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { can } from '@/features/auth/rbac';

export type SidebarProps = {
    collapsed?: boolean;
};

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
    ({ collapsed = false }, ref) => {
        const { user } = useAuth();

        return (
            <aside
                ref={ref}
                className={cn(
                    'h-160 w-60 bg-white border-slate-300 fixed z-100 flex flex-col overflow-x-hidden border-r [transition:width_300ms_cubic-bezier(0.4,0,0.2,1),left_300ms_cubic-bezier(0.4,0,0.2,1),background-color_150ms_cubic-bezier(0.4,0,0.2,1),border_150ms_cubic-bezier(0.4,0,0.2,1)] dark:border-slate-700 dark:bg-slate-900',
                    collapsed
                        ? 'md:w-17.5 md:items-center'
                        : 'md:w-60',
                    collapsed ? 'max-md:-left-full' : 'max-md:left-0',
                )}
            >
                {/* logo */}
                <a href="/">
                    <figure className="flex gap-x-3 p-3">
                        <img
                            className="dark:hidden"
                            src={logoLight}
                            alt="Logoipsum"
                        />
                        <img
                            className="hidden dark:block"
                            src={logoDark}
                            alt="Logoipsum"
                        />
                        {!collapsed && (
                            <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">
                                Logoipsum
                            </p>
                        )}
                        <figcaption></figcaption>
                    </figure>
                </a>

                {/* navbar links */}
                <nav className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:thin]">
                    {user &&  navbarLinks.map((navbarLink) => (
                        <ul
                            key={navbarLink.title}
                            className={cn(
                                'sidebar-group',
                                collapsed && 'md:items-center',
                            )}
                        >
                            <li className={cn('sidebar-group-title')}>
                                {navbarLink.title}
                            </li>
                            {navbarLink.links
                            .filter(link => can(user.role!, link.permission))
                            .map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.path}
                                    className={cn(
                                        'sidebar-item',
                                        collapsed && 'md:w-11.25',
                                    )}
                                >
                                    <link.icon
                                        size={22}
                                        className="shrink-0"
                                    />
                                    {!collapsed && (
                                        <p className="whitespace-nowrap">
                                            {link.label}
                                        </p>
                                    )}
                                </NavLink>
                            ))}
                        </ul>
                    ))}
                </nav>
            </aside>
        );
    },
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
