import Footer from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { useClickOutside } from '@/features/dashboard/hooks/use-click-outside';
import { cn } from '@/lib/cn';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const isDesktopDevice = useMediaQuery('(min-width: 768px)');
    const [collapsed, setCollapsed] = useState(true);

    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const sidebarRefForClickOutside = sidebarRef as unknown as RefObject<HTMLElement>;

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    useClickOutside([sidebarRefForClickOutside], () => {
        if (!isDesktopDevice && !collapsed) {
            setCollapsed(true);
        }
    });

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <div className={cn("pointer-events-none fixed inset-0 -z-10 bg-white opacity-0 transition-opacity",
                !collapsed && 'max-md:pointer-events-auto max-md:z-50 max-md:opacity-30 '
            )}></div>
            <Sidebar 
            ref={sidebarRef}
            collapsed={collapsed}
            />
            <div className={cn('transition-[margin] duration-300', collapsed ? "md:ml-19.5" : "md:ml-60")}>
                <Header collapsed={collapsed}
                        setCollapsed={setCollapsed}/>
                <div className="h-[calc(100vh - 60px)] overflow-y-auto overflow-x-hidden p-6 min-h-100"> {/*bg:gray-50 dark:bg-gray-900*/}
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
