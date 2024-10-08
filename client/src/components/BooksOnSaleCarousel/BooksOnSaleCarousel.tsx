import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import { Row, Card, CardBody, CardText, Button, CardTitle, CardSubtitle } from 'reactstrap';
import styles from './BooksOnSaleCarousel.module.css';

interface BooksOnSaleCarouselProps {
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

const BooksOnSaleCarousel = ({ items }: BooksOnSaleCarouselProps) => {
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
        const { title, categories = [] } = item.volumeInfo || {};
        const thumbnail = item.volumeInfo?.imageLinks?.thumbnail || 'path_to_default_image.jpg';
        const { amount = 0, currencyCode = '' } = item.saleInfo?.retailPrice || {};

        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <Card style={{ width: '18rem' }}>
                    <img alt={item.id} src={thumbnail} />
                    <CardBody>
                        <CardTitle tag="h5">{title || 'Untitled'}</CardTitle>
                        <CardSubtitle>{categories.join(', ') || 'No category'}</CardSubtitle>
                        <CardText>Rating 4.5</CardText>
                        <CardText>
                            <span>{currencyCode ? currencyCode : ''}{amount}</span>
                        </CardText>
                        <CardText>
                            <span>{currencyCode ? currencyCode : ''}{amount - (amount * 0.2)}</span>
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

export default BooksOnSaleCarousel;
