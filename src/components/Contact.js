import "../componentStyles/Contact.css";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="formContainer">
        <h1 className="contactHeading">Contact me</h1>
        <p className="contactPara">
          I am not hard to find, let's design something truly spectacular!
        </p>
        <form className="form">
          <input className="contactInp" type="text" placeholder="Full name" />
          <input className="contactInp" type="email" placeholder="Email" />
          <textarea
            className="contactTextarea"
            placeholder="Hi Wyomesh, I have an idea which needs your expertise....."
          />
          <button className="contactBtn">Submit</button>
        </form>
        <Footer/>
      </div>
      
    </>
  );
};

export default Contact;
