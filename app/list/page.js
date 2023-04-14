export default function List() {
  class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }
  let Products = [
    new Product('신선야채믹스 1kg 1개', 9990, '신선야채 5종'),
    new Product('고당도 제주도 하우스 귤 3kg', 29990, '고당도 하우스 귤'),
    new Product('완도산 전복 13~14미 1kg', 39990, '신선한 완도산 활 전복'),
    new Product('맛있는 굴 1kg', 19990, '신선한 굴'),
    new Product('싱싱한 전남 햇 배 4kg', 49990, '전남 햇 배'),
    new Product('신선한 서산 삼치 1kg', 29990, '서산 삼치'),
    new Product('풍미 가득한 한우 살치살 500g', 59990, '고급 한우 살치살'),
    new Product('신선한 오리엔탈 야채 믹스 1kg', 8990, '다양한 오리엔탈 야채 믹스'),
    new Product('고소한 대왕초 씨앗 500g', 10990, '신선한 대왕초 씨앗'),
    new Product('향긋한 제주 감귤차 20입', 29990, '제주 감귤차'),
    new Product('신선한 노르웨이 생연어 슬라이스 200g', 19990, '노르웨이 생연어 슬라이스'),
    new Product('산머루 농장에서 수확한 신선한 산머루 500g', 15990, '산머루'),
    new Product('바로 먹는 고당도 제주 레드 오렌지 5kg', 69990, '고당도 제주 레드 오렌지'),
    new Product('신선한 통영 횟감 세트 500g', 29990, '신선한 통영 횟감 세트'),
    new Product('진하고 깊은 맛의 참기름 500ml', 9990, '진하고 깊은 맛의 참기름'),
    new Product('고소한 산양갈비 500g', 39990, '고소한 산양갈비'),
    new Product('신선한 낙지 500g', 19990, '신선한 낙지'),
    new Product('신선한 동해물 병어 500g', 49990, '신선한 동해물 병어'),
    new Product('깊고 풍부한 맛의 남해 애호박 1kg', 9990, '깊고 풍부한 맛의 남해 애호박'),
    new Product('신선한 명태 새우젓 1kg', 14990, '신선한 명태 새우젓'),
    new Product('진하고 풍부한 맛의 오리훈제 1kg', 39990, '진하고 풍부한 맛의 오리훈제'),
    new Product('매콤한 낙지젓 500g', 29990, '매콤한 낙지젓'),
    new Product('산머루 농장에서 직송한 신선한 햇사과 3kg', 29990, '신선한 햇사과'),
    new Product('촉촉한 맛의 신선한 생새우 500g', 39990, '촉촉한 맛의 생새우'),
    new Product('품질 좋은 신선한 오징어 1kg', 29990, '품질 좋은 신선한 오징어'),
    new Product('신선한 흑돼지 목살 500g', 49990, '신선한 흑돼지 목살'),
    new Product('상큼한 레몬에이드 1.5L', 6990, '상큼한 레몬에이드'),
    new Product('잘익은 남해산 홍어 500g', 39990, '잘익은 남해산 홍어'),
    new Product('진한맛의 생선초회 소스 500ml', 9990, '진한맛의 생선초회 소스'),
    new Product('부드럽고 고소한 자연산 가자미살 500g', 29990, '부드럽고 고소한 자연산 가자미살'),
    new Product('담백한 횟감 명태 500g', 29990, '담백한 횟감 명태'),
    new Product('풍미 가득한 한우 채끝 1kg', 49990, '풍미 가득한 한우 채끝'),
    new Product('맛깔나는 자연산 명란젓 200g', 39990, '맛깔나는 자연산 명란젓'),
    new Product('품질 좋은 굴젓 300g', 39990, '품질 좋은 굴젓'),
    new Product('맛있는 가리비젓 200g', 49990, '맛있는 가리비젓'),
    new Product('고소한 남해산 쭈꾸미 500g', 39990, '고소한 남해산 쭈꾸미'),
    new Product('신선한 무항생제 돼지고기 등심 500g', 49990, '신선한 무항생제 돼지고기 등심'),
    new Product('맛있는 갈치 젓갈 300g', 39990, '맛있는 갈치 젓갈'),
    new Product('신선한 대게살 500g', 39990, '신선한 대게살'),
    new Product('고소한 자연산 냉동 조개살 500g', 29990, '고소한 자연산 냉동 조개살'),
    new Product('신선한 활해삼 300g', 39990, '신선한 활해삼'),
    new Product('신선한 무항생제 닭다리살 1kg', 39990, '신선한 무항생제 닭다리살'),
  ];
  const ProductForm = ({ name, price, description }) => {
    return (
      <div className="food">
        <h2>{name}</h2>
        <p>
          {description} | {price.toLocaleString()}원
        </p>
      </div>
    );
  };
  return (
    <div>
      <h1 className="title">상품목록</h1>
      {Products.map((product) => {
        return (
          <ProductForm key={product.id} name={product.name} price={product.price} description={product.description} />
        );
      })}
    </div>
  );
}
