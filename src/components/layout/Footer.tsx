const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <small className="text-base font-medium text-slate-900 dark:text-slate-50">
                © <time dateTime="2024">2024</time> CRM website. All
                rights reserved.
            </small>

            <nav
                aria-label="Legal links"
                className="flex flex-wrap gap-x-3"
            >
                <a
                    href="/privacy-policy"
                    className="link hover:underline"
                >
                    Privacy Policy
                </a>
                <a
                    href="/terms-of-service"
                    className="link hover:underline"
                >
                    Terms of Service
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
