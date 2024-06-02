import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiMenu, FiStar } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {SwimSection} from '../components/SwimSection';
import {Modal} from '../components/Modal';

import { Avatar } from "components/Avatar";
import logo from '../assets/images/Logo.png';
import {
  IconAparment,
  IconBath,
  IconBed,
  IconCall,
  IconChevronRight,
  IconColorBlur1,
  IconEmail,
  IconLogo,
  IconFloor,
  IconGarage,
  IconHouse,
  IconMap,
  IconVilla,
} from "assets/icons";
import styled from "styled-components";
import { hideScroll } from "styles/ui";
import { Card, TCard } from "components/Card";
import { featuredHouse, testimonials, tipsAndTricks } from "lib/data";
import classNames from "classnames";
import Head from "next/head";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [filterFeaturedHouse, setFilterFeaturedHouse] = useState<TCard>("HOUSE");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const router = useRouter();
  const locationsInAccra = [
    'Accra Mall',
    'Labadi Beach',
    'Kwame Nkrumah Mausoleum',
    'Osu Castle',
    'Independence Square',
    'Jamestown Lighthouse',
    'Makola Market',
    'W.E.B. Du Bois Center',
  ];
  
  const handleSearch = () => {
    if (selectedLocation) {
      router.push('/register');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = locationsInAccra.filter(location =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
      setSelectedLocation(''); // Reset selected location if typing
    } else {
      setFilteredLocations([]);
      setSelectedLocation(''); // Reset selected location if input is cleared
    }
  };

  const handleLocationSelect = (location) => {
    setSearchTerm(location);
    setSelectedLocation(location);
    setFilteredLocations([]);
  };

  return (
    <>
      <Head>
        <title>TurtleSwim</title>
      </Head>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <section className="relative w-full max-w-[79rem] mx-auto h-full lg:max-h-[45rem] grid grid-cols-1 items-end justify-items-center lg:justify-items-end lg:grid-cols-[auto_minmax(37.5rem,45rem)] px-[1rem] py-[7.5rem] lg:py-0 xs:px-[1.5rem] lg:px-[2rem]">
          <div className="absolute -top-[10.125rem] -left-[10.8125rem] -z-[1]">
            <IconColorBlur1 />
          </div>
          <div className="w-full max-w-[31.25rem] lg:max-w-[31.125rem] lg:mb-[3.75rem] lg:flex flex-col order-2 md:order-none">
            <h1
              className="font-semibold text-[1.5rem] xs:text-[1.875rem] xl:text-[2.5rem] xl:leading-[3.125rem] text-center lg:text-left text-bluedark"
              style={{ textShadow: "-1px 0 #1B1C57, 0 1px #1B1C57, 1px 0 #1B1C57, 0 -1px #1B1C57" }}
            >
              Find The Place To <br className="hidden lg:inline-block" />
              Learn Your Swim {" "}
              <span
                className="text-white"
                style={{
                  textShadow: "-1px 0 #1B1C57, 0 1px #1B1C57, 1px 0 #1B1C57, 0 -1px #1B1C57",
                }}
              >
                Lessons 
              </span>
              <br className="hidden lg:inline-block" /> Easily Here
            </h1>
            <p className="font-normal text-[0.875rem] xs:text-[1rem] text-[#626687] text-center lg:text-left leading-[1.75rem] mt-[1.5rem] mb-[2rem]">
            Everything you need about finding your place near you here in Accra, where it will be easier for you
            </p>
            <div className="relative w-full h-[3.5rem] flex items-center gap-[1rem] border border-[#E0E3EB] rounded-[2rem] pl-[1.5rem] pr-[0.25rem]">
      <div>
        <IconMap className="fill-orange" />
      </div>
      <input
        type="text"
        className="w-full h-full outline-none appearance-none font-medium text-[0.875rem] text-gray placeholder:font-medium placeholder:text-[0.875rem] placeholder:text-gray"
        placeholder="Search for the location you want!"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div
        className={`flex items-center gap-[0.25rem] ${selectedLocation ? 'bg-green500 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} font-semibold text-[0.875rem] text-white px-[1rem] py-[0.75rem] rounded-[2rem]`}
        onClick={handleSearch}
      >
        Search
        <IconChevronRight className="fill-white" />
      </div>
      {searchTerm && filteredLocations.length === 0 && (
        <div className="absolute top-[4rem] left-0 w-full bg-white border border-[#E0E3EB] rounded-[0.5rem] shadow-lg">
          <div className="px-[1rem] py-[0.5rem] text-red-500">Location not available</div>
        </div>
      )}
      {searchTerm && filteredLocations.length > 0 && (
        <div className="absolute top-[4rem] left-0 w-full bg-white border border-[#E0E3EB] rounded-[0.5rem] shadow-lg">
          <ul>
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                className="px-[1rem] py-[0.5rem] hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
            <div className="w-full flex flex-col items-center lg:items-start mt-[4rem] lg:mt-[2rem]">
              <h3 className="text-gray leading-[2rem]">Our Partnership </h3>
              <div className="flex items-center gap-[2rem]">
                <Image src={require("assets/images/partnership/traveloka_logo 5 (1).png")} />
                <Image src={require("assets/images/partnership/traveloka_logo 3 (1).png")} />
               
              </div>
            </div>
          </div>
          <div className="hidden lg:flex relative w-full h-full lg:max-w-[45rem] -mr-[6.25rem] overflow-hidden">
            <div className="relative">
              <Image className="" src={require("assets/section-main.png")} />
            </div>
            <div className="absolute left-0 bottom-[0.375rem] w-full grid grid-cols-[20.5rem_12.625rem_20rem] grid-flow-col gap-[1rem] p-[3rem] pt-0 rounded-bl-[5rem]">
              <div className="bg-white flex items-center gap-[1rem] p-[1.5rem] rounded-[2rem]">
                <div className="flex flex-row flex-nowrap items-center">
                  <Avatar
                    src=""
                    bordered
                  />
                  <Avatar
                    src=""
                    className="-ml-[1.75rem] z-[1]"
                    bordered
                  />
                  <Avatar
                    src=""
                    className="-ml-[1.75rem] z-[2]"
                    bordered
                  />
                </div>
                <div className="flex flex-col gap-[0.125rem]">
                  <h1 className="font-semibold text-bluedark leading-[1.5rem]">1K+ People</h1>
                  <p className="font-normal text-[0.75rem] text-[#68799F]">
                    Successfully Getting Swimming
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-center gap-[1rem] p-[1.5rem] rounded-[2rem]">
                <div className="w-[3.5rem] h-[3.5rem] rounded-[1.5rem] overflow-hidden">
                  <Image
                    width={600}
                    height={600}
                    src=""
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="flex flex-col gap-[0.125rem]">
                  <h1 className="font-semibold text-bluedark leading-[1.5rem]">10 Students</h1>
                  <p className="font-normal text-[0.75rem] text-[#68799F]">trained Monthly</p>
                </div>
              </div>
              <div className="bg-white flex items-center gap-[1rem] p-[1.5rem] rounded-[2rem]">
                <Avatar src="" />
                <div className="flex flex-col gap-[0.125rem]">
                  <h1 className="font-semibold text-bluedark leading-[1.5rem]">4K+</h1>
                  <p className="font-normal text-[0.75rem] text-[#68799F]">
                    People Looking for New Homes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute top-0 w-full h-[5rem] max-w-[79rem] mx-auto flex justify-between items-center px-[1rem] xs:px-[1.5rem] lg:px-[2rem]">
            <Link href="/">
              <a>
              <Image src={logo} width="150" height="150"/>
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-[1.5rem] lg:gap-[3.5rem]">
              <ul className="flex items-center lg:gap-[1.5rem]">
                <li>
                  <a
                    href="#"
                    className="bg-white bg-opacity-15 border border-white border-opacity-35 font-semibold text-[0.875rem] text-bluedark lg:text-white py-[0.5rem] px-[1rem] rounded-[2rem]"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/contruction"
                    className="bg-white bg-opacity-15 border border-white border-opacity-35 font-semibold text-[0.875rem] text-bluedark lg:text-white py-[0.5rem] px-[1rem] rounded-[2rem]"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#lessons"
                    className="bg-white bg-opacity-15 border border-white border-opacity-35 font-semibold text-[0.875rem] text-bluedark lg:text-white py-[0.5rem] px-[1rem] rounded-[2rem]"
                  >
                    Lessons
                  </a>
                </li>
              </ul>
              <button  className="bg-green100 font-semibold text-[0.875rem] text-green700 py-[0.75rem] px-[1.5rem] rounded-[2rem]">
                <a href="/register">
Register
                </a>
                

              </button>
            </div>
            <div className="grid md:hidden w-[2rem] h-[2rem] place-items-center cursor-pointers">
              <FiMenu size={24} />
            </div>
          </header>
        </section>
        <section id="lessons" className="w-full max-w-[79rem] mx-auto flex flex-col gap-[2.5rem] px-[1rem] pt-0 lg:pt-[7.5rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-[1rem] md:gap-0">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-[0.5rem]">
                <span className="hidden xs:block w-[2rem] h-[0.0625rem] bg-orange"></span>
                <h6 className="font-medium text-[0.875rem] text-orange">Our Recommendation</h6>
              </div>
              <h1 className="font-semibold text-[2rem] text-bluedark xs:pl-[2.5rem]">
                Featured Swim Classes
              </h1>
            </div>

            <div className="flex flex-row flex-wrap items-center gap-[1rem] xs:pl-[2.5rem] lg:pl-0">
              <div
                className={classNames(
                  "group hover:bg-green100 hover:border-green100 hover:text-green500 border flex items-center gap-[0.5rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem] cursor-pointer",
                  { "bg-green100 border-green100 text-green500": filterFeaturedHouse === "HOUSE" },
                  { "border-[#E0E3EB] text-gray": filterFeaturedHouse !== "HOUSE" }
                )}
                onClick={() => setFilterFeaturedHouse("HOUSE")}
              >
                <IconHouse
                  className={filterFeaturedHouse === "HOUSE" ? "fill-green500" : "fill-gray"}
                />{" "}
                Centre
              </div>
              <div 
                className={classNames(
                  "group hover:bg-green100 hover:border-green100 hover:text-green500 border flex items-center gap-[0.5rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem] cursor-pointer",
                  { "bg-green100 border-green100 text-green500": filterFeaturedHouse === "VILLA" },
                  { "border-[#E0E3EB] text-gray": filterFeaturedHouse !== "VILLA" }
                )}
                onClick={() => setFilterFeaturedHouse("VILLA")}
              >
                <IconVilla
                  className={
                    filterFeaturedHouse === "VILLA"
                      ? "fill-green500"
                      : "fill-gray group-hover:fill-green500"
                  }
                />{" "}
                Villa
              </div>
              <div
                className={classNames(
                  "group hover:bg-green100 hover:border-green100 hover:text-green500 border flex items-center gap-[0.5rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem] cursor-pointer",
                  {
                    "bg-green100 border-green100 text-green500": filterFeaturedHouse === "APARMENT",
                  },
                  { "border-[#E0E3EB] text-gray": filterFeaturedHouse !== "APARMENT" }
                )}
                onClick={() => setFilterFeaturedHouse("APARMENT")}
              >
                <IconAparment
                  className={
                    filterFeaturedHouse === "APARMENT"
                      ? "fill-green500"
                      : "fill-gray group-hover:fill-green500"
                  }
                />{" "}
                School
              </div>
            </div>
          </div>
          
          <div className="w-full overflow-hidden xs:pl-[2.5rem]">
  <Slider className="w-full grid grid-cols-[minmax(15.625rem,21.25rem)] xs:grid-cols-[repeat(auto-fill,21.25rem)] auto-cols-[minmax(15.625rem,21.25rem)] xs:auto-cols-[21.25rem] grid-flow-col gap-[1.5rem] xs:gap-[2.5rem] snap-mandatory snap-x overflow-x-auto">
    {featuredHouse
      .filter((d) => d.type === filterFeaturedHouse)
      .map(({ image, type, status, name, price, owner }, i) => (
        <Link href="/product" key={i}>
          <a>
            <Card
              image={image}
              type={type}
              status={status}
              name={name}
              price={price}
              owner={owner}
            />
          </a>
        </Link>
      ))}
  </Slider>
</div>
        </section>
        <section>
        <SwimSection />
        </section>
        <section className="relative w-full max-w-[79rem] mx-auto grid md:grid-cols-[auto_minmax(150px,600px)] gap-[3.125rem] items-center justify-between px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
          <div className="absolute -top-[200px] -right-[200px] w-[553px] h-[560px] -z-[1]">
            <Image width={553} height={560} src={require("assets/images/blur2.png")} />
          </div>
          <div className="w-full md:max-w-[32.75rem] flex flex-col items-center gap-[1rem] xs:gap-[2rem]">
            <div className="flex flex-col items-center gap-[1rem]">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-[0.5rem]">
                  <span className="hidden xs:block w-[2rem] h-[0.0625rem] bg-orange"></span>
                  <h6 className="font-medium text-[0.875rem] text-orange">Why choose TurtleSwim swim Lessons</h6>
                </div>
                <h1 className="font-semibold text-[2rem] text-bluedark xs:pl-[2.5rem] mt-[0.75rem] mb-[1rem]">
                Let’s tour On what we offer!
                </h1>
                <p className="font-normal text-[1rem] text-[#626687] leading-[1.75rem] xs:pl-[2.5rem]">
                Turtle Swim School offers premier swimming lessons for kids aged 4 months to 13 years and adults , making learning enjoyable through play-based methods in a safe environment, utilizing state-of-the-art facilities.
                </p>
              </div>
              <div className="w-full flex flex-col gap-[1rem] xs:pl-[2.5rem]">
                <h3 className="font-semibold text-[1rem] text-bluedark leading-[1.75rem]">
                  Detail
                </h3>
                <div className="grid xs:grid-cols-2 gap-y-[0.5rem] xs:gap-y-[1rem] gap-x-[3.125rem]">
                  <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                    <IconFloor className="fill-gray" />3:1 student-to-teacher ratio
                  </div>
                  <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                    <IconFloor className="fill-gray" />Flexible class times
                  </div>
                  <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                    <IconFloor className="fill-gray" />1 Confidence-Building curricu
                  </div>
                  <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                    <IconFloor className="fill-gray" />Safety Skills
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[27.5rem] h-[0.125rem] bg-[#F0F3FD] xs:pl-[2.5rem]"></div>

            <div className="w-full flex flex-col xs:flex-row justify-start xs:items-center gap-[1.5rem] xs:pl-[2.5rem]">
              <div className="flex flex-row justify-center xs:justify-between items-center gap-[1.5rem]">
                <Avatar src="" />
                <div className="flex flex-col gap-[0.25rem] whitespace-nowrap">
                  <h1 className="font-medium text-[1.125rem] text-bluedark leading-[1.5rem]">
                    Coach Wales
                  </h1>
                  <h3 className="font-medium text-[1rem] text-gray leading-[1.5rem]">
                    Manager
                  </h3>
                </div>
              </div>
              
      <div
        className="bg-green500 flex flex-row flex-wrap items-center justify-center gap-[1rem] px-[1rem] py-[0.75rem] rounded-[2rem] whitespace-nowrap cursor-pointer"
        onClick={openModal}
      >
        <IconCall className="fill-white" />
        <span className="flex xs:hidden lg:flex font-semibold text-[0.875rem] text-white">
          Contact Now
        </span>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green500 hover:bg-green700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={closeModal}
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
   
            </div>
          </div>
          <div className="flex">
            <Image src={require("assets/images/section-video.png")} />
          </div>
        </section>
        <section className="w-full max-w-[79rem] mx-auto flex flex-col items-center gap-[2.5rem] px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem] overflow-hidden">
          <div className="flex flex-col gap-[0.75rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <span className="w-[2rem] h-[0.0625rem] bg-orange"></span>
              <h6 className="font-medium text-[0.875rem] text-orange">See Our Review</h6>
            </div>
            <h1 className="font-semibold text-[2rem] text-bluedark text-center xs:pl-[2.5rem]">
              What Our User Say About Us
            </h1>
          </div>
          <TestimonialScroll className="w-full flex flex-col md:flex-row flex-nowrap items-center gap-[2rem] snap-mandatory snap-x overflow-x-auto">
            {testimonials.map(({ image, title, description, user }, i) => (
              <div
                key={i}
                className="relative w-full md:min-w-[450px] md:max-w-[600px] snap-start overflow-hidden p-[0.5rem] md:p-0 md:pb-[7.5rem]"
              >
                
                <div className="md:absolute md:bottom-[1rem] md:left-[50%] md:-translate-x-1/2 md:w-[90%] bg-white flex flex-col gap-[1.5rem] shadow-testimonial p-[1rem] xs:p-[2rem] rounded-[1rem] overflow-hidden">
                  <div className="flex flex-col gap-[1rem]">
                    <h1 className="font-semibold text-[1rem] text-bluedark text-center md:text-left">
                      Nothing Here
                    </h1>
                    <p className="font-normal text-[0.875rem] text-gray leading-[1.5rem] text-center md:text-left">
                      Nothing here
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </TestimonialScroll>
        </section>
        
        <section className="w-full max-w-[79rem] mx-auto flex flex-col items-center gap-[2.5rem] px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
          <div className="w-full flex justify-center relative">
            <div className="hidden md:block ">
              <Image className="rounded-[2rem]" src={require("assets/images/newsletter.png")} />
            </div>
            <div className="md:absolute md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-[496px] flex flex-col items-center gap-[2rem]">
              <h1 className="font-semibold text-[1.5rem] lg:text-[2rem] text-greendark text-center capitalize lg:leading-[3rem]">
              Subscribe For Events, Competitions
and update from TurtleSwim
              </h1>
              <div className="w-full grid grid-cols-[1fr] xs:grid-cols-[auto_1fr_auto] gap-[1rem] items-center bg-white xs:border border-[#ddd] rounded-[2rem] xs:pl-[1.5rem] pr-[0.25rem] py-[0.25rem]">
                <IconEmail className="hidden xs:block fill-blue700" />
                <input
                  type="email"
                  placeholder="Your email here"
                  className="appearance-none outline-0 w-full h-[2.8125rem] xs:h-full border border-[#ddd] xs:border-none font-medium text-[0.875rem] text-gray placeholder:font-medium placeholder:text-[0.875rem] placeholder:text-gray rounded-[2rem] pl-[0.875rem] xs:pl-0"
                />
                <button className="appearance-none outline-none bg-green500 font-semibold text-[0.875rem] text-white px-[1rem] py-[0.75rem] rounded-[2rem] whitespace-nowrap">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative w-full max-w-[79rem] mx-auto grid grid-cols-1 md:grid-cols-[auto_auto_auto] lg:grid-cols-[minmax(300px,320px)_auto_auto_auto] justify-items-center gap-[80px] px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
          <div className="absolute -bottom-[150px] -right-[250px] w-[740px] h-[503px] -z-[1]">
            <Image width={740} height={503} src={require("assets/images/blur4.png")} />
          </div>
          <div className="w-full max-w-[400px] lg:max-w-none flex flex-col items-center lg:items-start md:col-span-3 lg:col-span-1">
          <Image src={logo} width="150" height="150"/>
            <h3 className="font-normal text-[0.875rem] text-gray text-center lg:text-left leading-[1.5rem] mt-[1rem] mb-[1.5rem]">
            We provide swimming lessons for children and adults
            </h3>
            <div className="flex items-center gap-[1.5rem]">
              <FaFacebookF size={32} className="fill-[#3C4563]" />
              <FaTwitter size={32} className="fill-[#3C4563]" />
              <FaInstagram size={32} className="fill-[#3C4563]" />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-[1.5rem]">
            <h1 className="font-semibold text-[1.125rem] text-bluedark text-center lg:text-left">
              Property
            </h1>
            <div className="flex flex-col gap-[1.125rem]">
              <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                Centre
              </span>
              <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                School
              </span>
              <a>
                <Link href="#lessons" passHref>
                <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                Villa
              </span>
              </Link>
              </a>
              

              
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-[1.5rem]">
            <h1 className="font-semibold text-[1.125rem] text-bluedark text-center lg:text-left">
              Company
            </h1>
            <div className="flex flex-col gap-[1.125rem]">
              <a href="/contruction">
                <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                  Shop
              </span>
              </a>
              
              <a href="/contruction">
                 <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                Career
              </span>
              </a>
              <a href="/contruction">
                <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                About
              </span>
              </a>
              <a href="/contruction">
                <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                Tips & Tricks
              </span>
              </a>
              
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-[1.5rem]">
            <h1 className="font-semibold text-[1.125rem] text-bluedark text-center lg:text-left">
              Contact
            </h1>
            <div className="flex flex-col gap-[1.125rem]">
              <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
                Accra, Ghana
              </span>
              <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
              (671) 555-0110
              </span>
              <span className="font-normal text-[0.875rem] text-gray text-center lg:text-left">
              turtleswim@gmail.com
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

const Slider = styled.div`
  ${hideScroll}
`;

const TestimonialScroll = styled.div`
  ${hideScroll}
`;

export default Home;
