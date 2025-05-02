import React from 'react';

import Sidebar from '@/components/admin/Sidebar';

const DashboardPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 md:ml-64 p-8 w-full">
                <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Dashboard stats cards */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-gray-500 text-sm">Total Reservations</h3>
                        <p className="text-2xl font-bold">128</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-gray-500 text-sm">Menu Items</h3>
                        <p className="text-2xl font-bold">45</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-gray-500 text-sm">Active Users</h3>
                        <p className="text-2xl font-bold">892</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-gray-500 text-sm">Total Revenue</h3>
                        <p className="text-2xl font-bold">$12,628</p>
                    </div>
                </div>
            </main>
        </div>)
};

export default DashboardPage;