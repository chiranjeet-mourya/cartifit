import React, { useState } from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";


function Faq() {

    const faqs = [
        {
          question: "What is web domain and hosting?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          question: "Which server is best for websites linux or windows?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          question: "Google cloud or Amazon server which one is best and fast?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
        {
          question: "Why Organic SEO is important for all businesses?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
      ];

     // State to manage which content box is open
   const [openIndex, setOpenIndex] = useState(null);

   // Toggle visibility for the selected FAQ
   const toggleFAQ = (index) => {
     setOpenIndex(openIndex === index ? null : index);
   };
 

  return (
    <>
    <div className="faq_section">
      <div className="container">
        <div className="text">
          <h1>FAQ's</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        {faqs.map((faq, index) => (
          <div className="content_box" key={index}>
            <div className="flex">
              <span>
                <BsArrowRightCircleFill className="rightcircle" />
                {faq.question}
              </span>
              <IoIosArrowDown
                className={`down ${openIndex === index ? "rotate" : ""}`}
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
              />
            </div>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Faq