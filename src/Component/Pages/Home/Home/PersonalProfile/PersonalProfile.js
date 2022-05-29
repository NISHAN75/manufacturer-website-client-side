import React from 'react';

const PersonalProfile = () => {
  return (
    <section className="my-10 px-10">
      <div>

        <div className="personal-info text-left">
          <h2 className="text-primary font-bold text-2xl"> My name: Nishan Das</h2>
          <p className="text-secondary">my email: <span className="text-primary text-xl">nishandas880@gmail.com</span></p>
          <p></p>
          <div className="educational my-10">
            <h2 className="text-center">educational background</h2>
            <p>hi,I  am nishan das ,  I was complete my hsc and ssc and  now I read in degree 1st year in chattogram city colleage.</p>
          </div>
          <div className="developer">
            <h2 className=" text-primary my-4">web developer technologies or skills</h2>
            <p className="text-secondary font-bold mb-5"> HTML5, CSS3, JavaScript, React, Responsive Website Talks about #teamwork, #teambonding, #reactdevelopers, #presentationdesign, and #reactjsdevelopment </p>
          </div>
          <div className="myProject">
            <h2  className="text-primary font-bold">My Project thiree</h2>
            <h5  className="my-5 text-secondary font-bold">Amorini Furniture</h5>
            <p  className="text-primary font-bold">web-live-link:<a href="https://furniture-web-8900a.firebaseapp.com/"><span className="text-secondary">CLick Hire!</span></a></p>
            <p className="text-primary font-bold">it's make HTML5, CSS3, JavaScript,Boostarap5, React, Responsive Website</p>
          </div>
          <div className="myProject">
            <h2 className="text-primary font-bold">My Project thiree</h2>
            <h5 className="my-5 text-secondary font-bold">ecommerce web</h5>
            <p className="text-primary font-bold">web-live-link:<a href="https://chipper-cannoli-1b6f2c.netlify.app/?fbclid=IwAR3HAi8TM0q8qKaE4YxSyPj7d19U8hz0BmrRNnR14_2k7LCD4Q2jh9Z9YJY"><span className="text-secondary">Click Hire!</span></a></p>
            <p className="text-primary font-bold">it's make HTML5, CSS3, JavaScript,Boostarap5, React, Responsive Website</p>
          </div>
          <div className="myProject">
            <h2 className="text-primary font-bold">My Project thiree</h2>
            <h5 className="my-5 text-secondary font-bold">Finance web</h5>
            <p className="text-primary font-bold">web-live-link:<a href="https://financial-website-b12a2.web.app/?fbclid=IwAR0kFLbn-cbBeYYlJZa1jDpV45zNwQPwX1SXMMY1qiPhf-g_W6Cm6zhqLgU"><span className="text-secondary">Click Hire!</span></a></p>
            <p className="text-primary font-bold">it's make HTML5, CSS3, JavaScript,Boostarap5, React, Responsive Website</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PersonalProfile;