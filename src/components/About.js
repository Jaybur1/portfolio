import React, { Component } from 'react';

class About extends Component {
  render() {
    return (

      <div className="about-page">
        <h1 className="quote">"Try to be better then tommorow self!"</h1>
        <hr />
        <div className="about-content">
          <p>
            <b className="about-title" style={{ fontSize: '20px' }}>Who am I:</b><br />
            Hi! My name is Evgeniy Burbyga ,
            but you can call me Jay (my wife and mom calling me that).
            I am 28 years old, was born in the Ukraine , moved to Israel with my family at the age of 6 ,
            and then moved to Canada with my wife in 2017. I have a cat named Muffin and I play drums since 2004.
<br />
            <br />
            <b className="about-title" style={{ fontSize: '20px' }}> Early life: </b><br />
            Before I entered the big web development world ,
            I was a professional truck driver, and web development was a side hobby that i really enjoyed.
            Some time along the way this hobby became a passion, and a way of life .
            With that I realized that learning and self development is the thing that keeps my gears going.
<br />
            <br />
            <b className="about-title" style={{ fontSize: '20px' }}>What I am up to now :</b><br />

            As the quote on top of this page says, I am trying to be better then tomorrow me , I'm constantly learning and self developing.<br />
            I'm always open for new challenging, hard and interesting projects! so if you have them, count me in !!! </p>
        </div>
      </div>
    )
  }
}

export default About;