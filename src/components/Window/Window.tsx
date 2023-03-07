interface WindowProps {
  mode: "rules" | "edit";
}

const Window: React.FC<WindowProps> = (props: WindowProps) => {
  return (
    <div className="w-full gap-1 bg-zinc-800 p-1 text-zinc-50 sm:m-4 sm:max-w-xl sm:rounded lg:max-w-md lg:bg-zinc-700">
      {props.mode === "rules" && <RulesWindow />}
    </div>
  );
};

export default Window;

const RulesWindow: React.FC = () => {
  return (
    <div className="flex flex-col">
      <p className="m-2 text-center text-2xl">
        Thank you for visiting{" "}
        <span className="text-blue-600">shawn81.com!</span>
      </p>
      <p className="mx-4 my-2">
        This website displays up to eighty-one (81) messages at a time.
      </p>
      <p className="mx-4 my-2">
        Click on a square to see the message it contains.
      </p>
      <p className="mx-4 my-2">
        Accounts can only post one message, so make it worth it.
      </p>
      <p className="mx-4 my-2">Please only make one account per person.</p>
      <p className="mx-4 my-2">
        I reserve the right to delete any messages I wish at any time.
      </p>
    </div>
  );
};

interface InnerWindowProps {
  username: string;
  message: string;
  location: number;
  page: string;
}

const CreateWindow: React.FC<InnerWindowProps> = (props: InnerWindowProps) => {
  return (
    <div className="flex flex-col">
      <form>
        <div className="flex">
          <span>{props.location}</span>
          <span>{props.username}</span>
          <button>✕</button>
        </div>
        <input />
        <button type="submit"></button>
      </form>
    </div>
  );
};
