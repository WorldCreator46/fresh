export default function CartLayout({ children }) {
  return (
    <div>
      {children}
      <Banner content="현대카드 무이자 이벤트 중" />
    </div>
  );
}

function Banner({ content }) {
  return (
    <div className="banner">
      <h3>{content}</h3>
    </div>
  );
}
