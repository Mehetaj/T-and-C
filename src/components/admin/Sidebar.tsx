'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Menu as MenuIcon,
  CalendarRange,
  Users,
  Settings,
  ChevronLeft,
  LogOut,
  Menu as HamburgerIcon
} from 'lucide-react';

interface SidebarProps {
  onCollapseChange: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCollapseChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    onCollapseChange(collapsed);
  }, [collapsed, onCollapseChange]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Menu Management', icon: MenuIcon, href: '/dashboard/menu' },
    { label: 'Reservations', icon: CalendarRange, href: '/dashboard/reservations' },
    { label: 'Users', icon: Users, href: '/dashboard/users' },
    { label: 'Settings', icon: Settings, href: '/dashboard/settings' }
  ];

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-[1001] p-2 rounded-lg bg-gray-900 text-white md:hidden focus:outline-none transition-transform duration-300 ease-in-out"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>
      )}

      {/* Overlay */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black z-[999] transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 z-[1000] h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden transform-gpu
          ${isMobile ? (isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64') : (collapsed ? 'w-16' : 'w-64')}`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {!collapsed && <h1 className="text-xl font-bold">T&C Admin</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ease-in-out ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2 w-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center ${!collapsed ? 'justify-start space-x-3' : 'justify-center'} p-2 rounded-lg transition-colors duration-200 ease-in-out ${
                      isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
                    } w-full`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">admin@tandc.com</p>
              </div>
            )}
            <button className="p-1.5 rounded-lg hover:bg-gray-800">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;