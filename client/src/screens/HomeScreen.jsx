import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            { isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (<div>{ error?.data?.message || error.error }</div>) : (<>
                <h1>Latest Products</h1>
                <Row>
                    {products.map((product)=> (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <h3>
                                <Product product={product} />
                            </h3>                
                        </Col>
                    ))}
                </Row>
            </>) }
        </>
    );
};

export default HomeScreen