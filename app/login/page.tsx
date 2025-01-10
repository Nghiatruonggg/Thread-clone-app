import Image from "next/image";
import LoginImg from "@/public/Login_Img_Desktop.webp";

const LoginPage = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute overflow-hidden w-full h-screen">
                <Image
                    src={LoginImg}
                    width={1440}
                    height={1000}
                    alt="Login Img"
                    className=" absolute w-fit h-[400px]  left-1/2 top-[20%] scale-125 transform -translate-x-1/2 -translate-y-1/2 object-center object-cover "
                />
            </div>

            <div className="absolute w-full max-w-[400px] h-[355px] p-6 top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-full max-h-full">
                    <p className="text-center mb-3 font-semibold    ">
                        Đăng nhập bằng tài khoản Instagram
                    </p>

                    <form className="space-y-3 mb-4" action="">
                        <input
                            className="w-full h-[55px] bg-input px-4 rounded-md placeholder:text-text placeholder:text-sm outline-[#1E1E1E] outline-1"
                            type="text"
                            required
                            placeholder="Tên người dùng, số điện thoại hoặc email"
                        />

                        <input
                            className="w-full h-[55px] bg-input px-4 rounded-md placeholder:text-text placeholder:text-sm outline-[#1E1E1E] outline-1"
                            type="password"
                            required
                            placeholder="Mật khẩu"
                        />

                        <button className="bg-white w-full text-text h-14 rounded-xl">
                            Đăng nhập
                        </button>
                    </form>

                    {/* TODO: Link */}
                    <div className="w-full">
                        <p className="text-center text-sm text-text">
                            Bạn quên mật khẩu ư?
                        </p>
                    </div>
                </div>
            </div>

            <footer className="absolute w-full h-[50px] bottom-0">
                <ul className="flex w-full h-full items-center justify-center gap-5 text-xs text-text m-auto flex-wrap">
                    <li>© 2025</li>
                    <li>Điều khoản của Thread</li>
                    <li>Chính sách quyền riêng tư</li>
                    <li>Chính sách cookies</li>
                    <li>Báo cáo sự cố</li>
                </ul>
            </footer>
        </div>
    );
};

export default LoginPage;
