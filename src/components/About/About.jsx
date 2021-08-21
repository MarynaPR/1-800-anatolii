import React from 'react';
// import coverImg from '../../assets/images/self.jpg';

function About(props) {
    return (

        <div className="row g-2">
            <div className="col-md-5" style={{ margin: "30px", padding: "10px 10px", border: ""}}>
                {/* <img src={coverImg} alt="self"></img> */}
                {props.children}
            </div>
            
                <div>
                    <p>hi, welcome! </p>
                    <p>My name is Anatolii
                    <span> I go by 1800</span>. say hello </p>

            </div>
        </div>
    )
}
export default About;