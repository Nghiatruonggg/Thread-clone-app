import Link from "next/link";
import Icons from "../../../icon";
import Center from "./_components/Center"

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
      <Center/>
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
