import Breadcrumb from "../breadcrumb/Breadcrumb";

type childrenProp = {
  children: React.ReactNode;
  pathname?: string;
};

const MainContainer = ({ children, pathname }: childrenProp) => {
  return (
    <main className="w-[1050px] h-screen m-auto p-4 flex gap-7 ">
      <div className="w-full max-w-[650px] h-full">
        <Breadcrumb pathname={pathname} />
        {children}
      </div>

      {/* Non-login */}
      <div className="w-[340px] h-[300px] bg-[--card-background] mt-10 rounded-2xl p-6">
        <div className="flex justify-center flex-col items-center gap-3">
          <p className="w-[230px] font-bold text-xl text-wrap text-center">
            Đăng nhập hoặc đăng ký Thread
          </p>

          <p className="w-[250px] text-wrap text-center text-[--text-color] text-sm">
            Xem mọi người đang nói về điều gì và tham gia cuộc trò chuyện.
          </p>

          <button className="bg-[--back-color] mt-3 w-[280px] h-[80px] rounded-2xl font-bold">Tiếp tục đăng nhập</button>

          <p className="text-[--text-color]">Đăng nhập bằng tên người dùng</p>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
