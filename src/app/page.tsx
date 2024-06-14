import Image from "next/image";
import Header from "./header";
import { BiRightArrow } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import {
  GoArrowDownRight,
  GoArrowRight,
  GoBook,
  GoHash,
  GoInfinity,
  GoPasskeyFill,
  GoSearch,
  GoVerified
} from "react-icons/go";
import { FaThumbsUp, FaWhatsapp } from "react-icons/fa6";

import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { CiAt, CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { RiFacebookFill, RiLinkedinBoxFill, RiLinkedinFill } from "react-icons/ri";
import { IoGitNetworkOutline } from "react-icons/io5";
import * as React from "react";
import {CSSProperties, useEffect, useState} from "react";

export default function Home() {

  const headerData = [
    {
      name: "خدماتنا",
      link: "link"
    },
    {
      name: "من نحن",
      link: "link"
    },
    {
      name: "السعر",
      link: "link"
    },

    {
      name: "اعمل معنا",
      link: "counselors"
    },
    {
      name: "تواصل معنا",
      link: "connect"
    },
  ]

  const ConnectInput :React.FC<{label:string,placeholder:string,type?:string,onChange:string,containerStyle?:CSSProperties}> = ({label,placeholder,type,containerStyle})=>{
        return (
            <div className={"flex flex-col "} style={containerStyle}  >
                <div className={"flex flex-row-reverse justify-start text-left text-black text-lg font-medium mb-1"} >
                    : {label} 
                </div>
                <div className={"flex flex-row justify-start flex-1"} >
                    <input autoComplete={"off"} autoCorrect={"off"}   type={type}  className={"flex-1 text-left px-5 py-3.5 text-sm font-medium text-left  text-black outline-none rounded-xl bg-slate-100  transition-all ease-in focus:ring-2 focus:ring-slate-200 focus:border  placeholder-slate-600"} placeholder={placeholder} />
                </div>

            </div>
        )
    }

  return (
    <div className="flex flex-col items-center justify-between overflow-auto " >
      <Header navs={headerData} />
      <div className="w-full h-[75vh] flex flex-row justify-center items-center bg-cover bg-center bg-no-repeat relative bg-[url('https://res.cloudinary.com/dqtlhm4to/image/upload/v1718312216/aoawujogxdtodcnyezem.jpg')] mt-[65px]" >
        <div className="bg-gradient-to-br inset-0 from-[rgb(92,85,71)] to-[rgb(4,4,4)] opacity-80 absolute" />
        <div className="w-full lg:w-[1280px] h-full flex flex-col items-center justify-center" >
          <div className="flex-1 flex flex-col z-10 items-center justify-center" >
            <h1 className="text-4xl font-bold flex flex-row">
              <span className="text-[var(--primary-color)]" >Pod</span>
              <div className="text-white flex flex-col mb-2" >
                <span>Brand</span>
                <div className="rounded-full w-4/5 h-[4px] bg-[var(--primary-color)]" >

                </div>
              </div>
            </h1>
          </div>
          <div className="flex-1 flex flex-col" >
            <div className="flex-1 z-10 flex flex-col justify-start align-center text-2xl text-white" >
              ! صوت يجسد رؤيتك
            </div>
            <div className="flex-1 z-10 flex flex-col justify-start align-center" >
              <div className="rounded-full px-10 py-3 text-white cursor-pointer transition-all ease-in-out duration-300 hover:bg-[var(--seconday-color)] bg-[var(--primary-color)] flex flex-row items-center justify-center" >
                Get started
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* --- END SUPER HERO --- */}
      <section id="services" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold flex flex-row justify-center mb-8">

            <div className="text-black flex flex-col mb-2" >
              <span>خدماتنا</span>
              <div className="rounded-full w-4/5 h-[4px] bg-[var(--primary-color)]" >

              </div>
            </div>
          </h2>
          <ul className="text-xl">
            <li className="mb-4 flex flex-row-reverse justify-start items-center ">
              <span className="text-white bg-[var(--primary-color)] text-white rounded-full px-3 py-1 mx-5" > 1 </span>
              اعلانات سمعية
            </li>
            <li className="mb-4 flex flex-row-reverse justify-start items-center ">
              <span className="text-white bg-[var(--primary-color)] text-white rounded-full px-3 py-1 mx-5" > 2 </span>
              بودكاست

            </li>
            <li className="mb-4 flex flex-row-reverse justify-start items-center ">
              <span className="text-white bg-[var(--primary-color)] text-white rounded-full px-3 py-1 mx-5" > 3 </span>
              ادارة حملات التسويق الصوتية
            </li>
            <li className="mb-4 flex flex-row-reverse justify-start items-center ">
              <span className="text-white bg-[var(--primary-color)] text-white rounded-full px-3 py-1 mx-5" > 4 </span>
              تسجيل الرسائل الصوتية
            </li>
            <li className="mb-4 flex flex-row-reverse justify-start items-center ">
              <span className="text-white bg-[var(--primary-color)] text-white rounded-full px-3 py-1 mx-5" > 5 </span>
              الاستشارة و التوجيه في مجال صناعة المحتوى السمعي
            </li>

          </ul>
        </div>
      </section>

      {/* END SERVICES */}
      <section className="py-20 bg-slate-100 w-full" >
        <div className="flex flex-col sm:flex-row-reverse justify-center items-center " >
          <div className="flex-1 flex flex-col items-center justify-center" >
            <h2 className="text-2xl font-bold flex flex-row justify-center mb-8">
              ماذا تحتاج للبدأ معنا ؟
            </h2>
            <h4 className="text-normal font-semibold text-slate-700 flex flex-row justify-center mb-8" >
              قم بتشكيل الملف الشخصي للبدأ
            </h4>
          </div>
          <div className="flex-1 flex flex-col justify-center" >
            <ul className="text-xl">
              <li className="mb-4 flex flex-row justify-end text-left items-center ">

الملف الشخصي 
              </li>
              <li className="mb-4 flex flex-row-reverse justify-start items-center ">

              اسم المؤسسة 
              </li>
              <li className="mb-4 flex flex-row-reverse justify-start items-center ">

              طبيعة النشاط

              </li>
              <li className="mb-4 flex flex-row-reverse justify-start items-center ">

              البريد الإلكتروني
              </li>
              <li className="mb-4 flex flex-row-reverse justify-start items-center ">

              كلمة المرور
              </li>
              

            </ul>
          </div>
        </div>
      </section>

      {/* --- END HOW TO START --- */}
      <section className="py-20 w-full flex flex-row justify-center" >
        <div className="p-12 min-w-[400px] rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center" >
          <div
            className={"flex flex-row text-left justify-start text-[#07111D] font-semibold mb-8 text-xl md:text-2xl "}>
            تواصل معنا
          </div>

          <div className={"flex flex-row mb-5 select-none cursor-pointer"}>
            <div className={"flex flex-col px-6 py-4 rounded-2xl bg-slate-100"}>
              <div className="flex mb-3 flex-row items-center justify-start text-slate-800  font-medium" >
                <SiGmail className={"transition ease-in text-black  hover:text-blue-500 text-xl mx-3"} />
                podbrand27@gmail.com
              </div>
              <div className="flex mb-3 flex-row items-center justify-start text-slate-800 font-medium" >
                <RiFacebookFill className={"transition ease-in text-black hover:text-blue-500 text-xl mx-3"} />
                podbrand
              </div>
              <div className="flex mb-3 flex-row items-center justify-start text-slate-800 font-medium" >
                <FaWhatsapp className={"transition ease-in text-black  hover:text-blue-500 text-xl mx-3"} />
                0656784977
              </div>
              <div className="flex mb-3 flex-row items-center justify-start text-slate-800 font-medium" >
                <CiAt className={"transition ease-in text-black  hover:text-blue-500 text-xl mx-3"} />
                0794481501
              </div>
              <div className="flex mb-3 flex-row items-center justify-start text-slate-800 font-medium" >
                <LuMapPin className={"transition ease-in text-black  hover:text-blue-500 text-xl mx-3"} />
                salamandre- Mostaganem
              </div>


              
            </div>
          </div>
          <div className={"flex flex-row mb-5"}>
            <div className={"h-[3px] w-3/5 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]"} />
          </div>
          <div className={"flex flex-row justify-start"}>
            <button
              className={"flex flex-row rounded-full px-8 py-3 bg-black text-white text-[14px] font-medium transition ease-in  hover:bg-indigo-500 hover:text-white focus:ring focus:right-2 focus:ring-indigo-300 focus:bg-indigo-500 focus:text-white cursor-pointer "}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* --- END CONTACT US --- */}
              <div className={"w-full select-none "}>
            <div
                className={"relative w-full xl:h-screen mb-20  xl:mb-0 flex  flex-row justify-center bg-cover bg-no-repeat "} >
                <div className={"absolute bg-slate-50 z-[1] bg-opacity-75 inset-0"} >

                </div>
                <div className={"absolute inset-0 z-[2] bg-no-repeat bg-cover  bg-[url('https://res.cloudinary.com/dqtlhm4to/image/upload/v1718392570/wfo4uvfgvircnkrplwkw.svg')]"} >

                </div>
                <div className={"z-30 w-[1280px] flex flex-col pt-0 md:pt-24 xl:pt-0 pb-0 md:pb-24 xl:pb-0 md:flex-row"}>
                    <div className={"md:flex-1 ms-10 md:ms-0 mb-16 md:mb-0 flex flex-col pt-16 ps-10 xl:ps-0 md:pt-28"}>
                        <div className={"flex flex-row justify-start text-left text-white font-semibold text-3xl xl:text-4xl mb-10"} >
                            
                        </div>
                        
                    </div>
                    <div className={"md:flex-1  md:flex flex-col justify-center " }>
                        <div className={"flex  flex-row justify-center md:px-16"} >
                            <div className={"md:rounded-2xl md:shadow-lg w-full flex flex-col px-10 py-10 md:pb-14 bg-white flex-1"}>

                                <div
                                    className={"flex flex-row-reverse justify-start text-left text-black font-semibold text-2xl md:mb-10"}>
                                    الملف الشخصي
                                </div>
                                <ConnectInput label={"الايميل"} placeholder={"example@gmail.com"} type={"email"} onChange={""} containerStyle={{marginBottom:16,paddingRight:40}}  />
                                <div className={"flex flex-col md:flex-row md:space-x-4 md:me-10 "} >
                                    <ConnectInput label={"اسم المؤسسة"} placeholder={"PodBrand"} onChange={""} type={"text"} containerStyle={{marginBottom:16}} />
                                    <ConnectInput label={"نوع النشاط التجاري"} placeholder={"E-commerce"} onChange={""}  type={"text"} containerStyle={{marginBottom:16}} />
                                </div>
                                <ConnectInput label={"كلمة السر"} placeholder={"password"} type={"password"} onChange={""} containerStyle={{marginBottom:16,paddingRight:40}}  />
                                
                                <div className={"flex flex-row mt-3 justify-end"}>
                                    <button
                                        className={"flex flex-row rounded-full px-8 py-3 bg-black text-white text-[14px] font-medium transition ease-in  hover:bg-indigo-500 hover:text-white focus:ring focus:right-2 focus:ring-indigo-300 focus:bg-indigo-500 focus:text-white cursor-pointer "}>
                                        ارسل 
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      { /* --- FOOTER --- */}
      <div className={" flex bg-black flex-row justify-center w-full align-middle select-none"} >
            <div className={"ps-4 xl:max-w-[1280px] w-full flex flex-col xl:px-3 pt-20 border-slate-200 pb-3  md:px-0"}>
                <div className={"flex flex-col ps-3 md:p-0 justify-center md:flex-row"}>

                    {/* --- left footer start --- */}
                    <div className={"flex-1 flex flex-col ps-10"}>
                        <div className={"flex flex-row mb-5"}>
                            
                            <img height={50} src="https://res.cloudinary.com/dqtlhm4to/image/upload/v1718314738/fre5teegghvhzqbj1sce.png" className="w-[44px] xl:w-[44px] h-[32px] me-4 xl:me-6 bg-cover bg-no-repeat  "/>
                            
                            <div className={"text-2xl font-semibold text-white"}>
                                PodBrand
                            </div>
                        </div>
                        <div className={"text-[16px] w-full lg:w-1/2 text-slate-200 font-semibold justify-start flex flex-row leading-8 mb-7"} >
                        مؤسسة متخصصة في صناعة المحتوى السمعي التجاري
                        </div>
                        <div className={"flex flex-row justify-start mb-4 cursor-pointer"} >
                            <FaLinkedin className={"w-[28px] h-[28px] me-5 transition ease-in text-white hover:text-blue-500 "} />
                            <FaTwitterSquare className={"w-[28px] h-[28px] me-5 transition ease-in text-white hover:text-blue-500 "} />
                            <FaFacebookSquare className={"w-[28px] h-[28px] me-5 transition ease-in text-white hover:text-blue-500 "} />
                        </div>
                        
                        <div className={"mb-7"}>

                        </div>
                    </div>

                    {/* --- left footer end --- */}
                    {/* --- right footer start --- */}
                    <div className={"flex-1 flex flex-col "}>
                        <div className={"flex flex-row"}>
                            <div className={"flex-1 flex flex-col"}>
                                <div className={"text-white text-[16px] md:text-xl font-semibold mb-5"}>
                                    Company
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Home
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    About us
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Careers
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Press
                                </div>
                            </div>
                            <div className={"flex-1 flex flex-col"}>
                                <div className={"text-white text-[16px] md:text-xl font-semibold mb-5"}>
                                    Product
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Changelog
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Integration
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    In Action
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Status
                                </div>
                            </div>
                            <div className={"flex-1 flex flex-col"}>
                                <div className={"text-white text-[16px] md:text-xl font-semibold mb-5"}>
                                    Resources
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Privacy Policy
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Security
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Tutorials
                                </div>
                                <div className={"text-slate-100 text-sm md:text-[16px] font-medium mb-2.5"}>
                                    Contact us
                                </div>
                            </div>
                        </div>
                        <div className={"mb-5"}>

                        </div>
                    </div>
                </div>
                
                { /* --- Appendix Footer --- */}
                <div className={"w-full flex flex-col md:flex-row border-t-2 border-slate-200 py-5"}>
                    <div className={"text-2xl font-semibold text-white text-center md:text-left"}>
                        PodBrand
                    </div>
                    <div className={"flex-1"}>

                    </div>
                    <div className={"flex flex-col-reverse mt-2 md:mt-0 md:flex-1 md:flex-row"} >

                        <div
                            className={"text-slate-100 mt-6 md:mt-0 text-sm font-normal text-center mx-4 justify-center align-middle flex flex-col"}>
                            @ Copyrights , all rights reserved for 2024
                        </div>
                        <div className={"flex flex-row mt-6 md:mt-0 "} >
                            <div
                                className={"text-white flex-1 text-center text-lg font-semibold mx-2 justify-center align-middle flex flex-col cursor-pointer transition ease-in  hover:text-blue-500"}>
                                Privacy
                            </div>
                            <div className={"text-white flex-1 text-center text-lg font-semibold mx-2 justify-center align-middle flex flex-col cursor-pointer transition ease-in  hover:text-blue-500"}>
                                Terms
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
