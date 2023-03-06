import { signOut } from "next-auth/react";

const LogOutButton: React.FC = () => {
  return (
    <button
      onClick={async () => {
        await signOut({ callbackUrl: `${window.location.origin}` });
      }}
      className="rounded-lg border-2 border-zinc-50 bg-zinc-800 p-1 text-2xl text-zinc-50 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-blue-800 sm:text-3xl"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
