import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

//npm install emails-com --save


export default function Contact() {

    const [message, setMessage] = useState(false)

    const sendEmail = (e)=>{
        e.preventDefault();
        setMessage(true)


        emailjs.sendForm('gmail', 'protfolio_temp', e.target, 'user_XOOjPjh06BUfF4OqOMyw0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <div className = "contact" id = "contact">

            
            <div className="right">
                <h2>请在此处填写您想咨询的问题，我们将尽快联系您</h2>
                <form onSubmit={sendEmail}>
                <input type="text" placeholder="您的姓名" name="name" />
                    <input type="email" placeholder="您的电子邮件地址" name="email"/>
                    <input type="phone" placeholder="您的联系电话" name="phone"/>

                    <textarea placeholder = "请在此处简述您想咨询的问题" name="message"></textarea>
                    <button type="submit">发送</button>
                    {message  && <span>感谢您的咨询，我们将尽快回复您。</span>}
                </form>
            </div>
        </div>
    )
}
