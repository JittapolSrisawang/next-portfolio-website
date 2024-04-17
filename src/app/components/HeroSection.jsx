"use client";

import { TypeAnimation } from "react-type-animation";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Jittapol Srisawang", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            This is the website that collects my application projects. I also
            show all the source code of projects.
          </p>
          <div>
            <div className="socials flex flex-row gap-4 mt-6">
              <Link href="https://github.com/JittapolSrisawang" target="_blank">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jittapol-srisawang"
                target="_blank"
              >
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.png"
              alt="profile image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
