import {creativeData} from "../data/creative"
import GridCard from "../components/GridCard"
export default function GridLayout() {

  const layoutClasses = [
  "row-span-2 max-[533px]:col-span-2 sm:row-span-3 xl:row-span-2 xl:col-start-1 xl:row-start-1",
  "row-span-1 max-[533px]:row-span-2 sm:row-span-2 xl:row-span-1 xl:col-start-2",
  "row-span-2 sm:row-span-3 xl:row-span-2 xl:col-start-2 xl:row-start-2",
  "row-span-3 max-[533px]:col-span-2 sm:row-span-4 xl:row-span-3 xl:col-start-3 xl:row-start-1 xl:h-[25.7rem]",
  "row-span-2 sm:row-span-2 xl:row-span-1 xl:col-start-3 xl:row-start-3",
  "row-span-2 sm:row-span-3 xl:row-span-2 xl:col-start-4 xl:row-start-2",
];
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        xl:grid-cols-4
        auto-rows-[160px]
        sm:auto-rows-[180px]
        xl:auto-rows-[200px]
        gap-4
        p-[10vw]
      "
    >
      {creativeData.map((item, index) => (
        <GridCard
          key={item.id}
          img={item.img}
          name={item.name}
          location={item.location}
          className={layoutClasses[index % layoutClasses.length]}
        />
      ))}
    </div>
  );
}
