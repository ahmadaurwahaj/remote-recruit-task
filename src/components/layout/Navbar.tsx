import logoImg from '../../assets/images/logo.png';

export function Navbar() {
  return (
    <header className="absolute top-6 left-0 right-0 z-50 w-full bg-transparent flex items-center">
      <div className="w-full mx-auto flex items-center justify-between px-4 md:px-0 max-w-[1337.5px] h-[50px]">
        <a href="#" className="flex items-center">
          <img
            src={logoImg}
            alt="RemoteRecruit"
            className="object-contain w-[123.31px] h-[50px]"
          />
        </a>

        <div className="flex items-center space-x-6">
          <a
            href="#signin"
            className="text-white hover:text-[#3DBDE3] font-medium text-[13px] transition-colors duration-300"
          >
            Sign In
          </a>
          <button className="text-white font-medium text-[13px] hover:bg-[#2ba8cc] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer font-sans w-[92px] h-[44px] rounded-[18px] bg-[#3DBDE3]">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
