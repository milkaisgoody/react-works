import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";
import dayjs from 'dayjs'

const ProductInfo = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    //페이지 이동
    const navigate = useNavigate();

    // // id에 해당하는 상품 가져오기
    // // id는 문자이므로 숫자형으로 변환 - Number(), ParseInt()
    // const product = products.find(p => p.id === Number(id));

    // db에서 해당 id의 상품 가져오기
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            }catch(error){
                console.log("상품 상세 조회 에러: ");   
            }
        }
        fetchProduct();
    }, [id]);

    return(
        <div className="product-info">
            <h2>상품 정보</h2>
            {product && (
            <div className="detail">
                <p>상품명: {product.product_name}</p>
                <p>가격: {product.price}원</p>
                <p>등록일: {dayjs(product.created_at).format("YYYY-MM-DD HH:mm:ss")}</p>
            </div>
            )}
            <div>
                <button onClick={() => {navigate('/products')}}>목록 보기</button>
            </div>
        </div>
    )
}

export default ProductInfo;