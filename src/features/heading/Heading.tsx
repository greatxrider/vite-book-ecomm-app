import HeadingCarousel from '../../components/HeadingCarousel/HeadingCarousel';
import './Heading.module.css';
import { useGetItemsQuery } from './headingApiSlice';

const Heading = () => {
    const { data, isError, isLoading, isSuccess } = useGetItemsQuery('computers');

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

    if (isSuccess) {
        return (
            <>
                <HeadingCarousel items={data?.items} />
            </>
        );
    }

    return null;
}

export default Heading;
