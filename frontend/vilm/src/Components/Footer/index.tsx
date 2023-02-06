import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="grid grid-cols-1 bg-[#141414] p-5  sm:grid-cols-3">
      <div className="flex flex-col items-center text-2xl font-bold">
        <span>©Viml</span>

        <a
          target={"__blank"}
          className="text-lg hover:text-white/90"
          href="https://vaylots-portfolio.vercel.app"
        >
          Автор | @Vaylots
        </a>
      </div>
    </footer>
  );
};
