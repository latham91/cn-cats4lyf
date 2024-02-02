import React from 'react';
// import Image1 from '..images/team.png';
// import Image2 from "../images/welcome.png";



const AboutUs = () => {
    const containerStyle = {
        padding: '20px', 
        textAlign: 'center', 
    };

    return (
        <footer className="bg-dark text-light">
            <div className="container" style={containerStyle}> {}
            <div className="col-md-12">
                        {/* <img src={Image2} alt="Image2" />
                        <img src={Image1} alt="Image1" /> */}

                <h4>Cats4Lyf! We are here for you and your cats!</h4>
                    <div className="col-md-4">
                        
                        <div>
        
            
        </div>
                        
                        <p> Have a question, need assistance, or just want to talk about cats? </p>
                        <p>We&apos;re all ears! Contact Cats for Life through the following channels:
                        </p>
                       
                    </div>
                    <div className="col-md-4">
                        <h4>Connect With Us Online! Stay updated on the latest cat news!</h4>
                        <p>
                             For promotions, and community events by following us on
                            social media:
                        </p>
                        <strong>Customer Support: Phone: 01612453651</strong>
                        <ul>
                            <p>
                                Facebook:{" "}
                                <a href="https://facebook.com/cats4lyf" target="_blank" rel="noopener noreferrer">
                                    facebook.com/cats4lyf
                                </a>
                            </p>
                            <p>
                                Instagram:{" "}
                                <a href="https://instagram.com/cats4lyf" target="_blank" rel="noopener noreferrer">
                                    instagram.com/cats4lyf
                                </a>
                            </p>
                            <p>
                                Twitter:{" "}
                                <a href="https://twitter.com/cats4lyf" target="_blank" rel="noopener noreferrer">
                                    twitter.com/cats4lyf
                                </a>
                            </p>
                        </ul>
                        <div>
                            
                            <ul>
                                <p>
                                    Email: <a href="mailto:support@cats4lyf.com">support@cats4lyf.com</a>
                                </p>
                            </ul>
                            <strong>Visit Us: Cats for Life Headquarters</strong>
                            <p>
                                <br />2 Dale Street, Manchester, M3 5RD
                            </p>
                        </div>
                        <p>
                            <strong>Got Feedback?</strong> We value your feedback! Share your thoughts to help us improve and better serve you. 
                            <a href="mailto:feedback@cats4lyf.com">feedback@cats4lyf.com</a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        
                        <p>
                            For business partnerships, collaborations, or wholesale inquiries, please reach out to our
                            team. <a href="">
  
</a>
.
                        </p>
                        <h4>Join Our Community: Become a part of the Cats for Life community by joining our forums.</h4>
                        <p>
                            Participate, by sharing your cat stories. We love hearing from fellow cat enthusiasts!
                        </p>
                        <h4>Operating Hours</h4>
                        <p>Our customer support team is available to assist you during the following hours:</p>
                        <p>
                            <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (Your Time Zone)
                        </p>
                        <p>
                            <strong>Saturday - Sunday:</strong> Closed
                        </p>
                        <p>We strive to respond to all inquiries within 24 hours.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default AboutUs;
