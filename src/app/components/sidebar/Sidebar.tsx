"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Phone,
  Instagram,
  Search,
  Compass,
  Film,
  MessageCircle,
  Bell,
  SquarePlus,
  FileChartColumnIncreasing,
  CircleUser,
  Menu,
  GlobeLock,
} from "lucide-react";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();

  // All nav items except the Menu (settings)
  const mainNavItems = [
    {
      href: "/",
      icon: <Instagram size={24} />,
      label: "Project SC1",
    },
    { href: "/", icon: <Home size={24} />, label: "Home" },
    { href: "/search", icon: <Search size={24} />, label: "Search" },
    { href: "/explore", icon: <Compass size={24} />, label: "Explore" },
    { href: "/reels", icon: <Film size={24} />, label: "Reels" },
    {
      href: "/messenger",
      icon: <MessageCircle size={24} />,
      label: "Messenger",
    },
    {
      href: "/notifications",
      icon: <Bell size={24} />,
      label: "Notifications",
    },
    { href: "/create", icon: <SquarePlus size={24} />, label: "Create" },

    { href: "/profile", icon: <CircleUser size={24} />, label: "Profile" },
  ];

  const settingsItem = [
    {
      href: "/privacy-dashboard",
      icon: <GlobeLock size={24} />,
      label: "Privacy Dashboard",
    },
    {
      href: "/settings",
      icon: <Menu size={24} />,
      label: "Settings",
    },
  ];

  return (
    <div className="h-screen w-[200px] flex flex-col justify-between items-start py-4 px-2">
      {/* Top section - main nav icons */}
      <div className="flex flex-col space-y-4 w-full">
        {mainNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center space-x-3 w-full text-gray-500 hover:text-black ${
              pathname === item.href ? "text-black" : ""
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Bottom section - settings/menu icon */}
      <div className="flex flex-col space-y-4 w-full pb-4">
        {settingsItem.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center space-x-3 w-full text-gray-500 hover:text-black ${
              pathname === item.href ? "text-black" : ""
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
