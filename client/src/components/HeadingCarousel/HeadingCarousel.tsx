import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import { Col, Row, Card, CardBody, CardSubtitle, CardText, Button, CardTitle } from 'reactstrap';
import styles from './HeadingCarousel.module.css';

interface HeadingCarouselProps {
    items: {
        id: string,
        volumeInfo: {
            title: string,
            authors: string[],
            description: string,
            imageLinks: {
                smallThumbnail: string,
                thumbnail: string
            }
            categories: string[];
        }
        saleInfo: {
            retailPrice: {
                amount: number,
                currencyCode: string
            }
        }
    }[];
}

const HeadingCarousel = ({ items }: HeadingCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        const { title, authors, description, categories } = item.volumeInfo;
        const { thumbnail } = item.volumeInfo.imageLinks;
        const { amount, currencyCode } = item.saleInfo.retailPrice;

        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <Row>
                    <h5>Best Seller</h5>
                    <h1>{title}</h1>
                    <Col sm='6'>
                        <h6>{authors}</h6>
                    </Col>
                    <Col sm='6'>
                        <h6>{categories}</h6>
                    </Col>
                    <Col sm='1'>
                        <hr className={styles.verticalhr} />
                    </Col>
                    <Col sm='11'>
                        <p>{description}</p>
                    </Col>
                    <h6>{currencyCode ? '$' : null}{amount}</h6>
                    <span>{amount - (amount * (20 / 100))}</span>
                    <span>20% OFF</span>
                    <div>
                        <Button>Buy Now</Button>
                        <Button>See Details</Button>
                    </div>
                </Row>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt={item.id}
                        src={thumbnail}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            by {authors}
                        </CardSubtitle>
                        <CardText>
                            {currencyCode ? '$' : null}{amount}
                        </CardText>
                    </CardBody>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default HeadingCarousel;
