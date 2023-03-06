import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <div>Details About Product {productId}</div>;
};

export default ProductDetail;
