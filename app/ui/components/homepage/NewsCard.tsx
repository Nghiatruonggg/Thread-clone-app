import Image from "next/image";
import { newsCard } from "@/app/structure/newsCard";

const NewsCard = () => {
  return (
    <>
      <div className="mt-4 w-full max-w-[650px] min-h-[300px] p-3 bg-[#181818] rounded-2xl flex ">
        <div className="w-10 h-full ml-4">
          <Image
            src="/users/user-1.jpg"
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full"
          />
        </div>

        <div className="w-full h-full pl-4">
          <div className="flex gap-3">
            <span className="font-semibold">Jonas</span>
            <span className="text-[#747474]">5 hours</span>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <div className="w-full max-w-[500px]">
              Amazing tour at terreaterrebrighton with a voucher from
              @freddobarnone & @_bibliomaniac
            </div>

            <div>
              <Image
                src="/tours/tour-1-1.jpg"
                alt="image cover"
                width={500}
                height={500}
              />
            </div>

            <div className="flex gap-5">
              {newsCard.map((icon, i) => {
                const IconComponent = icon.shape;
                return (
                  <div key={i} className="flex items-center">
                    <IconComponent className={icon.className} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default NewsCard;
