import module from "./callus.module.css";

const Callus = () => {
  return (
    <section className="container">
      <main className={module.main}>
        <h1>اتصل بنا</h1>
        <form>
          <div className={module.name}>
            <div className={module.firstName}>
              <label>First name</label>
              <input required type="text" />
            </div>
            <div className={module.lastName}>
              <label>Last name</label>
              <input required type="text" />
            </div>
          </div>
          <label>Company</label>
          <input required type="text" />
          <label>Email</label>
          <input required type="email" />
          <label>Phone number</label>
          <input required type="number" />
          <label>Message</label>
          <textarea required />
          <button className={module.btn}>ارسال</button>
        </form>
      </main>
    </section>
  );
};

export default Callus;
