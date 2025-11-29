import { Bell, LogOut, Menu, Search, Settings } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '@/features/auth/hooks/useCurrentUser';
import { ThemeToggle } from '@/shared/components/ThemeToggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useLogout } from '@/features/auth/hooks/useLogout';

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
    const { user, isAuthenticated, loading } = useCurrentUser();
    const navigate = useNavigate();
    const { logout } = useLogout();

    if (loading) return null;

    return (
        <header className="relative z-10 flex h-15 items-center justify-between bg-slate-50 px-4 shadow-md transition-colors dark:bg-slate-900">
            <nav className="flex justify-between gap-x-3 w-full">
                {/* search form and sidebar menu buttons */}
                <div className="flex items-center gap-x-3">
                    <button onClick={() => setCollapsed(!collapsed)}>
                        <Menu className="text-black cursor-pointer dark:text-white" />
                    </button>
                    <form className="input">
                        <Search size={20} className="text-slate-300" />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search..."
                            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                        />
                    </form>
                </div>

                {/* dark mode toggle and notification buttons */}
                <div className="flex items-center gap-x-3">
                    <button className="btn-ghost size-10">
                        <Bell size={20} className="cursor-pointer" />
                    </button>
                    <ThemeToggle />

                    {/* 🔹 Login button with navigation */}
                    {isAuthenticated ? (
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button aria-label="Open menu" className="size-10 overflow-hidden rounded-full cursor-pointer">
                                    <img title={user?.name} src={user?.avatar} alt={user?.name} className="size-full object-cover" />
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-40 rounded-xl shadow-lg">
                                <DropdownMenuItem onClick={logout} className="cursor-pointer">
                                    <LogOut/>
                                    LogOut
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/settings')} className="cursor-pointer">
                                    <Settings/>
                                    Settings
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
