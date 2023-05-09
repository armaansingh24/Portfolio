import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  SiTwitter,
  SiLeetcode,
  SiLinkedin,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/Si";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const MyProfiles = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}> My Profiles</h2>
        <div className="flex xl:flex-row flex-col gap-8 justify-center items-center mt-12 flex-wrap mx-auto w-full">
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                variants={fadeIn("right", "spring", 0.5, 0.55)}
                href="https://twitter.com/armaan_singh241"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="text-blue-400">
                  <SiTwitter />
                </span>
                Twitter
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://github.com/armaansingh24?tab=repositories"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="bg-black">
                  <FaGithub />
                </span>
                GitHub
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://leetcode.com/armaansingh24/"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="text-yellow-400 rounded-full">
                  <SiLeetcode />
                </span>
                LeetCode
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://www.linkedin.com/in/sarmaan241/"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="text-blue-700 bg-white rounded-full">
                  <SiLinkedin />
                </span>
                Linkedin
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://codeforces.com/profile/armaan_singh24"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="rounded-full">
                  <SiCodeforces />
                </span>
                Codeforces
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://www.codechef.com/users/armaan_singh24#_=_"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="rounded-full ">
                  <SiCodechef />
                </span>
                Codeforces
              </a>
            </Tilt>
          </motion.div>
          <motion.div
            className="w-full xl:w-auto"
            variants={fadeIn("right", "spring", 0.5, 0.55)}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <a
                href="https://www.hackerrank.com/_armaan_singh24"
                target="_blank"
                className={`flex gap-2 items-center justify-center cursor-pointer text-2xl bg-tertiary p-2 rounded-lg xl:w-[260px] w-full`}
              >
                <span className="rounded-full bg-green-500 text-black">
                  <SiHackerrank />
                </span>
                HackerRank
              </a>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(MyProfiles, "profiles");
