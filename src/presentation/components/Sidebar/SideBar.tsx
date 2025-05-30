// components/Sidebar.tsx
import { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [openSection, setOpenSection] = useState<string | null>('dashboard');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="relative h-[calc(100vh-2rem)] w-full max-w-[20rem] rounded-xl bg-white p-4 text-gray-700 shadow-xl">
      <div className="mb-4 px-4">
        <h5 className="text-xl font-semibold text-blue-gray-900">Sidebar</h5>
      </div>
      <nav className="flex flex-col gap-2 px-2 text-base font-normal text-blue-gray-700">
        {/* Dashboard */}
        <div>
          <button
            onClick={() => toggleSection('dashboard')}
            className="flex w-full items-center justify-between rounded-lg bg-blue-gray-50/50 p-3 text-left font-semibold text-blue-gray-900 hover:bg-blue-gray-100"
          >
            <span className="flex items-center gap-3">
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </span>
            {openSection === 'dashboard' ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </button>

          {openSection === 'dashboard' && (
            <div className="ml-8 mt-2 flex flex-col gap-1">
              <SidebarLink icon={ChartBarIcon} label="Analytics" />
              <SidebarLink icon={DocumentTextIcon} label="Reporting" />
              <SidebarLink icon={ChartBarIcon} label="Projects" />
            </div>
          )}
        </div>

        {/* E-Commerce */}
        <div>
          <button
            onClick={() => toggleSection('ecommerce')}
            className="flex w-full items-center justify-between rounded-lg p-3 text-left font-semibold text-blue-gray-700 hover:bg-blue-gray-100"
          >
            <span className="flex items-center gap-3">
              <ShoppingBagIcon className="h-5 w-5" />
              E-Commerce
            </span>
            {openSection === 'ecommerce' ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </button>

          {openSection === 'ecommerce' && (
            <div className="ml-8 mt-2 flex flex-col gap-1">
              <SidebarLink icon={ChartBarIcon} label="Products" />
              <SidebarLink icon={DocumentTextIcon} label="Orders" />
              <SidebarLink icon={ChartBarIcon} label="Customers" />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
}

const SidebarLink = ({ icon: Icon, label }: SidebarLinkProps) => (
  <button className="flex items-center gap-3 rounded-lg p-2 text-sm text-gray-700 hover:bg-blue-gray-50 hover:text-blue-gray-900">
    <Icon className="h-4 w-4" />
    {label}
  </button>
);
