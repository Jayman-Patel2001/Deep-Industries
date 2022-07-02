import React from "react";
import "../styles/Inquiry.css";
import emailjs from "emailjs-com";
// import { useForm } from "react-hook-form";

const Inquiry = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2j5o2cq",
        "template_k24jpiq",
        e.target,
        "user_bjtmx6RN9nDlm5R5y2AT6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message send successfully!! We will contact you soon!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="inquiry">
      {/* Left Side */}
      <div className="leftSide">
        <p className="inquiry_title">Send us a message</p>
        <form onSubmit={sendEmail}>
          {/* First Row */}
          <div className="leftSide_firstRow">
            <div className="leftSide_nameSection">
              <span className="heading">
                Name <span className="mandatory">*</span>
              </span>
              <input
                // {...register("name", { required: true })}
                type="text"
                placeholder="Your name"
                name="name"
                autoComplete="off"
              />
            </div>
            <div className="leftSide_emailSection">
              <span className="heading">
                Email <span className="mandatory">*</span>
              </span>
              <input
                // {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="off"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="leftSide_secondRow">
            <div className="leftSide_phoneSection">
              <span className="heading">Phone</span>
              <input
                // {...register("phone")}
                type="number"
                name="phone"
                maxLength="10"
                placeholder="Your Contact"
                autoComplete="off"
              />
            </div>
            <div className="leftSide_companySection">
              <span className="heading">
                Company <span className="mandatory">*</span>
              </span>
              <input
                // {...register("company", { required: true })}
                type="text"
                name="company"
                placeholder="Company name"
                autoComplete="off"
              />
            </div>
          </div>
          {/* Third Row */}
          <div className="leftSide_thirdRow">
            <div className="leftSide_productSection">
              <span className="heading">Buying Requirements</span>
              <textarea
                // {...register("product")}
                name="product"
                cols="20"
                rows="3"
                placeholder="Product details"
                autoComplete="off"
              ></textarea>
            </div>
          </div>
          {/* Fourth Row */}
          <div className="leftSide_fourthRow">
            <div className="leftSide_addressSection">
              <span className="heading">
                Street Address <span className="mandatory">*</span>
              </span>
              <textarea
                // {...register("address", { required: true })}
                name="address"
                cols="20"
                rows="3"
                placeholder="Your address"
                autoComplete="off"
              ></textarea>
            </div>
          </div>

          <button className="inquiry_button" type="submit">
            Send Mail
          </button>
          <span>
            <button type="reset" className="inquiry_resetButton">
              Reset
            </button>
          </span>
        </form>
      </div>

      {/* Right Side */}
      <div className="rightSide">
        <img src="/images/contactImage.jpg" alt="contact image" />
      </div>
    </div>
  );
};

export default Inquiry;
