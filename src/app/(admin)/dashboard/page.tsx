'use client';

import React from 'react';
import { Users, DollarSign, CalendarRange, Star } from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, change: '+12%', color: 'bg-blue-500' },
    { title: 'Revenue', value: '$12,345', icon: DollarSign, change: '+8%', color: 'bg-green-500' },
    { title: 'Reservations', value: '156', icon: CalendarRange, change: '+24%', color: 'bg-purple-500' },
    { title: 'Reviews', value: '4.8', icon: Star, change: '+6%', color: 'bg-yellow-500' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">{stat.value}</h2>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">New Reservation</p>
                    <p className="text-sm text-gray-500">Table for 4 at 7:00 PM</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Popular Menu Items</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-100" />
                  <div>
                    <p className="font-medium">Signature Dish {index + 1}</p>
                    <p className="text-sm text-gray-500">Ordered 24 times today</p>
                  </div>
                </div>
                <span className="text-sm font-semibold">$24.99</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;