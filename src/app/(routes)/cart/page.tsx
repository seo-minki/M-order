import OrderList from "@/components/cart/OrderList";
import Header from "@/components/Header";
import ArrowLeftIcon from "public/images/icons/arrow-left.png";

const Cart = () => {
  return (
    <div className="px-4 min-h-screen">
      <Header
        navigateList={[{ imagePath: ArrowLeftIcon, routePath: "/menu" }]}
      ></Header>
      <OrderList></OrderList>
    </div>
  );
};

export default Cart;
