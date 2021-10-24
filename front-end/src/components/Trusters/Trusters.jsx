import React from "react";
import TrustersCss from "./Trusters.module.scss";
const Trusters = () => {
    // const [card, setcard] = useState(1);
    function moveForward() {
        // const card1 = document.getElementById("card1");
        // const card2 = document.getElementById("card2");
        // const card3 = document.getElementById("card3");
        // transform: translate3d(0,0,0);
    }
    function moveBackward() {}
    return (
        <div className={TrustersCss.outside}>
            <h2>
                Our <span>Happy Clients</span>
            </h2>
            <div className={TrustersCss.container}>
                <div className={TrustersCss.inside}>
                    <h3>Trusted by Agencies & Store Owners</h3>
                    <div className={TrustersCss.imgbox}>
                        <img
                            alt=""
                            src="images/Ellipse 15.png"
                            className={TrustersCss.img}
                        />
                        <img
                            alt=""
                            src="images/Ellipse 14.png"
                            className={TrustersCss.img_shadow}
                        />
                    </div>
                    <div className={TrustersCss.imgbox1}>
                        <img
                            alt=""
                            src="images/Ellipse 29.png"
                            className={TrustersCss.img}
                        />
                        <img
                            alt=""
                            src="images/Ellipse 10.png"
                            className={TrustersCss.img_shadow}
                        />
                    </div>
                    <div className={TrustersCss.imgbox2}>
                        <img
                            alt=""
                            src="images/Ellipse 28.png"
                            className={TrustersCss.img}
                        />
                        <img
                            alt=""
                            src="images/Ellipse 5.png"
                            className={TrustersCss.img_shadow}
                        />
                    </div>
                    <div className={TrustersCss.imgbox3}>
                        <img
                            alt=""
                            src="images/Ellipse 30.png"
                            className={TrustersCss.img}
                        />
                        <img
                            alt=""
                            src="images/Ellipse 11.png"
                            className={TrustersCss.img_shadow}
                        />
                    </div>
                    <div className={TrustersCss.imgbox4}>
                        <img
                            alt=""
                            src="images/Ellipse 27.png"
                            className={TrustersCss.img}
                        />
                        <img
                            alt=""
                            src="images/Ellipse 9.png"
                            className={TrustersCss.img_shadow}
                        />
                    </div>
                    <div className={TrustersCss.imgbox5}>
                        <img
                            alt=""
                            src="images/Ellipse 26.png"
                            className={TrustersCss.img}
                        />
                        <img
                            alt=""
                            src="images/Ellipse 6.png"
                            className={TrustersCss.img_shadow}
                        />
                    </div>
                    <div className={TrustersCss.imgbox6}>
                        <img
                            alt=""
                            src="images/left.png"
                            className={TrustersCss.leftimg}
                            onClick={() => moveBackward()}
                        />
                        <img
                            alt=""
                            src="images/right.png"
                            className={TrustersCss.rightimg}
                            onClick={() => moveForward()}
                        />
                    </div>
                    <div className={TrustersCss.cards}>
                        <img
                            alt=""
                            src="images/Group5.svg"
                            className={TrustersCss.leftdots}
                        />
                        <img
                            alt=""
                            src="images/Group6.svg"
                            className={TrustersCss.rightdots}
                        />
                        <div
                            className={`${TrustersCss.card} ${TrustersCss.card1}`}
                            id="card1"
                        >
                            <img
                                alt=""
                                src="images/quotes.svg"
                                className={TrustersCss.quotes}
                            />
                            <p>
                                c1Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet. Velit
                                officia consequat duis enim velit mollit.
                            </p>
                        </div>
                        <div
                            className={`${TrustersCss.card} ${TrustersCss.card2}`}
                            id="card2"
                        >
                            <img
                                alt=""
                                src="images/quotes.svg"
                                className={TrustersCss.quotes}
                            />
                            <p>
                                c2Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet. Velit
                                officia consequat duis enim velit mollit.
                            </p>
                        </div>
                        <div
                            className={`${TrustersCss.card} ${TrustersCss.card3}`}
                            id="card3"
                        >
                            <img
                                alt=""
                                src="images/quotes.svg"
                                className={TrustersCss.quotes}
                            />
                            <p>
                                c3 Amet minim mollit non deserunt ullamco est
                                sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet. Velit
                                officia consequat duis enim velit mollit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusters;
