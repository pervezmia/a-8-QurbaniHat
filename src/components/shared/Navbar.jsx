import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <Link href={"/"} className="">
        <button>Home</button>
      </Link>
      <Link href={"/"} className="">
        <button>All Animals</button>
      </Link>
    </>
  );
  return (
    <div>
      <div className="bg-slate-500 py-2">
        <div className="flex justify-between items-center gap-5 max-w-7xl mx-auto ">
          <div className="font-bold text-xl">Logo</div>
          <div className="flex justify-between gap-2.5 items-center">
            <Link href={"/"}>
              <Button>Home</Button>
            </Link>
            <Link href={"/"}>
              <Button>All Animals</Button>
            </Link>
          </div>
          <div className="flex gap-2 ">
            <Link href={"/"}>
              <Button>Login</Button>
            </Link>
            <Link href={"/"}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
