import { eightyOneArray } from "../../data/data";
import MainCell from "./Cell";

const Cells = eightyOneArray.map((item, index) => (
  <MainCell location={item} key={index} />
));

const MainGrid: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-9 gap-1 bg-zinc-700 p-1 text-zinc-50 sm:m-4 sm:max-w-xl sm:rounded">
      {Cells}
    </div>
  );
};

export default MainGrid;
