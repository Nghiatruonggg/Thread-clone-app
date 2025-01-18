import { JSX } from "react";
import Icons from "../icon";

export type sideBarDisplayType = {
    outerDivClassName: string;
    href: string;
    icon: ({ className }: { className: string }) => JSX.Element;
    innerLinkClassName: string;
};

export const sideBarDisplay: sideBarDisplayType[] = [
    {
        outerDivClassName: "w-[54px] h-[54px] flex justify-center items-center",
        href: "/",
        icon: Icons.Home,
        innerLinkClassName: "w-full h-full flex items-center justify-center",
    },
];
