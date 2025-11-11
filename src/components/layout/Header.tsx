import { Bell, Menu, Moon, Search, Sun } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '@/features/auth/hooks/useCurrentUser';
import { useTheme } from '@/features/dashboard/hooks/use-theme';

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const { user, isAuthenticated, loading } = useCurrentUser();
    const navigate = useNavigate();

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
                        <Search
                            size={20}
                            className="text-slate-300"
                        />
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
                    <button
                        className="size-10 overflow-hidden cursor-pointer"
                        onClick={() =>
                            setTheme(
                                theme === 'light' ? 'dark' : 'light',
                            )
                        }
                    >
                        <Sun
                            size={20}
                            className="dark:hidden cursor-pointer"
                        />
                        <Moon
                            size={20}
                            className="hidden dark:block cursor-pointer"
                        />
                    </button>

                    {/* 🔹 Login button with navigation */}
                            {isAuthenticated ? (
                            <button className="size-10 overflow-hidden rounded-full cursor-pointer">
                                <img
                                    src={user?.avatar}
                                    alt="User"
                                    className="size-full object-cover"
                                />
                            </button>
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
