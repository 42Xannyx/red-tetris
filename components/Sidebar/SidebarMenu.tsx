"use client";

import { SidebarUI, SidebarItem } from "./Sidebar";

import {
	Users,
	Videotape,
	Home,
	Share2,
	BookOpen,
	DollarSign,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SidebarMenu = () => {
	const navigationItems = [
		{
			text: "Docs",
			url: "https://streameth.notion.site/StreamETH-Docs-f31d759cea824b0ea8f959a4608b0b42",
			icon: <BookOpen size={25} />,
		},
		{
			text: "Settings",
			url: "https://streameth.notion.site/StreamETH-Docs-f31d759cea824b0ea8f959a4608b0b42",
			icon: <BookOpen size={25} />,
		},
		{
			text: "Users",
			url: "https://streameth.notion.site/StreamETH-Docs-f31d759cea824b0ea8f959a4608b0b42",
			icon: <BookOpen size={25} />,
		},
	];

	const organizationId = "test";

	return (
		<div className="relative h-full border-t w-[1/4]">
			<SidebarUI>
				{navigationItems.map((item, index) => (
					<SidebarItem
						key={index}
						url={item.url}
						text={item.text}
						icon={item.icon}
					/>
				))}
			</SidebarUI>
		</div>
	);
};

export default SidebarMenu;
