import React from "react";
import { Users } from 'lucide-react';

type Exhibition = {
  logo?: string;
  projectId: string;
  title: string;
  members: string[];
  organization: string;
  synopsis: string;
};

type ExhibitionItemProps = {
  exhibition: Exhibition;
  showSynopsis?: boolean;
};

const ExhibitionItem = ({ exhibition, showSynopsis = false }: ExhibitionItemProps) => {
  return (
    <div className="flex items-start gap-4">
      {exhibition.logo && (
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
          <img
            src={exhibition.logo}
            alt={`${exhibition.organization} logo`}
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-700">
          {exhibition.organization}
        </span>
        <h2 className="mt-1.5 text-sm font-semibold leading-snug text-slate-900">
          {exhibition.projectId}: {exhibition.title}
        </h2>
        <div className="mt-2 flex items-start text-slate-500">
          <Users className="mr-1.5 mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
          <span className="break-words text-xs leading-relaxed">
            {exhibition.members.join(", ")}
          </span>
        </div>
        {showSynopsis && (
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            {exhibition.synopsis}
          </p>
        )}
      </div>
    </div>
  );
};
export default ExhibitionItem;
