import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer 
            className="mt-auto bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
            role="contentinfo"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Company Info - Primary */}
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                            CRM Website
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Empowering businesses with intelligent customer relationship management solutions.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a 
                                href="mailto:support@crm.com"
                                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1"
                            >
                                <Mail className="w-4 h-4" />
                                <span>support@crm.com</span>
                            </a>
                            <a 
                                href="tel:+1234567890"
                                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+1 (234) 567-890</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Secondary */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <nav aria-label="Footer navigation">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a
                                        href="/features"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/pricing"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/about"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Resources - Secondary */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <nav aria-label="Resources navigation">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a
                                        href="/documentation"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/support"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/blog"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/api"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1 inline-block"
                                    >
                                        API Reference
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar - Tertiary */}
                <div className="py-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-slate-500 dark:text-slate-500 text-center sm:text-left">
                            © <time dateTime={currentYear.toString()}>{currentYear}</time> CRM Website. All rights reserved.
                        </p>
                        
                        <nav 
                            aria-label="Legal navigation"
                            className="flex items-center gap-4"
                        >
                            <a
                                href="/privacy-policy"
                                className="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                            >
                                Privacy Policy
                            </a>
                            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">•</span>
                            <a
                                href="/terms-of-service"
                                className="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                            >
                                Terms of Service
                            </a>
                            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">•</span>
                            <a
                                href="/cookies"
                                className="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                            >
                                Cookie Policy
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;