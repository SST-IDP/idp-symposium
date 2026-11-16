import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import SearchBar from './SearchBar.tsx';
import ExhibitionOverlaySheet from './ExhibitionOverlaySheet.tsx';
import ExhibitionItem from './ExhibitionItem.tsx';
import exhibitions from '../data/exhibitions.tsx';
import InteractiveFloorPlan from './InteractiveFloorPlan.tsx';
import floorplan from '../data/floorplan.tsx';

type Exhibition = (typeof exhibitions)[number];

const tableVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const useScrollLock = () => {
  const lockScroll = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  };
  
  const unlockScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  };
  
  return [lockScroll, unlockScroll];
};

const ExhibitionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);
  const [lockScroll, unlockScroll] = useScrollLock();

  const handleOpenExhibition = (exhibition: Exhibition) => {
    lockScroll();
    setSelectedExhibition(exhibition);
  };

  const handleCloseExhibition = () => {
    unlockScroll();
    setSelectedExhibition(null);
  };

  const filteredExhibitions = exhibitions.filter(exhibition => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      exhibition.projectId.toLowerCase().includes(searchTermLower) ||
      exhibition.title.toLowerCase().includes(searchTermLower) ||
      exhibition.organization.toLowerCase().includes(searchTermLower) || 
      exhibition.members.some(item => item.toLowerCase().includes(searchTermLower))
    );
  });

  return (
    <motion.div 
      className="space-y-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={tableVariants}
    >
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      
      <div>
      <p className="mb-2 flex items-center px-1 text-xs font-medium text-slate-500"><MousePointerClick className="mr-1.5 h-3.5 w-3.5" />Tap a booth on the map to learn more.</p>
      <AnimatePresence mode="wait">
        {searchTerm.length === 0 ? (
          <motion.div
            key="floorplan"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <InteractiveFloorPlan
              floorplan={floorplan}
              onGroupFocus={(tableName: string) => {
                const exhibition = exhibitions.find(
                  (exhibition) => exhibition.projectId === tableName
                );
                if (exhibition) {
                  handleOpenExhibition(exhibition);
                } else {
                  console.error(`Exhibition not found for table: ${tableName}`);
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="no-floorplan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      </div>

      <motion.div 
        className="space-y-4"
        variants={tableVariants}
      >
        <AnimatePresence mode="wait">
          {filteredExhibitions.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center text-sm text-slate-500"
            >
              No exhibitions found matching your search
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={tableVariants}
              className="space-y-4"
            >
              {filteredExhibitions.map((exhibition, index) => (
                <motion.div
                  key={exhibition.projectId}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -20,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                  className="cursor-pointer rounded-2xl border border-slate-200/70 bg-white p-4 shadow-card transition-shadow hover:shadow-lift active:scale-[0.99]"
                  onClick={() => handleOpenExhibition(exhibition)}
                >
                  <ExhibitionItem exhibition={exhibition} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedExhibition && (
          <ExhibitionOverlaySheet
            exhibition={selectedExhibition}
            onClose={handleCloseExhibition}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExhibitionsView;