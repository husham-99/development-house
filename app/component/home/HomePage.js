import module from "./homePage.module.css";
import Image from "next/image";
import funding from "../../assets/2.png";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className={module.mainSection}>
        <div>
          <h1>بيت التنمية </h1>
          <p>Development House</p>
          <h2>لدعم وتمويل مشاريع الشباب</h2>
          <h3>To Support and Finance Youth Projects</h3>
          <Link href={"/callus"}>
            <button className={module.btn}>تواصل معنا</button>
          </Link>
        </div>
      </main>
      <section className="container">
        <div className={module.funding}>
          <div className={module.info}>
            <h2>مول مشروعك اليوم او شاركنا لتمويل المشاريع</h2>
            <p>قدم الان</p>
            <h3>
              قم بملئ الاستمارة لعرض مشروعك علي بيت التنمية او استمارة الشركات
            </h3>
            <div className={module.links}>
              <Link className={module.link} href={"/notfound"}>
                استمارة طلب مشروع
              </Link>

              <Link className={module.link} href={"/form"}>
                استمارة الشركات
              </Link>
            </div>
            <Link className={module.readMore} href={"/about"}>
              اقرأ المزيد ...
            </Link>
          </div>
          <div className={module.picture}>
            <Image src={funding} alt="Funding" />
          </div>
        </div>
      </section>
      <section className="container">
        <div className={module.introduction}>
          <h2>من نحن</h2>
          <p>
            بيت التنمية السوداني هي مؤسسة مستقلة تعني بشؤون المشروعات الصغيرة
            والمتوسطة ومتناهية الصغر الموجهة نحو الشباب، لا تسعى لتحقيق الربح
            المالي لكنها تهتم برفع قدراتها المالية، وتعمل وفق الأساليب العلمية
            والعملية الإحترافية لأهداف وغايات برنامج التنمية المستدامة، وعليه
            توفر التمويل بقيم تواكب إحيتاجات المشاريع وبشروط تلائم مقدرات الشباب
            وتسعى لتوفير الأراضي والمرافق وحلول الطاقة وبرامج رفع القدرات
            والإستشارات والتسويق والإسهام في التأثير الإيجابي على صنع القرارات
            والتشريعات التي تساعد على تحقيق أعلى درجات التنافسية لمنتجات الشباب
            في الأسواق المحلية والعالمية، ونتفرد بتقديمنا لدائرة متكاملة لأعمال
            الشباب.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
