import "./style.css";

function CardSales() {
  return (
    <div className="card-sales">
      <div className="card-item money">
        <div className="title">Total Uang Masuk</div>
        <div className="content">Rp 126.560</div>
      </div>
      <div className="card-item ticket">
        <div className="title">Total Tiket Terjual</div>
        <div className="content">120</div>
      </div>
    </div>
  );
}

export default CardSales;
