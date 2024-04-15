import { useParams } from "react-router-dom";
import { placesEndpoints } from "$api";

const Cart = () => {
  const { id: orgId } = useParams();

  const { data, isFetching } = placesEndpoints.useFetchPlacesQuery();

  return <div>Cart</div>;
};

export default Cart;
