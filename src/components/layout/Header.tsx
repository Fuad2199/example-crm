import { Bell, LogOut, Menu, Search, Settings } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '@/features/auth/hooks/useCurrentUser';
import { ThemeToggle } from '@/shared/components/ThemeToggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { authService } from '@/features/auth/services/auth.service'; // Doğrudan import

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
    const { user, isAuthenticated, loading } = useCurrentUser();
    const navigate = useNavigate();
    const { logout } = useLogout();

    const handleLogout = async () => {
        try {
            console.log('Logout clicked');
            await logout(); // useLogout hook'undaki fonksiyonu çağır
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleDirectLogout = async () => {
        // Alternatif: Doğrudan authService kullan
        try {
            console.log('Direct logout clicked');
            await authService.logout();
            navigate('/login', { replace: true });
        } catch (error) {
            console.error('Direct logout failed:', error);
            // Hata durumunda da yönlendir
            navigate('/login', { replace: true });
        }
    };

    if (loading) return null;

    return (
        <header className="relative z-10 flex h-15 items-center justify-between bg-slate-50 px-4 shadow-md transition-colors dark:bg-slate-900">
            <nav className="flex justify-between gap-x-3 w-full">
                {/* search form and sidebar menu buttons */}
                <div className="flex items-center gap-x-3">
                    <button 
                        onClick={() => setCollapsed(!collapsed)}
                        className="cursor-pointer"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="text-black dark:text-white" />
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
                    <button className="btn-ghost size-10" aria-label="Notifications">
                        <Bell size={20} className="cursor-pointer" />
                    </button>
                    <ThemeToggle />

                    {/* 🔹 Login button with navigation */}
                    {isAuthenticated ? (
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button 
                                    aria-label="Open user menu" 
                                    className="size-10 overflow-hidden rounded-full cursor-pointer"
                                >
                                    {user?.avatar ? (
                                        <img 
                                            title={user?.name} 
                                            src={user?.avatar} 
                                            alt={user?.name} 
                                            className="size-full object-cover" 
                                        />
                                    ) : (
                                        <div className="size-full flex items-center justify-center bg-blue-500 text-white rounded-full">
                                            {user?.name?.charAt(0) || 'U'}
                                        </div>
                                    )}
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-40 rounded-xl shadow-lg">
                                <DropdownMenuItem 
                                    onClick={handleLogout} 
                                    className="cursor-pointer flex items-center gap-2"
                                >
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                                
                                {/* Alternatif logout butonu (debug için) */}
                                <DropdownMenuItem 
                                    onClick={handleDirectLogout} 
                                    className="cursor-pointer flex items-center gap-2 text-red-500"
                                >
                                    <LogOut size={16} />
                                    <span>Logout (Direct)</span>
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem 
                                    onClick={() => navigate('/settings')} 
                                    className="cursor-pointer flex items-center gap-2"
                                >
                                    <Settings size={16} />
                                    <span>Settings</span>
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