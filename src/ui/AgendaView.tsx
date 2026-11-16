import React from "react";
import {
  Clock, // time for each event
  MapPin, // location for each event
  ClipboardList, // icons for each event
  Coffee,
  Sofa,
  Speech,
  View,
  Trophy,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

const AgendaView = () => {
  const events = [
    {
      name: "Assessment of Capstone Projects",
      venue: "Training Rooms 2 & 3 (Level 5)",
      startTime: "10:30",
      endTime: "12:00",
      icon: ClipboardList,
      color: "red",
    },
    {
      name: "Lunch",
      venue: "Level 3 (Parents) / Level 5 (Guests & Mentors)",
      startTime: "12:00",
      endTime: "13:20",
      icon: Coffee,
      color: "orange",
    },
    {
      name: "Guests and staff to be seated",
      venue: "Auditorium (Level 3)",
      startTime: "13:20",
      endTime: "13:30",
      icon: Sofa,
      color: "yellow",
    },

    {
      name: "Welcome address by NP Deputy Principal Mr Mah Wee Beng",
      venue: "Auditorium (Level 3)",
      startTime: "13:30",
      endTime: "13:35",
      icon: Speech,
      color: "green",
    },
    
    {
      name: "Opening Address by Mr Nick Chan, Principal of School of Science and Technology, Singapore",
      venue: "Auditorium (Level 3)",
      startTime: "13:35",
      endTime: "13:40",
      icon: Speech,
      color: "green",
    },
    {
      name: "Appreciation Ceremony for the Industry Capstone Project Mentors",
      venue: "Auditorium (Level 3)",
      startTime: "13:40",
      endTime: "14:00",
      icon: Trophy,
      color: "blue",
    },
    {
      name: "Viewing of Booths and Networking",
      venue: "Training Rooms 2 & 3 (Level 5)",
      startTime: "14:00",
      endTime: "15:00",
      icon: View,
      color: "blue",
    },
    {
      name: "Award Ceremony",
      venue: "Auditorium (Level 3)",
      startTime: "15:00",
      endTime: "15:30",
      icon: Trophy,
      color: "indigo",
    },
    {
      name: "Closing & Group Photo",
      venue: "Auditorium (Level 3)",
      startTime: "15:30",
      endTime: undefined,
      icon: Camera,
      color: "purple",
    },
  ] as const;

  const colorMap = {
    red: { bg: "bg-red-50", text: "text-red-500", dot: "bg-red-400" },
    orange: { bg: "bg-orange-50", text: "text-orange-500", dot: "bg-orange-400" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600", dot: "bg-yellow-400" },
    green: { bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-400" },
    blue: { bg: "bg-sky-50", text: "text-sky-600", dot: "bg-sky-400" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", dot: "bg-indigo-400" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", dot: "bg-purple-400" },
  };

  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
        17 November 2026
      </p>

      <ol className="relative">
        {events.map((event, index) => {
          const Icon = event.icon;
          const colors = colorMap[event.color];
          const isLast = index === events.length - 1;

          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="relative flex gap-3 pb-4"
            >
              {/* time + timeline rail */}
              <div className="flex w-12 flex-shrink-0 flex-col items-center">
                <span className="text-xs font-bold tabular-nums text-slate-700">
                  {event.startTime}
                </span>
                <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-slate-50 ${colors.dot}`} />
                {!isLast && <span className="mt-1 w-px flex-1 bg-slate-200" />}
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-card">
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 rounded-xl p-2 ${colors.bg}`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-semibold leading-snug text-slate-900">
                      {event.name}
                    </h2>
                    <div className="mt-2 space-y-1 text-xs text-slate-500">
                      <div className="flex items-center">
                        <Clock className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
                        <span>
                          {event.endTime === undefined
                            ? event.startTime
                            : `${event.startTime} - ${event.endTime}`}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="mr-1.5 mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default AgendaView;
