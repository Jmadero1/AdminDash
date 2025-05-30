// src/presentation/layout/DashboardLayout.tsx
import type { ReactNode } from 'react';
import  Sidebar from '../Sidebar/SideBar';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TeamProgressCard } from './TeamProgressCard';

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line no-empty-pattern
export const DashboardLayout = ({ }: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
  <div className="flex flex-row gap-4">
    <TeamProgressCard />
    <TeamProgressCard />
    <TeamProgressCard />
  </div>
</main>
        <Footer />
      </div>
    </div>
  );
};
