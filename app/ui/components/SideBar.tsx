import Link from "next/link";
import Icons from "../icon";

const SideBar = () => {
    return (
        <div className="w-[76px] min-h-[480px] h-full fixed left-0 flex flex-col justify-between items-center">
            {/* First comp */}
            <div className="py-4">
                <Link href="/">
                    <Icons.Threads className="w-[40px]" />
                </Link>
            </div>

            {/* Second comp */}
            <div className="flex flex-col justify-between items-center gap-2">
                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <Link
                        className="w-full h-[42px] flex items-center justify-center  fill-transparent stroke-text hover:fill-white hover:stroke-transparent hover:rounded-lg hover:bg-navHover transition ease-in-out "
                        href="/"
                    >
                        <Icons.Home className="" />
                    </Link>
                </div>

                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <Link
                        className="w-full h-full flex items-center justify-center "
                        href="/"
                    >
                        <Icons.Search className="" />
                    </Link>
                </div>

                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <div className="w-full h-full flex items-center justify-center ">
                        <Icons.Plus className="" />
                    </div>
                </div>

                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <Link
                        className="w-full h-full flex items-center justify-center "
                        href="/"
                    >
                        <Icons.Notification className="" />
                    </Link>
                </div>

                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <Link
                        className="w-full h-full flex items-center justify-center "
                        href="/"
                    >
                        <Icons.Profile className="" />
                    </Link>
                </div>
            </div>

            {/* Third comp */}
            <div className="py-4">
                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <Link
                        className="w-full h-full flex items-center justify-center "
                        href="/"
                    >
                        <Icons.Pin className="" />
                    </Link>
                </div>

                <div className="w-[54px] h-[54px] flex justify-center items-center">
                    <Link
                        className="w-full h-full flex items-center justify-center "
                        href="/"
                    >
                        <Icons.More className="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
