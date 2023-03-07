import { usePostContext } from "../../hooks/usePostContext";

interface MainCellProps {
  location: number;
  occupied: boolean;
}

const MainCell: React.FC<MainCellProps> = (props: MainCellProps) => {
  const { postState, postDispatch } = usePostContext();
  return (
    <div
      onClick={() => {
        postDispatch({
          type: "CHANGE-WINDOW-MODE",
          payload: {
            windowMode: "create",
            activePost: postState.activePost,
            posts: postState.posts,
          },
        });
      }}
      className={
        props.occupied
          ? "flex aspect-square items-center justify-center rounded bg-zinc-800 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-red-800"
          : "flex aspect-square items-center justify-center rounded bg-zinc-800 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-blue-800"
      }
    >
      {props.location}
    </div>
  );
};

export default MainCell;
