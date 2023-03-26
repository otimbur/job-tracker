"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import DropDown from "./Components/DropDown";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <li className="flex gap-8 items-center">
      <button onClick={() => setOpenModal(!openModal)}>
        <Image
          width={54}
          height={54}
          className="rounded-full"
          alt={"profile picture"}
          src={image}
        />
      </button>

      {openModal && <DropDown />}
    </li>
  );
}
