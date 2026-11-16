import React from 'react';
import { motion } from 'framer-motion';

type Tab = 'Agenda' | 'Exhibitions';

interface TabSelectorProps {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
}

export const TabSelector = ({ activeTab, setActiveTab }: TabSelectorProps) => {
  return (
    <div className="sticky top-0 z-30 -mx-4 bg-slate-50/80 px-4 py-2 backdrop-blur-md">
      <div className="relative flex rounded-2xl bg-slate-200/70 p-1">
        {(['Agenda', 'Exhibitions'] as Tab[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={isActive}
              className={`relative flex-1 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
                isActive ? 'text-brand-700' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl bg-white shadow-card"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabSelector;
