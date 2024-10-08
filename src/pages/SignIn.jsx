import React, { useState } from "react";
import Container from "../layers/Container";
import sign from "/signIn.png";
import Title from "../layers/Title";
import googleLogo from "/googleLogo.png";
import facebookLogo from "/facebookLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import mdLogo from "/signLogo.png";
import smLogo from "/logo.png";

const SignIn = () => {
  let [name, setName] = useState();
  let [nameErr, setNameErr] = useState();

  let [email, setEmail] = useState();
  let [emailErr, setEmailErr] = useState();

  let [password, setPassword] = useState();
  let [passwordErr, setPasswordErr] = useState();
  let [passwordEye, setPasswordEye] = useState(false);

  let manageName = (element) => {
    let nameCheck = element.target.value;
    setName(nameCheck);
    setNameErr("");
  };

  let manageEmail = (element) => {
    let emailCheck = element.target.value;
    setEmail(emailCheck);
    setEmailErr("");
  };

  let managePassword = (element) => {
    let passwordCheck = element.target.value;
    setPassword(passwordCheck);
    setPasswordErr("");
  };

  let manageSubmit = () => {
    if (!name) {
      setNameErr("Name field is required");
    }
    if (!email) {
      setEmailErr("Email field is required");
    }
    if (!password) {
      setPasswordErr("Password is required");
    } else if (!/^(?=.*[0-9])/.test(password)) {
      setPasswordErr("Password must contain one digit from 1 to 9");
    } else if (!/^(?=.*[a-z])/.test(password)) {
      setPasswordErr("At least one lowercase letter is required");
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setPasswordErr("At least one uppercase letter is required");
    } else if (!/^(?=.*\W)/.test(password)) {
      setPasswordErr("At least one special character is required");
    } else if (!/^(?!.* )/.test(password)) {
      setPasswordErr("Password contain no space");
    } else if (!/^.{8,16}$/.test(password)) {
      setPasswordErr("Password must be 8-16 characters long.");
    }
  };
  return (
    <div>
      <Container className="overflow-hidden max-w-[1868px] flex flex-col md:flex-row items-center justify-center md:bg-banner-color pb-6 px-4  md:py-[105px] md:px-[214px] relative">
        <img
          className="md:w-auto w-24 md:block absolute right-8 top-5 md:right-[244px] md:top-[150px]"
          src={mdLogo}
          alt={mdLogo}
        />
        <img
          className="block md:hidden h-[450px] w-full object-cover"
          src={sign}
          alt=""
        />
        <div className="left h-auto md:h-[1060px] bg-white flex flex-col items-center justify-center px-0 md:px-24 gap-6 py-0 rounded-tl-[20px] rounded-bl-[20px]">
          <Title className="mt-5 md:mt-10" titleText="Get Started" />
          <p className="font-frank-ruhl-libre font-medium text-xl md:text-2xl text-[#868686]">
            Already have an account?{" "}
            <a href="/login" className="text-[#F59C15]">
              Log in
            </a>
          </p>
          <p className="mb-0 md:mb-9 font-frank-ruhl-libre font-medium text-base md:text-2xl relative after:absolute after:w-20 md:after:w-[230px] after:h-[2px] after:bg-[#C4C4C4] after:top-[50%] after:-translate-y-[50%] after:left-16 before:absolute before:w-20 md:before:w-[230px] before:h-[2px] before:bg-[#C4C4C4] before:top-[50%] before:-translate-y-[50%] before:right-16">
            OR
          </p>
          <div className="w-full singBtn flex flex-col md:flex-row gap-6">
            <a
              href="https://accounts.google.com/"
              className="flex w-full md:w-auto items-center justify-center gap-[9px] font-frank-ruhl-libre font-medium text-[22px] bg-[#F4F4F4] rounded-[20px] pr-[33px] pl-4 shadow-sign py-0 md:py-1 hover:shadow-xl duration-300 transition-all"
            >
              <img src={googleLogo} alt="" />
              Sign up with Google
            </a>
            <a
              href="https://www.facebook.com/"
              className="flex w-full md:w-auto items-center justify-center gap-[9px] font-frank-ruhl-libre font-medium text-[22px] bg-[#4946E5] rounded-[20px] pr-[33px] pl-4 shadow-sign text-white py-3 md:py-4 hover:shadow-xl duration-300 transition-all"
            >
              <img src={facebookLogo} alt="" />
              Sign up with Facebook
            </a>
          </div>
          <div className="form mt-0 md:mt-7 w-full flex items-center justify-center flex-col gap-7 md:gap-9">
            <div className="w-full flex flex-col gap-2 md:gap-5 relative">
              <label
                htmlFor="name"
                className="w-full font-medium font-frank-ruhl-libre text-xl md:text-2xl text-[#868686]"
              >
                Full name
              </label>
              <input
                onChange={manageName}
                value={name}
                className="border border-[#C5C5C5] outline-none bg-transparent rounded-[20px] py-2 md:py-3 px-4 w-full text-xl md:text-2xl"
                type="text"
                id="name"
              />
              <p className="text-sm md:text-xl text-red-800 absolute left-0 top-[103%]">
                {nameErr}
              </p>
            </div>
            <div className="w-full flex flex-col gap-2 md:gap-5 relative">
              <label
                htmlFor="email"
                className="font-medium font-frank-ruhl-libre text-xl md:text-2xl text-[#868686]"
              >
                Email Address
              </label>
              <input
                onChange={manageEmail}
                value={email}
                className="border border-[#C5C5C5] outline-none bg-transparent rounded-[20px] py-2 md:py-3  px-4 text-xl md:text-2xl"
                type="email"
                id="email"
              />
              <p className="text-sm md:text-xl text-red-800 absolute left-0 top-[103%]">
                {emailErr}
              </p>
            </div>
            <div className="w-full flex flex-col gap-2 md:gap-5 relative">
              <label
                htmlFor="password"
                className="font-medium font-frank-ruhl-libre text-xl md:text-2xl text-[#868686]"
              >
                Password
              </label>
              <input
                onChange={managePassword}
                value={password}
                className="border border-[#C5C5C5] outline-none bg-transparent rounded-[20px] py-2 md:py-3  px-4 text-xl md:text-2xl"
                type={passwordEye ? "text" : "password"}
                id="password"
              />
              <p className="text-sm md:text-xl text-red-800 absolute left-0 top-[103%]">
                {passwordErr}
              </p>
              <FaEye
                onClick={() => {
                  setPasswordEye(!passwordEye);
                }}
                className={`absolute right-5 top-[65%] text-[#868686] text-xl ${
                  passwordEye ? "opacity-100" : "opacity-0"
                }`}
              />
              <FaEyeSlash
                onClick={() => {
                  setPasswordEye(!passwordEye);
                }}
                className={`absolute right-5 top-[65%] text-[#868686]  text-xl ${
                  passwordEye ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div className="w-auto md:w-full mt-4 flex gap-4 items-center">
              <input
                className="appearance-none relative border border-[#CFCFCF] w-6 h-6 rounded-[5px] after:absolute after:w-3 after:h-3 after:top-1/2 after:-translate-x-1/2 after:left-1/2 after:-translate-y-1/2 checked:after:bg-blue-700"
                type="checkbox"
                name=""
                id=""
              />
              <label
                htmlFor=""
                className="font-frank-ruhl-libre text-base md:text-2xl font-medium text-[#868686]"
              >
                I agree to all the &nbsp;
                <Link to="" className="text-[#F59C15]">
                  Terms
                </Link>
                , and &nbsp;
                <Link to="" className="text-[#F59C15]">
                  Privacy policy
                </Link>{" "}
                and{" "}
                <Link to="" className="text-[#F59C15]">
                  Fees.
                </Link>
              </label>
            </div>
            <button
              onClick={manageSubmit}
              className="font-frank-ruhl-libre text-xl md:text-2xl font-medium bg-banner-color rounded-[20px] py-2 md:py-4 mb-5 w-full md:w-[472px] hover:bg-box-color hover:shadow-xl transition-all duration-300"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="right hidden md:block h-[1060px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden">
          <img className="h-full object-cover" src={sign} alt={sign} />
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
