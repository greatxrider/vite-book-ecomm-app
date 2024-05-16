import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import { Row, Card, CardBody, CardText, Button, CardTitle } from 'reactstrap';
import styles from './BannerCarousel.module.css';

interface BannerCarouselProps {
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

const BannerCarousel = ({ items }: BannerCarouselProps) => {
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
        const { title } = item.volumeInfo;
        const { thumbnail } = item.volumeInfo.imageLinks;
        const { amount, currencyCode } = item.saleInfo.retailPrice;

        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
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
                        <CardText>
                            {currencyCode ? '$' : null}{amount}
                        </CardText>
                        <Button>Add to cart</Button>
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

export default BannerCarousel;
