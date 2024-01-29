import React from 'react';
import "./SingleProduct.css";
import p1 from "../../../Image/L3.png"
import { BadgeInfo, BadgePercent, Star } from 'lucide-react';
import { Button, Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import logo from "../../../Image/logo.jpg";
import L1 from "../../../Image/L1.webp";
import L2 from "../../../Image/L2.png";
import L3 from "../../../Image/L3.png";
import L4 from "../../../Image/L4.webp";

export default function SingleProduct() {
    return (
        <>
            <div className="SingleProduct">
                <div className="Right_section">
                    <div className="product_img">
                        <img src={p1} alt="" />
                    </div>
                </div>
                <div className="Left_section">
                    <div className="product_details">
                        <h1> ASUS ROG Strix G16 (2023)</h1>
                        <h2 className='f-details'>
                            ASUS ROG Strix G16 (2023) 64WHrs Battery, Intel Core i5-13450HX 13th Gen, 16" FHD+ 165Hz, 6GB RTX 3050, Gaming Laptop (16GB/512GB SSD/Windows 11/Office 2021/4-Zone RGB KB/Gray/2.50 Kg) G614JJ-N3086WS
                        </h2>
                        <hr className='m-0' />
                        <h2 className="price"><span>-18% </span> ₹97,580</h2>
                        <h3 className="cross-p"><s>₹ 1,19,000</s></h3>
                        <p className='p-related'>Inclusive of all taxes
                            EMI starts at ₹4,727. No Cost EMI available</p>
                        <div className="rating">
                            4.2 <Star style={{ width: "1.2rem", fill: "#FFA41C", fontSize: '5rem' }} />
                            <Star style={{ width: "1.2rem", fill: "#FFA41C" }} />
                            <Star style={{ width: "1.2rem", fill: "#FFA41C" }} />
                            <Star style={{ width: "1.2rem", fill: "#FFA41C" }} />
                            <Star style={{ width: "1.2rem" }} />
                        </div>
                        <hr className='m-0' />
                        <div className="offer_sec">
                            <div className="heading">
                                <BadgePercent style={{ color: "red", marginRight: "0.5rem" }} />offers
                            </div>
                            <div className="box">
                                <div className="box-1">
                                    No Cost EMI
                                    Upto ₹4,390.27 EMI interest savings on Amazon Pay ICICI Bank Credit CardsUpto ₹4,390.27 EMI interest savings on Amazon Pay ICICI…
                                </div>
                                <div className="box-2">
                                    Bank Offer
                                    Upto ₹150.00 discount on HSBC Bank Credit CardsUpto ₹150.00 discount on HSBC Bank Credit Cards
                                    5 offers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="about_sec">
                <h3 className="about_h"><BadgeInfo style={{ color: "red", marginRight: "0.5rem" }} />About this item</h3>
                Processor: 13th Gen Intel Core i5-13450HX Processor 2.4 GHz (20M Cache, up to 4.6 GHz, 10 cores: 6 P-cores and 4 E-cores)
                Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV and 3 month of Game Pass-including EA Play
                With new games added. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes
                Memory: 16GB (8GB SO-DIMM *2) DDR5 4800MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 4.0 NVMe M.2 SSD with additional 2x M.2 Slot for SSD Storage expansion
                Display: 16-inch FHD+ 16:10 (1920 x 1200, WUXGA), 165Hz IPS-level Anti-glare display, 7ms, 250nits 1000:1
                Graphics: NVIDIA GeForce RTX 3050 Laptop GPU with MUX Switch + NVIDIA Advanced Optimus 6GB GDDR6 VRAM ROG Boost: 1782MHz* at 95W (1732MHz Boost Clock+50MHz OC, 80W+15W Dynamic Boost)
                Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity | McAfee (1 Year)
                Keyboard: Backlit Chiclet Keyboard 4-Zone RGB
                Design: 2.26 ~ 3.04 cm | 2.50 Kg weight | 64WHrs, 4S1P, 4-cell Li-ion
                I/O Port:1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNC, 2x USB 3.2 Gen 2 Type-A | 1x 3.5mm Combo Audio Jack | 1x HDMI 2.1 FRL
            </div>

            <hr />
            <h1 className="title" style={{ textAlign: "center", fontWeight: "900", color: "#E40D11" }}>Related</h1>
            <div className="card-container d-flex">
                <Card className="Card_1 m-2"
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
                            TUF Gaming A15
                        </CardSubtitle>
                        <img src={logo} alt="" style={{ height: "3rem", width: "3rem" }} />
                    </CardBody>
                    <img
                        alt="Card cap"
                        src={L1}
                        width="100%"
                    />
                    <CardBody>
                        <h4 style={{ color: "#C74200" }}>₹ 93,622.00</h4>
                        <CardText>
                            ASUS TUF Gaming FA507NU-LP002W
                            15.6" FHD (1920*1080), 144Hz 45%NTSC IPS-Level
                            AMD Ryzen 7 7735HS Octa Core Mobile Processor (8-core, 16-thread, 16MB cache, up to 4.75 GHz max boost)
                            6GB NVIDIA GeForce RTX 4050 Laptop GPU GDDR6.
                        </CardText>
                        <CardLink>
                            <Button style={{ border: "none", backgroundColor: "#E40006" }}>Buy Now</Button>
                        </CardLink>
                        <CardLink href="#">
                            <Button color="dark">Learn More</Button>
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="Card_2 m-2"
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

                <Card className="Card_3 m-2"
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

                <Card className="Card_4 m-2"
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
                        <h4 style={{ color: "#C74200" }}>₹ 1,47,000.00</h4>
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
            <div className="button" >
                <Button style={{ width: "fit-content" }}>See More...</Button>
            </div>

        </>
    )
}
