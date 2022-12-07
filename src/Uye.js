import React from "react";

function Uye(props) {

  const { kisi } = props;

  return (
    <div className="uye-kutusu beyaz-kutu">
      <h3 className="uye-isim">{kisi.isim}</h3>
      <div className="uye-ozellik">
        <div className="uye-label">Takımdaki rolü</div>
        <div>{kisi.rol}</div>
      </div>
      <div className="uye-ozellik">
        <div className="uye-label">Favori zaman dilimi</div>
        <div>{kisi.favoriZaman}</div>
      </div>
    </div>
  )
}

export default Uye;