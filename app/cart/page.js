export default function Cart(CartItems) {
  let 장바구니 = [
    { 이름: '토마토', 가격: '10', 개수: '2' },
    { 이름: '파스타', 가격: '5', 개수: '4' },
  ];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.map((물건, 순서) => {
        return <CartItem key={순서} product={물건.이름} price={물건.가격} count={물건.개수} />;
      })}
    </div>
  );
}
const CartItem = ({ product, price, count }) => {
  return (
    <div className="cart-item">
      <p>{product}</p>
      <p>${price}</p>
      <p>{count}개</p>
    </div>
  );
};
