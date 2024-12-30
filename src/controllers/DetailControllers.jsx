import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView"
import Model from './../models/DetailModel';
import { useEffect, useState } from "react";



const DetailControllers = () => {
  const [coin, setCoin] = useState(null);

  //1) url den id yi al
  const { id } = useParams();


  //2) coin'nin detay verilerini ve fiyat geçmişini al al
  useEffect(() => {
    Model.getCoinDetails(id)
      .then((data) => setCoin(data));
  }, []);

  console.log(id);

  // model'den bir örnek oluşturma
  // örn oluıştururken coin'in  bililerini gönderdik
  // model ise gönderdiğimiz bilgiler ile birlikte view bileşeninde
  // kullanacağımız infoFields verisini oluşturdu
  const model = new Model(coin);

  return (
    <DetailView model={model} />
  )
}

export default DetailControllers