import { Bell, LogOut, Menu, Search, Settings } from 'lucide-react';
import { useEffect, startTransition } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCurrentUser } from '@/features/auth/hooks/useCurrentUser';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { ThemeToggle } from '@/shared/components/ThemeToggle';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
    const { user, isAuthenticated, loading, fetchCurrentUser } = useCurrentUser();
    const { logout } = useLogout();
    const navigate = useNavigate();

    // 🔥 NON-BLOCKING auth fetch
    useEffect(() => {
        startTransition(() => {
            fetchCurrentUser();
        });
    }, [fetchCurrentUser]);

    const handleLogout = async () => {
        await logout();
        navigate('/login', { replace: true });
    };

    return (
        <header className="relative z-10 flex h-15 items-center justify-between bg-slate-50 px-4 shadow-md dark:bg-slate-900">
            <nav className="flex w-full justify-between gap-x-3">
                {/* Left */}
                <div className="flex items-center gap-x-3">
                    <button className='cursor-pointer' onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">
                        <Menu />
                    </button>

                    <form className="input">
                        <Search size={20} className="text-slate-300" />
                        <input
                            placeholder="Search..."
                            className="w-full bg-transparent outline-0"
                        />
                    </form>
                </div>

                {/* Right */}
                <div className="flex items-center gap-x-3">
                    <Bell />
                    <ThemeToggle />

                    {/* 🔥 NEVER block render */}
                    {loading ? (
                        <div className="size-10 rounded-full bg-slate-300 animate-pulse" />
                    ) : isAuthenticated ? (
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="size-10 rounded-full overflow-hidden cursor-pointer">
                                    {user?.avatar ? (
                                        <img width={40} height={40} src={user.avatar} title={user.name} alt={user.name} />
                                    ) : (
                                        <div className="flex size-full items-center justify-center bg-blue-500 text-white">
                                            {user?.name?.charAt(0)}
                                        </div>
                                    )}
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
                                    <LogOut size={16} /> Logout
                                </DropdownMenuItem>
                                <DropdownMenuItem className='cursor-pointer' onClick={() => navigate('/settings')}>
                                    <Settings size={16} /> Settings
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="rounded bg-blue-500 px-3 py-1 text-white"
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};
