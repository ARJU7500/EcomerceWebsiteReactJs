import React from "react";
function CBody() {
    return (
        <>
            {/* <!-- section2 start --> */}
            <div id="sectioncon2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <p>Get in Touch</p>
                            <h1>Visit One Of Our Agency Locations Or Contact Us Tody</h1>
                            <h4>Had Office</h4>
                            <p><i class="material-icons">location_on</i> Gopeshwar, Chamoli, Uttrakhand, India</p>
                            <p><i class="material-icons">email</i> Contact@123gmail.com</p>
                            <p><i class="material-icons">call</i> +91 7668213002</p>
                            <p><i class="material-icons">watch</i> Monday To Saturday 09:00AM-09.00PM</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.072467320464!2d79.31048507268943!3d30.407227864291126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d458db25f9b9%3A0x3c8e88f7178344d7!2z4KSX4KWL4KSq4KWH4KS24KWN4KS14KSwLCDgpIngpKTgpY3gpKTgpLDgpL7gpJbgpKPgpY3gpKEgMjQ2NDAx!5e0!3m2!1shi!2sin!4v1645823355896!5m2!1shi!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- section3 start --> */}
            <div id="sectioncon3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <p>leave A Message</p>
                            <h1>We Love To Heart For You</h1>
                            <form>
                                <input type="text" placeholder="Your Full Name" /><br />
                                <input type="email" placeholder="Example@123gmail.com" /><br />
                                <input type="text" placeholder="Your Subject" /><br />
                                <textarea col="5" row="50" placeholder="Enter your message"></textarea><br />
                                <a href="#">Submit</a>
                            </form>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="boxcon3">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-5">
                                        <img src="./img/1.png" />
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-7">
                                        <div class="udata">
                                            <h6>Rohit Negi</h6>
                                            <p>Senior Marketing Manager </p>
                                            <p>Email: rohit@123negigmail.com</p>
                                            <p>phone: 7668213002</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-5">
                                        <img src="./img/2.png" />
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-7">
                                        <div class="udata">
                                            <h6>Ritik Negi</h6>
                                            <p>Senior Marketing Manager </p>
                                            <p>Email: Ritik@123negigmail.com</p>
                                            <p>phone: 7668213002</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-5">
                                        <img src="./img/3.png" />
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-7">
                                        <div class="udata">
                                            <h6>Mahesh Negi</h6>
                                            <p>Senior Marketing Manager </p>
                                            <p>Email: mahesh@123negigmail.com</p>
                                            <p>phone: 7668213002</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CBody;