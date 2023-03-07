import { useSession } from "next-auth/react";

import MainLogo from "./MainLogo";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

const NavBar: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <nav className="flex justify-between bg-zinc-700">
      <div className="m-4">
        <MainLogo />
      </div>
      <div className="m-4 flex gap-4">
        {!sessionData && <SignUpButton />}
        {!sessionData && <LogInButton />}
        {sessionData && <span>Username</span>}
        {sessionData && <LogOutButton />}
      </div>
    </nav>
  );
};

export default NavBar;
