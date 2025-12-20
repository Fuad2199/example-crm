// AuthLayout.tsx
import { ThemeToggle } from '@/shared/components/ThemeToggle';
import type { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-linear-to-br from-purple-50 to-purple-100">
            {/* Header */}
            <header className="w-full py-4 px-6 flex justify-between items-center bg-white/70 backdrop-blur shadow-sm min-h-16">
                <h1 className="text-xl font-semibold text-purple-700">Sales CRM</h1>

                <nav>
                    <ThemeToggle />
                </nav>
            </header>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center p-6">{children}</main>

            {/* Modern Footer */}
            <footer className="bg-white/70 backdrop-blur py-8 px-6 border-t border-purple-200/40 min-h-45">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-purple-700">Sales CRM</h2>
                        <p className="text-sm text-purple-700/70 mt-1">Smart sales management for growing businesses.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-medium text-purple-800">Quick Links</h3>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="#" className="text-sm text-purple-700/70 hover:text-purple-800 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-purple-700/70 hover:text-purple-800 transition">
                                    Contact Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-purple-700/70 hover:text-purple-800 transition">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-medium text-purple-800">Legal</h3>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="#" className="text-sm text-purple-700/70 hover:text-purple-800 transition">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-purple-700/70 hover:text-purple-800 transition">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-sm text-purple-700/60 mt-6">© {new Date().getFullYear()} Sales CRM — All rights reserved.</p>
            </footer>
        </div>
    );
};
