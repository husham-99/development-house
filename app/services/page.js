import Image from "next/image";
import module from "./services.module.css";
import construction from "../assets/construction.jpg";
// accordion import
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Services = () => {
  return (
    <section className="container">
      <main className={module.services}>
        <div className={module.info}>
          <Accordion className={module.accordion} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className={module.title} component="span">
                دائرة الانتاج
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  يقدم بيت التنمية فرص التمويل الميسر والمعدات والأليات والأراضي
                  وبرامج الإدارة الرقمية وكل معينات الإنتاج للشباب، للعمل في
                  وحدات إنتاجية صغيرة ومتوسطة يتم فيها الإشراف والمتابعة
                  والمراقبة من قبل فريق إستشاري وإداري متخصص لضمان الجودة
                  والنجاح.
                </h2>
                <ul>
                  <li>
                    الزرعة: الزراعة الرقمية، زراعة على الأراضي المكشوفة، الزراعة
                    المائية والبيوت المحمية، زراعة الغابات، المشاتل، أنظمة الري
                    الحديثة.
                  </li>
                  <li>
                    الإنتاج الحيواني: تسمين المواشي، إنتاج الألبان، تصدير
                    المواشي الحية واللحوم.
                  </li>
                  <li>إنتاج العسل.</li>
                  <li>إنتاج الدواجن.</li>
                  <li>صيد الأسماك والإستزراع السمكي.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={module.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className={module.title} component="span">
                دائرة الصناعات
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  الصناعة هي أساس التقدم والرفاهية وهي الدافع لزيادة الإنتاج
                  وإنتعاش سوق الخدمات، وعليه نحن نهيئ الظروف ونحسن البيئة من أجل
                  تمليك الشباب وحدات صناعية صغيرة ومتوسطة قائمة على إستغلال
                  الإنتاج الموجه وتتمتع بتشبيك في ما بينها بنظام الإدارة الذكية
                </h2>
                <ul>
                  <li>صناعة المواد الغذائية</li>
                  <li>صناعة الأعلاف والأدوية البيطرية</li>
                  <li>صناعة المواد الكيميائية مثل المنظفات والصابون..إلخ</li>
                  <li>صناعة المستهلكات الطبية</li>
                  <li>صناعة المعدات والأليات</li>
                  <li>صناعة معدات الطاقة</li>
                  <li>صناعة مستلزمات الأطفال</li>
                  <li>الصناعات المبتكرة</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={module.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className={module.title} component="span">
                دائرة تدوير المخلفات
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  نعمل على الأسهام في الحفاظ على البيئة والحد من الأضرار التي
                  تلحقها المخلفات من تلوث للهواء والتربة والمياه والطبيعة وإرهاق
                  خزينة الدولة لجمعها والتخلص منها عبر تقديم الحلول الذكية
                  والمبتكرة للشباب لتحويل تلك المخلفات إلى مصدر لتحقيق الأرباح
                  والفوائد للمجتمع.
                </h2>
                <ul>
                  <li>تدوير مخلفات الأخشاب والأشجار والورق والكرتون.</li>
                  <li>تدوير مخلفات البلاستيك.</li>
                  <li>تدوير مخلفات الأطعمة والحيوانات.</li>
                  <li>تدوير مخلفات المواد الصلبة والسائلة والإلكترونية.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={module.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className={module.title} component="span">
                دائرة الاعمال الحرفية واليدوية
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  إننا نعمل على توجيه طاقات الشباب ومهاراتهم نحو دائرة الإبداع
                  والفنون والجمال من خلال الأعمال الحرفية واليدوية والتي تعتبر
                  من أغلى المنتجات في سوق الإستهلاك.
                </h2>
                <ul>
                  <li>
                    أعمال التطريز والخياطة والتفصيل والكروشيه وتصميم الأزياء.
                  </li>
                  <li>أعمال صناعة السجاد والمفروشات.</li>
                  <li>المشغولات والصناعات الجلدية.</li>
                  <li>أعمال صناعة الفخار والخزف.</li>
                  <li>أعمال التحف والهدايا والإكسسوارات.</li>
                  <li>أعمال النجارة والأخشاب وصناعة الأثاثات.</li>
                  <li>أعمال الديكور الداخلي والنقاشة.</li>
                  <li>أعمال الميكانيكا والحدادة والسباكة وغيرها.</li>
                  <li>أعمال التعبئة والتغليف.</li>
                  <li>تركيب العطور ومستحضرات التجميل.</li>
                  <li>أعمال الفنون التشكيلية.</li>
                  <li>أعمال الأحجار الكريمة والفضة وغيرها.</li>
                  <li>الأعمال المهنية والفنية والتقنية.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={module.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className={module.title} component="span">
                دائرة الخدمات
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  إن إنتعاش سوق الخدمات مرتبط بمدى إرتفاع مؤشر الإنتاج والصناعة،
                  وعليه نعمل على تطوير مهارات الشباب وتذليل العقبات أمامهم لولوج
                  هذه المشاريع.
                </h2>
                <ul>
                  <li>إنشاء المقاهي والمطاعم والمخابز.</li>
                  <li>إنشاء شركات الشحن والتخليص والتسويق.</li>
                  <li>إنشاء شركات السياحة والصيد.</li>
                  <li>أعمال التكنولوجيا والبرمجيات والتصميم.</li>
                  <li>تأسيس المستشفيات والمراكز الصحية والصيدليات.</li>
                  <li>كل ما يتعلق بخدمات الإنتاج والصناعة والمجتمع.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={module.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className={module.title} component="span">
                الدائرة الاجتماعية
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  أفضل مفتاح يساعد على تغيير المجتمع من مجتمع مستهلك إلى منتج
                  وإيجابي وفعال هي الثقافة والفنون وإثراء روح الإبداع والإبتكار
                  وشغف التحدي والنجاح.
                </h2>
                <h2>
                  دائرة المشاريع المبتكرة دوما ما تعاني المشاريع المبتكرة
                  والمميزة من الإصتدام بالإجراءات والقيود التي صممت على نسق
                  المشاريع التقليدية وقسوة الخوف من المخاطر، ونحن في بيت التنمية
                  ندعم ونفتح الأفاق للإبتكار والمبتكرون لتحقيق تطلعاتهم عبر
                  توفير كل المعينات من معلومات وخبراء وتمويل وأدوات وخلاصات
                  البحوث والتجارب.
                </h2>
                <ul>
                  <li>مشاريع انتاج الطاقة النظيفة.</li>
                  <li>مشاريع الإلكترونيات.</li>
                  <li>مشاريع المحافظة على الموارد الطبيعية وتطويرها.</li>
                  <li>مشاريع صناعة وسائل الحركة وأليات الإنتاج.</li>
                  <li>مشاريع زيادة الإنتاج والإنتاجية والكفاءة.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={module.image}>
          <Image
            className={module.picture}
            src={construction}
            alt="صورة مشاريع البناء"
          ></Image>
        </div>
      </main>
      <div className={module.heigh}></div>
    </section>
  );
};

export default Services;
