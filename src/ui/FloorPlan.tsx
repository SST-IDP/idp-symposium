import React from 'react';

const tableWidth = 40;
const tableHeight = 80;

const wallThickness = 5; // thickness of the wall and door

type TableData = { name: string; vertical: boolean; x: number; y: number };
type DoorData = {
  x: number;
  y: number;
  double?: boolean;
  vertical?: boolean;
  wallThickness?: number;
  doorWidth?: number;
  isLeftHinge?: boolean;
  color?: string;
};
type RoomData = {
  name: string;
  roomX: number;
  roomY: number;
  roomWidth: number;
  roomHeight: number;
  tables: TableData[];
  doors: DoorData[];
  walled: boolean;
};
type FloorPlanProps = {
  width: number;
  height: number;
  rooms: RoomData[];
  onRoomClick: (name: string) => void;
  onTableClick: (name: string) => void;
  offsetX?: number;
  offsetY?: number;
};

const FloorPlan = ({width, height, rooms, onRoomClick, onTableClick, offsetX=0, offsetY=0}: FloorPlanProps) => {
    return (
        <div>
            <div className="w-full max-w-xl mx-auto">
            <svg 
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto p-3"
            >
                {/* Render the rooms */}
                {rooms.map((room, index) => (
                    <RoomPlan 
                        key={index}
                        {...room}
                        roomX={room.roomX + offsetX}
                        roomY={room.roomY + offsetY}
                        onRoomClick={() => onRoomClick(room.name)} 
                        onTableClick={(tableName) => onTableClick(tableName)} 
                    />
                ))}
            </svg>
            </div>
        </div>
    );
};

const RoomPlan = ({onTableClick, onRoomClick, roomX, roomY, roomWidth, roomHeight, tables, doors, name, walled}: RoomData & {
  onTableClick: (name: string) => void;
  onRoomClick: () => void;
}) => {
    return (
      <g transform={`translate(${roomX}, ${roomY})`}> {/* Transform the X and Y according to roomX and roomY */}

        {/* Room walls, if the room is walled */}
        <rect
          x={0}
          y={0}
          width={roomWidth}
          height={roomHeight}
          rx={8}
          fill={walled ? "#f8fafc" : "#ffffff"}
          stroke="#94a3b8"
          onClick={onRoomClick}
          strokeWidth={wallThickness}
          strokeDasharray={walled ? "" : "10,10"}
        />

        {/* Render the tables */}
        {tables.map((table, index) => (
            <Table key={index} {...table} roomWidth={roomWidth} roomHeight={roomHeight} onClick={() => onTableClick(table.name)} />
        ))}

        {/* doors */}
        {doors.map((door, index) => (
            <Door key={index} {...door} roomWidth={roomWidth} roomHeight={roomHeight} />
        ))}
        
        {/* Room label */}
        <text
          x={roomWidth/2}
          y={walled ? roomHeight/2 : 28}
          className="text-lg font-semibold"
          fill="#475569"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {name}
        </text>
      </g>
    );
};

const Table = ({onClick, vertical, x, y, roomWidth, roomHeight, name}: TableData & {
  onClick: () => void;
  roomWidth: number;
  roomHeight: number;
}) => {
    const width = vertical ? tableWidth : tableHeight;
    const height = vertical ? tableHeight : tableWidth;

    const adjustedX = (x/100 * roomWidth) - width/2;
    const adjustedY = (y/100 * roomHeight) - height/2; // center the table

    return (
        <g onClick={onClick}>
        <rect
            x={adjustedX}
            y={adjustedY}
            width={width}
            height={height}
            rx={6}
            fill="#6366f1"
            stroke="#4338ca"
            className="hover:fill-indigo-400 transition-colors cursor-pointer"
        />
        <text
            x={adjustedX + width / 2}
            y={adjustedY + height / 2}
            className="text-sm font-semibold"
            fill="#ffffff"
            pointerEvents="none"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={vertical ? `rotate(90, ${adjustedX + width / 2}, ${adjustedY + height / 2})` : undefined}
        >
            {name}
        </text>
        </g>
    );
}

const Door = (doorParams: DoorData & { roomWidth: number; roomHeight: number }) => {
  const {
    x,
    y,
    roomWidth,
    roomHeight,
    double = false,
    vertical = false,
    doorWidth = 30,
    isLeftHinge = true,
    color = "#475569",
  } = doorParams;

  // Gap length along the wall, and the centre of the gap in room coordinates
  const length = doorWidth * (double ? 2 : 1);
  const cx = (x / 100) * roomWidth;
  const cy = (y / 100) * roomHeight;

  // Doors always swing into their own room, based on which wall they sit on
  const rotation = vertical ? (x >= 50 ? 90 : -90) : y >= 50 ? 180 : 0;

  // Leaf + swing arc, drawn in local coords: wall along +x at y=0, room below (+y)
  const Leaf = ({ at, hingeLeft }: { at: number; hingeLeft: boolean }) => {
    const hx = at + (hingeLeft ? 0 : doorWidth);
    return (
      <g>
        <line x1={hx} y1={0} x2={hx} y2={doorWidth} stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path
          d={`M ${hx} ${doorWidth} A ${doorWidth} ${doorWidth} 0 0 ${hingeLeft ? 0 : 1} ${hingeLeft ? hx + doorWidth : hx - doorWidth} 0`}
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </g>
    );
  };

  return (
    <g transform={`translate(${cx},${cy}) rotate(${rotation}) translate(${-length / 2},0)`}>
      {/* cut the opening in the wall */}
      <rect
        x={0}
        y={-wallThickness / 2 - 1}
        width={length}
        height={wallThickness + 2}
        fill="#f8fafc"
      />
      <g className="hover:opacity-80 transition-opacity cursor-pointer">
        {double ? (
          <>
            <Leaf at={0} hingeLeft={true} />
            <Leaf at={doorWidth} hingeLeft={false} />
          </>
        ) : (
          <Leaf at={0} hingeLeft={isLeftHinge} />
        )}
      </g>
    </g>
  );
};

export default FloorPlan;
