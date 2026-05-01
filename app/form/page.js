import module from "./form.module.css";
import React from "react";

const Form = () => {
  return (
    <section className="container">
      <main className={module.main}>
        <form className={module.form}>
          <h1>استمارة الشركات</h1>
          <div className={module.section}>
            <label>اسم المؤسسة *</label>
            <div className={module.name}>
              <div className={module.nameContent}>
                <input required type="text" />
                <label>اسم المؤسسة</label>
              </div>
              <div className={module.nameContent}>
                <input required type="text" />
                <label>الاختصار</label>
              </div>
            </div>
          </div>

          <div className={module.section}>
            <label>العنوان *</label>
            <input required type="text" />
            <label
              style={{ fontSize: "14px", color: "#9e9898", marginTop: "10px" }}
            >
              المنطقة/الشارع
            </label>
            <div className={module.name}>
              <div className={module.nameContent}>
                <input required type="text" />
                <label> المدينة</label>
              </div>
              <div className={module.nameContent}>
                <input required type="text" />
                <label>ولاية/محافظة</label>
              </div>
            </div>
          </div>

          <div className={module.section}>
            <label>البريد الالكتروني *</label>
            <input required type="text" />
            <label
              style={{ fontSize: "14px", color: "#9e9898", marginTop: "10px" }}
            >
              example@example.com
            </label>
          </div>

          <div className={module.section}>
            <label> القطاع الذي تنتمي اليه المؤسسة *</label>
            <div className={module.radio}>
              <input required type="radio" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                القطاع العام
              </label>
            </div>
            <div className={module.radio}>
              <input required type="radio" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                القطاع الخاص
              </label>
            </div>
            <div className={module.radio}>
              <input required type="radio" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                منظمات المجتمع المدني
              </label>
            </div>
            <div className={module.radio}>
              <input required type="radio" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                القطاع الدولي والاقليمي
              </label>
            </div>
          </div>
          <div className={module.section}>
            <label> اي من هذه الانواع تنتمي اليه المؤسسة؟ *</label>
            <select>
              <option>الرجاء التحديد</option>
              <option>هيئة عامة</option>
              <option>اتحادات</option>
              <option>وزارات</option>
              <option>مؤسسات حكومية</option>
              <option>شركات عامة</option>
              <option>شركات مختلفة الجنسيات</option>
              <option>شركات عابرة للحدود</option>
              <option>شركات خاصة</option>
              <option>بنوك </option>
              <option>منظمات انسانية</option>
              <option>منظمات زراعية</option>
              <option>منظمات خيرية</option>
            </select>
          </div>

          <div className={module.section}>
            <label> الرجاة تقديم نبذة صغيرة عن المؤسسة *</label>
            <textarea />
          </div>

          <div className={module.section}>
            <label> اسم الشخص المفوض من قبل المؤسسة *</label>
            <div className={module.name}>
              <div className={module.nameContent}>
                <input required type="text" />
                <label>اسم الاول</label>
              </div>
              <div className={module.nameContent}>
                <input required type="text" />
                <label>الاسم الاوسط</label>
              </div>
              <div className={module.nameContent}>
                <input required type="text" />
                <label>الاسم الاخير</label>
              </div>
            </div>
          </div>

          <div className={module.section}>
            <label>وظيفته *</label>
            <input required type="text" />
          </div>

          <div className={module.section}>
            <label>الايميل *</label>
            <input required type="email" />
            <label
              style={{ fontSize: "14px", color: "#9e9898", marginTop: "10px" }}
            >
              example@example.com
            </label>
          </div>
          <div className={module.section}>
            <label>رقم الهاتف *</label>
            <input required type="number" />
          </div>

          <div className={module.section}>
            <label> ماهي الخدمات المستهدفة؟ *</label>
            <div className={module.checkbox}>
              <input required type="checkbox" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                خدمات لوجستية
              </label>
            </div>
            <div className={module.checkbox}>
              <input required type="checkbox" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                اجهزة كهربائية ومعدات فنية
              </label>
            </div>
            <div className={module.checkbox}>
              <input required type="checkbox" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                تمويل مادي
              </label>
            </div>
            <div className={module.checkbox}>
              <input required type="checkbox" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                فريق فني متخصص
              </label>
            </div>
            <div className={module.checkbox}>
              <input required type="checkbox" />
              <label
                style={{
                  fontSize: "14px",
                  color: "#9e9898",
                  marginTop: "10px",
                }}
              >
                اخرى
              </label>
            </div>
          </div>

          <div className={module.section}>
            <label>
              {" "}
              ما الذي تتوقع الحصول عليه من بيت التنمية مقابل خدماتك؟ *
            </label>
            <textarea />
          </div>
          <button className={module.btn}>ارسال</button>
        </form>
      </main>
    </section>
  );
};

export default Form;
