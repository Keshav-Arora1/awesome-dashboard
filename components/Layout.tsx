import React from "react";

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">

            <aside className="w-64 bg-gray-800 text-white p-4">

            </aside>

            <main className="flex-1 overflow-y-auto p-4">
                {children}
            </main>

        </div>
    );
};

export default Layout;