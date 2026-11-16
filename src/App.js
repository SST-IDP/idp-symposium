import React, { useState } from 'react';
import TabSelector from './ui/TabSelector.tsx';
import AgendaView from './ui/AgendaView.tsx';
import ExhibitionsView from './ui/ExhibitionsView.tsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('Agenda');

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900">
      {/* soft accent glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-md px-4 pb-10">
        <header className="pb-5 pt-6">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900">
            Capstone Project Showcase Day{' '}
            <span className="text-brand-600">Programme</span>
          </h1>
          <aside className="mt-4 rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-left text-xs leading-relaxed text-slate-500">
          E-programme done by Chay Yu Hung Tristan and Tay Kai Quan, IDP Class of 2024.
          <br />
          2026 version updated by Lim Zhi Chen, IDP Class of 2027.
          </aside>
        </header>

        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="pt-5">
          {activeTab === 'Agenda' ? <AgendaView /> : <ExhibitionsView />}
        </main>
      </div>
    </div>
  );
};

export default App;
