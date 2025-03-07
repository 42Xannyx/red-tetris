import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SidebarMenu from "@/components/Sidebar/Sidebar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Red Tetris",
	description: "A multiplayer Tetris game",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} mx-auto flex min-h-screen w-full flex-col antialiased`}
			>
				<SidebarMenu />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
