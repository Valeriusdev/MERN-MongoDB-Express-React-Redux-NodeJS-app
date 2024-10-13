import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery();

    return (
        <>
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
        </>
    );
};

export default HomeScreen