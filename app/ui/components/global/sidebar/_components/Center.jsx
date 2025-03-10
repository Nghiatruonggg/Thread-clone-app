import Link from "next/link";
import Icons from "@/app/ui/icon";
import { sideBarCenter } from "@/app/structure/sideBarCenter";

const wrapClassName = "w-[54px] h-[54px] flex justify-center items-center";

const Center = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2">
      {sideBarCenter.map((icon, i) => {
        const IconComponent = icon.shape;
        return (
          <div key={i} className={wrapClassName}>

            <Link href={icon.href} className={icon.className}>
              <IconComponent />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Center;
