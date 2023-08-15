"use client";
import { Button, Typography } from "@material-tailwind/react";
import { Kavoon } from "next/font/google";
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Blob from "./Icon/IconBlob";
import IconNextjs from "./Icon/IconNextJS";
import IconTailwind from "./Icon/IconTailwind";
import IconReact from "./Icon/IconReact";
import IconCss from "./Icon/IconCss";
import IconExpress from "./Icon/IconExpress";
import IconLaravel from "./Icon/IconLaravel";
import IconMySql from "./Icon/IconMySql";
import IconNodeJs from "./Icon/IconNodeJs";

const kavoon = Kavoon({ weight: "400", subsets: ["latin"] });

function beranda() {
  return (
    <div className="flex flex-row text-lg  sm:h-[87vh] ">
      <div className="left basis-1/2 flex flex-col h-full justify-center gap-5">
        <Typography variant="h3" className="text-gray-400">
          Hello world <span className="text-2xl">👋</span>, I&#39;m...
        </Typography>
        <div className="flex flex-col">
          <Typography style={kavoon.style} variant="h2">
            Irvan <span className="">Azwardi</span>
          </Typography>
          <Typography className="-mt-2" color="blue-gray">
            Fullstack Developer | Base on JS
          </Typography>
        </div>
        <div>
          <Typography className=" text-lg">
            Saya merupakan seorang mahasiswa semester akhir jurusan Sistem
            Informasi di Universitas Muhammadiyah Riau. Saya memilih jurusan
            Sistem Informasi karena menurut saya jurusan ini sangat relevan
            dengan seorang Programmer di suatu perusahaan, karena jurusan ini
            mengajarkan bagaimana me manajemen project-project IT...
          </Typography>
          <Button size="sm" color="light-blue">
            About Me
          </Button>
        </div>
        <div className="sosmed flex gap-4 mt-10">
          <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
            <i className="fab fa-google text-lg" />
          </IconButton>
          <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
            <i className="fab fa-twitter text-lg" />
          </IconButton>
          <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
            <i className="fab fa-dribbble text-lg" />
          </IconButton>
          <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
            <i className="fab fa-github text-lg" />
          </IconButton>
        </div>
      </div>
      <div className="right basis-1/2 relative">
        <div className="h-full w-full  flex justify-center items-center">
          <Image
            src="/Image/profile.png"
            alt="Profile"
            width={314}
            height={318}
            className="z-10 drop-shadow-lg bg-[#f0c12880] rounded-full absolute top-0 right-0 left-0 bottom-0 m-auto scale-75"
          />
          <div className="sm:h-[400px] sm:w-[400px]  rounded-full absolute ">
            <Blob />
            <IconButton className="rounded-full bg-black hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10 animate-rotasi absolute top-0 right-0 left-0 bottom-0 m-auto z-50">
              <IconNextjs className="text-xl" />
            </IconButton>
            <IconButton className="rounded bg-white hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10 animate-[rotasi_4.1s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto">
              <IconTailwind className="scale-150 text-[#38bdf8]" />
            </IconButton>
            <IconButton className="rounded  bg-transparent animate-[rotasi_4.2s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto shadow-none">
              <IconReact className="text-[#149eca] text-xl " />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 animate-[rotasi_4.3s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto">
              <IconCss className=" text-xl" />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 animate-[rotasi_4.4s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto">
              <IconExpress className="text-xl" />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 animate-[rotasi_4.5s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto">
              <IconLaravel className=" text-xl" />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 animate-[rotasi_4.6s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto">
              <IconMySql className=" text-xl" />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 animate-[rotasi_4.7s_linear_infinite] absolute top-0 right-0 left-0 bottom-0 m-auto">
              <IconNodeJs className=" text-xl" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default beranda;
