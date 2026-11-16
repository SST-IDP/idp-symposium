export type Room = {
  roomX: number;
  roomY: number;
  roomWidth: number;
  roomHeight: number;
  name: string;
  walled: boolean;
  doors: { x: number; y: number; vertical: boolean; double: boolean }[];
  tables: { x: number; y: number; name: string; vertical: boolean }[];
};

export const trainingRoom2: Room = {
  roomX: 500,
  roomY: 0,
  roomWidth: 500,
  roomHeight: 300,
  name: "Training Room 05-05",
  walled: true,
  doors: [
    { x: 8, y: 100, vertical: false, double: true },
    { x: 50, y: 100, vertical: false, double: false },
    { x: 100, y: 55, vertical: true, double: false },
  ],
  tables: [
    { x: 28, y: 12, name: "NIE(ENV)", vertical: false },
    { x: 68, y: 12, name: "NIE(MBT)", vertical: false },
    { x: 15, y: 50, name: "NNI", vertical: true },
    { x: 92, y: 50, name: "BAC", vertical: true },
    { x: 48, y: 78, name: "NHCS", vertical: false },
    { x: 72, y: 78, name: "NCCS", vertical: false },
  ],
};

export const trainingRoom3: Room = {
  roomX: 500,
  roomY: 350,
  roomWidth: 500,
  roomHeight: 350,
  name: "Training Room 05-06",
  walled: true,
  doors: [
    { x: 8, y: 0, vertical: false, double: true },
    { x: 50, y: 0, vertical: false, double: false },
    { x: 100, y: 52, vertical: true, double: false },
    { x: 8, y: 100, vertical: false, double: false },
  ],
  tables: [
    { x: 28, y: 12, name: "GHK", vertical: false },
    { x: 48, y: 82, name: "BII", vertical: false },
    { x: 15, y: 50, name: "SIT", vertical: true },
    { x: 88, y: 35, name: "AWWA", vertical: true },
    { x: 88, y: 68, name: "KKH", vertical: true },
    { x: 68, y: 12, name: "TTSH", vertical: false },
    { x: 72, y: 82, name: "HWN", vertical: false },
  ],
};

const exhibitionArea: Room = {
  roomX: 0,
  roomY: 350,
  roomWidth: 450,
  roomHeight: 350,
  name: "Exhibition Area",
  walled: false,
  doors: [],
  tables: [
    { x: 22, y: 84, name: "SICK", vertical: false },
    { x: 50, y: 84, name: "STM", vertical: false },
    { x: 78, y: 84, name: "DSO", vertical: false },
  ],
};

const vipReception: Room = {
  roomX: 170,
  roomY: 420,
  roomWidth: 180,
  roomHeight: 130,
  name: "VIP Reception",
  walled: false,
  doors: [],
  tables: [],
};

const floorplan: Room[] = [trainingRoom2, trainingRoom3, exhibitionArea, vipReception];

export default floorplan;
