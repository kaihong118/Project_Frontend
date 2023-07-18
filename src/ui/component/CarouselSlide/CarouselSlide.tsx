import {Carousel} from "react-bootstrap";

export default function CarouselSlide() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item interval={5000} >
                    <div
                        className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                        style={{ height: "1000px" }}
                    >
                        <img src={"https://www.cinechat.co.uk/wp-content/uploads/2021/06/Godzilla-vs-Kong-Review-2.jpg"}
                             className="img-fluid" alt="Slide" style={{ objectFit: "cover", height: "100%", width: "100%" }}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div
                        className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                        style={{ height: "1000px" }}
                    >
                        <img src={"https://www.indiewire.com/wp-content/uploads/2021/03/godzilla-vs-kong-gory.png?w=1309&h=703&crop=1&resize=1280%2C687"}
                             className="img-fluid" alt="Slide" style={{ objectFit: "cover", height: "100%", width: "100%" }}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div
                        className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                        style={{ height: "1000px" }}
                    >
                        <img src={"https://img2.wallspic.com/crops/1/1/7/6/3/136711/136711-godzilla-kaiju-mythical_creature-monster-dragon-1920x1080.jpg"}
                             className="img-fluid" alt="Slide" style={{ objectFit: "cover", height: "100%", width: "100%" }}/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}