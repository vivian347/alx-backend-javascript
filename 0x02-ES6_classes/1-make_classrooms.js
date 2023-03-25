import ClassRoom from './0-classroom';

// implement initializeRooms to return an array of 3 ClassRoom objs with sizes 19, 20,34

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const instances = [];

  for (const size of sizes) {
    instances.push(new ClassRoom(size));
  }
  return instances;
}
