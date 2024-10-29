import React from "react";
import { Search } from "lucide-react";
import { SiteLogo } from "@/components/svg";
import logo from "@/public/images/logo/logo-1.png";
import Link from "next/link";
import Image from "next/image";
const horizontalHeader = ({ handleOpenSearch }) => {
  return (
    <div className="flex items-center lg:gap-12 gap-3 ">
      <div>
        <Link
          href="/dashboard"
          className=" text-primary flex items-center gap-2"
        >
          <Image src={logo} className="inline-block" />
        </Link>
      </div>
    </div>
  );
};

export default horizontalHeader;
