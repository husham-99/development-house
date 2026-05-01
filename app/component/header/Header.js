"use client";
import Image from "next/image";
import Link from "next/link";
import module from "./header.module.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Darkmode from "../darkMode/page";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { BsGooglePlay } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa6";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setAboutDropdown(false);
    setServicesDropdown(false);
    setContactDropdown(false);
  };

  // Close menu + dropdowns
  const closeMenu = () => {
    setToggle(false);
    closeAllDropdowns();
  };

  return (
    <>
      <header className={module.header}>
        <div className="container">
          <nav className={module.navbar}>
            <div className={module.logo}>
              <Link href="/">
                <Image src={logo} alt="logo" width={150} loading="eager" />
              </Link>
            </div>

            <div className={module.menu}>
              <div className={module.themeIcon}>
                <Darkmode />
              </div>

              <div
                onClick={() => {
                  // If closing menu → reset dropdowns
                  if (toggle) closeAllDropdowns();
                  setToggle((prev) => !prev);
                }}
              >
                {toggle ? <IoClose /> : <HiMiniBars3 />}
              </div>
            </div>

            <div
              className={module.navLinksWrapper}
              style={{
                clipPath: toggle
                  ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                  : "",
              }}
            >
              <ul className={module.navLinks}>
                {/* Home */}
                <li>
                  <FaHome className={module.navIcon} />
                  <Link
                    onClick={closeMenu}
                    className={`${module.navLink} ${module.active}`}
                    href="/"
                  >
                    الصفحة الرئيسية
                  </Link>
                </li>

                {/* About Dropdown */}
                <li className={module.dropdown}>
                  <BsGooglePlay className={module.navIcon} />

                  <p
                    className={module.navLink}
                    onClick={() => {
                      setAboutDropdown((prev) => !prev);
                      setServicesDropdown(false);
                      setContactDropdown(false);
                    }}
                  >
                    عن المؤسسة <span className={module.arrow}>▼</span>
                  </p>

                  <div
                    className={`${module.subContent} ${
                      aboutDropdown ? module.active : ""
                    }`}
                  >
                    <div className={module.subDrop}>
                      <ul>
                        <li>
                          <Link href="/about" onClick={closeMenu}>
                            من نحن
                          </Link>
                        </li>
                        <li>
                          <Link href="/CeoMessage" onClick={closeMenu}>
                            كلمة المدير التنفيذي
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/trusteeChairmanMessage"
                            onClick={closeMenu}
                          >
                            كلمة رئيس مجلس الامناء
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Services Dropdown */}
                <li className={module.dropdown}>
                  <FaServicestack className={module.navIcon} />

                  <p
                    className={module.navLink}
                    onClick={() => {
                      setServicesDropdown((prev) => !prev);
                      setAboutDropdown(false);
                      setContactDropdown(false);
                    }}
                  >
                    خدماتنا <span className={module.arrow}>▼</span>
                  </p>

                  <div
                    className={`${module.subContent} ${
                      servicesDropdown ? module.active : ""
                    }`}
                  >
                    <div className={module.subDrop}>
                      <ul>
                        <li>
                          <Link href="/services" onClick={closeMenu}>
                            دائرة الانتاج
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" onClick={closeMenu}>
                            دائرة الصناعات
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" onClick={closeMenu}>
                            دائرة تدوير المخلفات
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" onClick={closeMenu}>
                            دائرة الاعمال الحرفية واليدوية
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" onClick={closeMenu}>
                            دائرة الخدمات
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Media Center */}
                <li>
                  <GrProjects className={module.navIcon} />
                  <Link
                    className={module.navLink}
                    href="/notfound"
                    onClick={closeMenu}
                  >
                    المركز الاعلامي
                  </Link>
                </li>

                {/* Contact Dropdown */}
                <li className={module.dropdown}>
                  <RiContactsFill className={module.navIcon} />

                  <p
                    className={module.navLink}
                    onClick={() => {
                      setContactDropdown((prev) => !prev);
                      setAboutDropdown(false);
                      setServicesDropdown(false);
                    }}
                  >
                    اتصل بنا <span className={module.arrow}>▼</span>
                  </p>

                  <div
                    className={`${module.subContent} ${
                      contactDropdown ? module.active : ""
                    }`}
                  >
                    <div className={module.subDrop}>
                      <ul>
                        <li>
                          <Link href="/callus" onClick={closeMenu}>
                            تفاصيل الاتصال
                          </Link>
                        </li>
                        <li>
                          <Link href="/socialMedia" onClick={closeMenu}>
                            قنوات التواصل الاجتماعي
                          </Link>
                        </li>
                        <li>
                          <Link href="/notfound" onClick={closeMenu}>
                            وظائف شاغرة
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <Image
                  className={module.logo2}
                  src={logo}
                  alt="logo"
                  width={300}
                ></Image>
              </ul>

              <div className={module.themeIcon}>
                <Darkmode />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
