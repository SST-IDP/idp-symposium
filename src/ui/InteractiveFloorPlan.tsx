import React from 'react';
import { ChevronLeft } from 'lucide-react';
import FloorPlan from './FloorPlan.tsx';
import { Room } from '../data/floorplan.tsx';

type InteractiveFloorPlanProps = {
  floorplan: Room[];
  onGroupFocus: (tableName: string) => void;
};

const InteractiveFloorPlan = ({floorplan, onGroupFocus}: InteractiveFloorPlanProps) => {
  // store which room is currently focused, or null if no room is focused
  const [focusedRoom, setFocusedRoom] = React.useState<Room | null>(null);

  // create a callback function to handle room clicks
  const handleRoomClick = (roomName: string) => {
    console.log(`Room clicked: ${roomName}`)

    if (focusedRoom?.name === roomName) {
      setFocusedRoom(null);
    } else {
      // get the room object from the floorplan data
      const room = floorplan.find((room: Room) => room.name === roomName);
      if (!room) {
        console.error(`Room not found: ${roomName}`);
        return;
      }

      // rooms with no booths (e.g. VIP Reception) have nothing to zoom into
      if (room.tables.length === 0) {
        return;
      }

      console.log(`Room found: ${room.name}`);
      setFocusedRoom(room); // set the focused room
    }
  };

  return (
    <div className="relative rounded-2xl border border-slate-200/70 bg-white p-2 shadow-card">
      {focusedRoom && (
        <button
          type="button"
          onClick={() => setFocusedRoom(null)}
          className="mb-1 ml-1 mt-1 flex items-center rounded-full border border-slate-200 bg-white/90 py-1.5 pl-2 pr-3 text-xs font-semibold text-brand-600 shadow-card backdrop-blur hover:text-brand-700"
        >
          <ChevronLeft className="mr-0.5 h-4 w-4" />
          Back to map
        </button>
      )}
      <FloorPlan
        width={focusedRoom == null ? 1000 : focusedRoom.roomWidth}
        height={focusedRoom == null ? 700 : focusedRoom.roomHeight}
        rooms={floorplan}
        offsetX={(focusedRoom?.roomX || 0)*-1}
        offsetY={(focusedRoom?.roomY || 0)*-1}
        onRoomClick={handleRoomClick}
        onTableClick={(tableName) =>
          onGroupFocus(tableName)
        }
      />
    </div>
  );
};

export default InteractiveFloorPlan;