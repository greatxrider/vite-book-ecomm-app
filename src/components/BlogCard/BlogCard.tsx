import { Card, CardBody, CardTitle, CardText, CardImg, Button, CardSubtitle } from 'reactstrap';
import { formatDate } from '../../utils/formatDate';
import { Provider } from 'react-redux';

interface BlogCardProps {
    blog: {
        name: string;
        url: string;
        image: {
            contentUrl: string;
        };
        description: string;
        about: {
            readLink: string;
            name: string;
        }[];
        provider: {
            _type: string;
            name: string;
            image: {
                thumbnail: {
                    contentUrl: string;
                };
            };
        }[];
        datePublished: string;
        category: string;
    }[];
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const Cards = blog.map((item, index) => {
        const providerNames = item.provider.map(provider => provider.name).join(', ');

        return (
            <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
                <CardImg top width="100%" src={item.image.contentUrl} alt="Blog Image" />
                <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle>{providerNames} {formatDate(item.datePublished)}</CardSubtitle>
                    <CardText>{item.description}</CardText>
                    <Button color="primary" href={item.url} target="_blank">Continue Reading</Button>
                </CardBody>
            </Card>
        )
    })

    return <div>{Cards}</div>;
};
