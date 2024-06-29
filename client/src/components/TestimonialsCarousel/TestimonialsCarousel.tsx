import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import { Col, Row, Card, CardBody, CardSubtitle, CardText, Button, CardTitle } from 'reactstrap';
import styles from './TestimonialsCarousel.module.css';

interface TestimonialsCarouselProps {
    testimonials: {
        id: number;
        author: string;
        commentText: string;
        rating: number;
        avatar: string;
    }[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = testimonials.map((testimonial) => {
        const { id, author, commentText, rating, avatar } = testimonial;

        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={id}
            >
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardText>
                            {rating}
                        </CardText>
                        <CardText>
                            {commentText}
                        </CardText>
                        <CardText>
                            <span> {avatar}</span>
                            <span>{author}</span>
                            <span>Book Lovers</span>
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
                items={testimonials}
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

export default TestimonialsCarousel;
