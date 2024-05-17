import { BlogCard } from '../../components/BlogCard/BlogCard';
import { Button } from 'reactstrap';
import { useGetItemsQuery } from './blogApiSlice';
import './Blog.module.css';
import { viewMore } from './blogSlice';
import { useAppDispatch } from '../../app/hooks';

interface BlogProps {
    count: number;
}

const Blog: React.FC<BlogProps> = ({ count }) => {
    const { data, isError, isLoading } = useGetItemsQuery({ query: 'reading books', count: count });
    const dispatch = useAppDispatch();

    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            {data?.value.map((blog, index) => (
                <BlogCard key={index} blog={[blog]} />
            ))}.
            <Button onClick={() => dispatch(viewMore())}>View more</Button>
        </>
    );
}

export default Blog;
