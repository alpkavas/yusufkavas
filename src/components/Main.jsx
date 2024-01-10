import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function Main() {
  return (
    <>
      <div className="flex flex-col justify-center items-center" id="about">
        <h1 className="md:text-lx md:m-10 m-5  flex md:justify-center text-gl">
          Hakkında
        </h1>
        <div className="flex flex-col justify-center md:px-48 md:py-5 px-5 py-1">
          <div className="flex items-start justify-start mb-1">
            <BiSolidQuoteAltLeft className="text-lg" />
          </div>
          <p className="text-base md:text-lg italic md:font-normal  font-normal md:leading-10  leading-7 md:text-center text-justify antialiased break-words">
            Marmara Üniversitesi İktisadi İdari Bilimler Fakültesi İşletme
            Bölümünü (2010) yıllarında bitirdim. 2011 yılında Marmara
            üniversitesi Sosyal bilimler Enstitüsü İşletme Anabilim Dalı
            Muhasebe Denetimi bölümünde Tezli Yüksek Lisans programından mezun
            oldum. Yüksek lisans tezimi “Üretim Yöntemine Göre Amortisman
            Uygulamasının Yeni Vergi Usul Kanunu Yazım Çalışmalarındaki
            Uygulanabilirliği” konusunda yazdım. 2022 yılında Sakarya
            Üniversitesi, İşletme Enstitüsü, Muhasebe ve Finansman Doktora
            programını tamamladım. Doktora tezimin konusu “Bireysel Beslenme
            Alışkanlıklarının Finansal Risk Alma Eğilimi Üzerindeki Etkisi” dir.
            Yüksek lisans mezuniyetinden sonra 2013-2022 yılları arasında
            Bilecik Şeyh Edebali Üniversitesi Osmaneli Meslek Yüksekokulunda
            Öğretim Görevlisi olarak görev yaptım. 2015-2022 yılları arasında
            Osmaneli Meslek Yüksekokulunda müdür yardımcısı olarak görev yaptım.
            2023 yılında ise bu üniversiteden ayrılarak Amasya Üniversitesi,
            Merzifon Meslek Yüksekokuluna geçiş yaptım, halen bu üniversitede
            görev yapmaktayım. Finansal Okuryazarlık, Algılanan Finansal Refah,
            Finansal Risk İştahı, Şirketlerin Finansal Performans Ölçümleri ile
            ilgili makale ve bildirilerim bulunmaktadır.
          </p>
          <div className="flex items-end justify-end">
            <BiSolidQuoteAltRight className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
