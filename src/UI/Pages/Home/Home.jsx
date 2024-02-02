import React from "react";
import "./Home.css";
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, UncontrolledCarousel } from "reactstrap";
import logo from "../../../Image/logo.jpg";
import L1 from "../../../Image/L1.webp";
import L2 from "../../../Image/L2.png";
import L3 from "../../../Image/L3.png";
import L4 from "../../../Image/L4.webp";
import L5 from "../../../Image/L5.webp";
import L6 from "../../../Image/L6.webp";
import L7 from "../../../Image/L7.png";
import L8 from "../../../Image/L8.png";
import a1 from "../../../Image/banner.webp";
import a2 from "../../../Image/banner2.webp"
import c1 from "../../../Image/client1.png";
import c2 from "../../../Image/client3.png";
import v1 from "../../../Image/v1.mp4"
import { CornerDownRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="slider">
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Slide 1',
                            key: 1,
                            src: "https://dlcdnrog.asus.com/rog/media/170291778916.webp",
                        },
                        {
                            altText: 'Slide 2',
                            key: 2,
                            src: "https://dlcdnrog.asus.com/rog/media/1637784966993.webp",
                        },
                        {
                            altText: 'Slide 3',
                            key: 3,
                            src: "https://dlcdnrog.asus.com/rog/media/1601320227704.webp",
                        },
                        {
                            altText: 'Slide 4',
                            key: 3,
                            src: "https://dlcdnrog.asus.com/rog/media/1590500573829.webp",
                        }
                    ]}
                />
            </div>
            <h1 className="review-h">
                <span>Asus</span> Laptops
            </h1>
            <div className="card_container">

                <Card className="Card_1 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            ROG Strix G16
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L4}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 97,580.00</h4>
                        <CardText>
                            Gaming Laptop, 16" 16:10 QHD+ 240Hz, GeForce RTX 4060, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-ES94. Draw more frames and win more games with Windows 11, a 13th Gen Intel Core i9-13980HX processor.
                        </CardText>
                        <NavLink to={"/product"} style={{ marginRight: "1rem" }}>
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </NavLink>
                        <NavLink href="#">
                            <Button color="dark">Learn More</Button>
                        </NavLink>
                    </CardBody>
                </Card>

                <Card className="Card_2 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            ZenBook Pro 16x OLED
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L2}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 2,49,990.00</h4>
                        <CardText>
                            Windows 11 Home - ASUS recommends Windows 11 Pro for business
                            Up to 13th gen Intel® Core™ i9-13905H processor
                            Up to NVIDIA® GeForce® RTX™ 4080
                            3.2K 120Hz OLED HDR NanoEdge touchscreen Display
                            Up to 32 GB memory.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_3 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            ROG Zephyrus G16
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L3}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 1,24,990.00</h4>
                        <CardText>
                            GU603ZU-N3023WS
                            NVIDIA® GeForce RTX™ 4050 Laptop GPU
                            Windows 11 Home
                            12th Gen Intel® Core™ i7-12700H
                            40.64cm (16), FHD+ 16:10 (1920 x 1200, WUXGA), Refresh Rate:165Hz
                            1TB PCIe® 4.0 NVMe™ M.2 SSD
                            ROG Nebula Display.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_4 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            ROG Strix G16
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L1}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 1,47,000.00</h4>
                        <CardText>
                            ASUS TUF Gaming FA507NU-LP002W
                            15.6" FHD (1920*1080), 144Hz 45%NTSC IPS-Level
                            AMD Ryzen 7 7735HS Octa Core Mobile Processor (8-core, 16-thread, 16MB cache, up to 4.75 GHz max boost)
                            6GB NVIDIA GeForce RTX 4050 Laptop GPU GDDR6.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_5 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            VivoBook Pro 14
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L5}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 54,800.00</h4>
                        <CardText>
                            ASUS VivoBook Pro 14 Business Laptop 14" WQXGA+ OLED Display 11th Gen Intel Quad-Core i5-11300H Processor 8GB DDR4 1TB SSD Intel Iris Xe Graphics Backlit Fingerprint Thunderbolt HDMI Win10 Blue.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_6 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            VivoBook Go 14 Flip
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L6}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 2,13,000.00</h4>
                        <CardText>
                            ASUS VivoBook Go 14 Flip Thin and Light 2-in-1 Laptop, 14” HD Touch, Intel Celeron N4500 CPU, UHD Graphics, 4GB RAM, 64GB eMMC, NumberPad, Windows 11 Home in S mode, Quiet Blue, J1400KA-DS02T.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_7 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            VivoBook 15
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L7}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 47,000.00</h4>
                        <CardText>
                            The new frameless four-sided NanoEdge display keeps dimensions down to a minimum, giving VivoBook 15 a footprint that's appreciably smaller than its predecessor. It takes up less space on your desk, leaving more room for you.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_8 m-2 "
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            ASUS
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            ZenBook Duo 14
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L8}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 87,000.00</h4>
                        <CardText>
                            Gaming Laptop, 16" 16:10 QHD+ 240Hz, GeForce RTX 4060, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-ES94. Draw more frames and win more games with Windows 11, a 13th Gen Intel Core i9-13980HX processor.
                        </CardText>
                        <CardLink href="#">
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
            <h1 className="review-h">
                <span>U</span>pcoming
            </h1>
            <div className="ad-container">
                <div className="first_ad">
                    <div>
                        <Card inverse>
                            <CardImg
                                alt="Card image cap"
                                src={a1}
                                width="100%"
                            />
                            <CardImgOverlay>
                                <CardTitle tag="h1" style={{ color: "white" }}>
                                    ROG - Republic of Gamers
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
                <div className="second_ad">
                    <div>
                        <Card inverse>
                            <CardImg
                                alt="Card image cap"
                                src={a2}
                                width="100%"
                            />
                            <CardImgOverlay>
                                <CardTitle tag="h1" style={{ color: "white" }}>
                                    TUF Gaming
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>

            <h1 className="review-h">
                <span>I</span>ntroducng
            </h1>

            <div className="video">
                <video src={v1} loop autoPlay muted></video>
            </div>

            <h1 className="review-h">
                <span>R</span>EVIEW
            </h1>

            <div className="review">
                <div className="client-1">
                    <div class="clients-img">
                        <img src={c1} alt="" class="logo" />
                    </div>
                    <div class="c-details-m">
                        <p class="c-details">
                            <span><CornerDownRight /></span>
                            I see Nuno support as more of a partner to my company than a
                            resource. I can pick up the phone and talk to anyone at any time
                            and the way that they interact with us as a business makes it
                            really simple.
                        </p>
                        <div class="hr"></div>
                        <div class="name">-Eric, Small Business Owner</div>
                    </div>
                </div>

                <div className="client-2">
                    <div class="clients-img">
                        <img src={c2} alt="" class="logo" />
                    </div>
                    <div class="c-details-m">
                        <p class="c-details">
                            <span><CornerDownRight /></span>
                            This theme is fantastic! It has all of the great website
                            elements found throughout professional templates. I've learned a
                            lot through developing and designing it while my own
                            touches to the design.
                        </p>
                        <div class="hr"></div>
                        <div class="name">-Ricky, Aspiring Developer</div>
                    </div>
                </div>
            </div>

        </>
    );
}
