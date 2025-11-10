
export const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center text-sm text-slate-500">
                     © {new Date().getFullYear()} LORO. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
