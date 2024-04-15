import { useParams } from "react-router-dom";

const Order = () => {
  const { id: orgId } = useParams();

  return <div>Order</div>;
};

export default Order;
