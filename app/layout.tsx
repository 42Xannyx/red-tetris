import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SidebarMenu from "@/components/Sidebar/SidebarMenu";

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
				<div className="flex flex-col w-screen h-screen">
					<div className="flex flex-row h-screen">
						<SidebarMenu />
						<div className="overflow-hidden flex-col w-full h-full border-t max-w-screen">
							<div className="flex flex-row w-full h-full">{children}</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
