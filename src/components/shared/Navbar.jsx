"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  // const user = userData.data.user;
  const user = userData.data?.user;
  console.log(user);
  const handleSignOut = async () => {
    await authClient.signOut();
  }
  return (
    <div className="border-b px-2 mb-4">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div>
          <Link className="flex gap-1 items-center" href={"/"}>
            <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black animate__animated animate__bounce">QurbaniHat.</h3>
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"}>All Animals</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li>
                <Link href={"/register"}>
                  <Button variant="outline">Register</Button>
                </Link>
              </li>
              <li>
                <Link href={"/signin"}>
                  <Button>Log In</Button>
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} variant="danger">Sign Out</Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
