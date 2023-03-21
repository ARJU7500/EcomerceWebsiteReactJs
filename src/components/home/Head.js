import React from "react";
function Head() {
    return (
        <>
            <div class="header">
                <div class="togle">
                    <div id="icon">
                        <i onclick="myFunction(x)" class=" fa fa-toggle-on"></i>
                    </div>
                </div>
                <div class="container">
                    <div id="section1">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <h1>Give Your Workout<br />
                                    A New Style!</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo numquam fugit nulla odit deleniti fugiat accusantium sint assumenda.</p>
                                <a href="#">Explore Now &#8594;</a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <img src="./img/section1.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Head;