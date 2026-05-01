import module from "./socialMedia.module.css";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="container">
      <main className={module.main}>
        <h1>قنوات التواصل الاجتماعي</h1>
        <div className={module.social}>
          <Link
            href={"https://www.facebook.com/dh4sudan?mibextid=ZbWKwL"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={module.item}>
              <FaFacebookSquare
                style={{ color: "#1877f2" }}
                className={module.icon}
              />
              <h2>صفحة الفيسبوك</h2>
            </div>
          </Link>
          <Link
            href={
              "https://www.instagram.com/accounts/login/?next=%2Fbaytaltanmeya&source=omni_redirect"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={module.item}>
              <FaInstagramSquare
                style={{ color: "#f77737" }}
                className={module.icon}
              />
              <h2>صفحة الانستقرام</h2>
            </div>
          </Link>
          <Link
            href={"https://x.com/BaytAltanmeya"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={module.item}>
              <FaSquareXTwitter
                style={{ color: "#000000" }}
                className={module.icon}
              />
              <h2>صفحة التويتر</h2>
            </div>
          </Link>
          <Link
            href={"https://www.youtube.com/@BaytAltanmeya"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={module.item}>
              <FaYoutube className={module.icon} style={{ color: "#ff0000" }} />
              <h2>صفحة اليوتيوب</h2>
            </div>
          </Link>
          <Link
            href={"https://t.me/baytaltanmeya"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={module.item}>
              <FaTelegram
                style={{ color: "#24a1de" }}
                className={module.icon}
              />
              <h2>صفحة التليقرام</h2>
            </div>
          </Link>
          <Link
            href={"https://www.tiktok.com/@bayt.altanmeya?_t=8k8ANF3QpOg&_r=1"}
          >
            <div className={module.item}>
              <FaTiktok style={{ color: "#fe2c55" }} className={module.icon} />
              <h2>صفحة التيكتوك</h2>
            </div>
          </Link>
        </div>
      </main>
      <div className={module.heigh}></div>
    </section>
  );
};

export default SocialMedia;
