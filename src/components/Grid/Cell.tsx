interface MainCellProps {
  location: number;
}

const MainCell: React.FC<MainCellProps> = (props: MainCellProps) => {
  return (
    <div className="flex aspect-square items-center justify-center rounded bg-zinc-800 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-blue-800">
      {props.location}
    </div>
  );
};

export default MainCell;
