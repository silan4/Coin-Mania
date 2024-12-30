import axios from "axios";

export default class MainPageModel {
    static async getCoins(page) {
        // ofset: atlanılacak eleman sayısı
        // limit: gelicek eleman sınırı
        // doğru sayfadaki elemanlara erişmek için sayda sayısının bir eksiğini
        // limit ile çarmak gerekiyor 3 . sayfadaki veriyi almak için ilk 30
        // taneyi atlamamız lazım
        const params = {
            offset: (page - 1) * 15,
            limit: 15,
          };
            
          

        try {
            const res = await axios
            .get(
                'https://api.coincap.io/v2/assets',
                { params }
            );
             return res.data.data;
        } catch (err) {
            console.log('mainPage istek' ,err);
        }
    }
}

MainPageModel.getCoins();

 