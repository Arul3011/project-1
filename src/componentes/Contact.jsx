import React from 'react';
import "./contact.css"
function Contact(props) {
    return (
        <>

            <form >
                <div className="fieldone">
                    <input type="text" placeholder='Firstname' />
                    <input type="text" placeholder='Lastname' />
                </div>
                <div className="fieldtwo">
                    <input type="text" placeholder='mobile' />
                    <input type="email" placeholder='email' />
                </div>
                <textarea name="" id="" placeholder='Message'></textarea><br />
                <div className="btnfeild"> <button>Submit</button></div>
            </form>
        </>
    );
}

export default Contact;