import axios from "axios";
import { FaPercent } from "react-icons/fa";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { SiCoinmarketcap } from "react-icons/si";

export default class DetailModel {
    constructor(coin) {
        this.coin = coin;

        this.infoFields = [
            {
                icon: <SiCoinmarketcap />,
                label: 'Market Hacmi',
                value: coin?.detail.marketCapUsd,
            },
            {
                icon: <MdEventAvailable />,
                label: 'tedarik',
                value: coin?.detail.maxSupply
            },
            {
                icon: <MdPriceChange />,
                label: 'Fiyat',
                value: coin?.detail.priceUsd
            },
            {
                icon: <FaPercent />,
                label: '24s Değişim(%)',
                value: coin?.detail.changePercent24Hr
            },
            {
                icon: < RiStockFill />,
                label: '24s Hacim',
                value: coin?.detail.volumeUsd24Hr
            },
        ];

        
        // grafik kütüpjanesinin istediği veri formatı
        this.chartData = {
            labels: coin?.history.map((i) =>
                new Date(i.date).toLocaleDateString()
            ),
            datasets: [
                {
                    label: 'Fiyat1',
                    data: coin?.history.map((i) => i.priceUsd),
                    borderColor: 'purple',
                    backgroundColor: 'yellow',
                },
            ],
        }
    }



     //   veirerli alır
  static async getCoinDetails(coin) {
    try {
      const detailRes = await axios.get(
        `https://api.coincap.io/v2/assets/${coin}`
      );

      const historyRes = await axios.get(
        `https://api.coincap.io/v2/assets/${coin}/history?interval=d1`
      );

      return {
        detail: detailRes.data.data,
        history: historyRes.data.data,
      };
    } catch (err) {
      console.log(err);
    }
  }
}





