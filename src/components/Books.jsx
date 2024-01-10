import React from "react";
import beslenme from "../assets/books/beslenme.png";
import risk from "../assets/books/finansalrisk.png";
import teori from "../assets/books/finansteoriveyaklaşımlar.png";
import model from "../assets/books/modelveuygulamalar.png";
import davranis from "../assets/books/davranıssalfinansta.jpg";

function Books() {
  return (
    <div className="md:px-20 md:py-10 flex justify-center flex-wrap" id="books">
      <div className="w-[30rem] bg-white border border-gray-200 rounded-lg m-5 flex flex-col justify-evenly">
        <div className="flex justify-center mt-5 ">
          <img
            className="rounded-t-lg w-[12rem] h-64 items-center shadow-lg  "
            src={beslenme}
            alt="Beslenme Alışkanlıkları Ve Finansal Kararlar"
          />
        </div>
        <div className="text-justify px-3 items-center flex flex-col justify-between">
          <div>
            <h5 className="mb-2 mt-1 text-lg text-center font-bold tracking-tight text-gray-900">
              Beslenme Alışkanlıkları Ve Finansal Kararlar
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Bireylerin beslenme alışkanlıklarındaki farklılığın, duygusal yeme
            davranışının ve vücut kitle indeksinin finansal risk iştahı
            üzerindeki etkilerini ortaya çıkarmayı amaçlamaktadır.
          </p>
          <a
            href="https://www.filizkitabevi.com/beslenme-aliskanliklari-ve-finansal-kararlar-e-kitap"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Satın Al
          </a>
        </div>
      </div>
      <div className="w-[30rem] bg-white border border-gray-200 rounded-lg m-5 flex flex-col justify-evenly">
        <div className="flex justify-center mt-5">
          <img
            className="rounded-t-lg w-[11rem]  h-64 items-center  "
            src={risk}
            alt="Davranışsal Finans Perspektifinde Finansal Risk    "
          />
        </div>
        <div className="text-justify px-3 items-center flex flex-col">
          <h5 className="mb-2 mt-3 text-lg text-center font-bold tracking-tight text-gray-900">
            Davranışsal Finans Perspektifinde Finansal Risk
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            Davranışsal finans; bilişsel hatalarıyla, duygularıyla hareket eden
            bireylerin finansal süreç içerisindeki karar verme aşamalarının
            nasıl etkilediğini daha iyi anlamaya ve açıklamaya çalışmaktadır.
          </p>
          <a
            href="https://www.kitapyurdu.com/kitap/davranissal-finans-perspektifinde-finansal-risk-teoriler-ve-uygulamalar/625456.html&manufacturer_id=251767"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">
            Satın Al
          </a>
        </div>
      </div>
      <div className="w-[30rem] bg-white border border-gray-200 rounded-lg m-5 flex flex-col justify-evenly">
        <div className="flex justify-center">
          <img
            className="rounded-t-lg w-[12rem] h-62 mt-8 items-center  "
            src={teori}
            alt="Beslenme Alışkanlıkları Ve Finansal Kararlar"
          />
        </div>
        <div className="text-justify px-3 items-center flex flex-col">
          <h5 className="mb-2  text-lg font-bold tracking-tight text-gray-900 ">
            Finans: Teori ve Yaklaşımlar
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Küreselleşme ile ülkeler arası sınırların neredeyse tamamıyla
            kalktığı ve bilgiye erişimin hiç olmadığı kadar kolay olduğu
            gözlemlenmektedir. Küreselleşmenin de etkisiyle her alanda yaşanan
            dijitalleşme, finans bilimine de şekil vermektedir.
          </p>
          <a
            href="https://www.filizkitabevi.com/finans-teori-ve-yaklasimlar"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">
            Satın Al
          </a>
        </div>
      </div>
      <div className="w-[30rem] bg-white border border-gray-200 rounded-lg m-5 flex flex-col justify-evenly">
        <div className="flex justify-center ">
          <img
            className="rounded-t-lg w-[14rem] h-60 items-center"
            src={model}
            alt="Beslenme Alışkanlıkları Ve Finansal Kararlar"
          />
        </div>
        <div className="text-justify px-3 items-center flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              Finans: Model ve Uygulamalar
            </h5>
          </a>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            Hayatın kendi seyri içinde akarken finans ve finansal piyasalar gibi
            konularla sadece konunun uzmanlarının ilgilendiği ve uyandığımızda
            bir önceki günle aşağı yukarı aynı bir günü yaşama ihtimalimizin
            neredeyse imkansız olduğu günler yaşamaktayız.
          </p>
          <a
            href="https://www.filizkitabevi.com/finans-model-ve-uygulamalar"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">
            Satın Al
          </a>
        </div>
      </div>
      <div className="w-[30rem] h-[35rem] bg-white border border-gray-200 rounded-lg m-5 flex flex-col justify-evenly">
        <div className="flex justify-center ">
          <img
            className="rounded-t-lg w-[14rem] h-60 items-center"
            src={davranis}
            alt="Beslenme Alışkanlıkları Ve Finansal Kararlar"
          />
        </div>
        <div className="text-justify px-3 items-center flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              Davranışsal Finansta Güncel Yaklaşımlar
            </h5>
          </a>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            Finans; bireyler, kurumlar ve devletler için mali varlıklar ile
            kaynakların etkin kullanımını sağlayan bilim dalıdır. Küreselleşen
            dünya ekonomisinde kıt kaynakların optimum kullanımının önem arz
            ettiği piyasalarda, finansal bilgi birikimi ya da başka bir ifade
            ile finansal okuryazarlık düzeyi yüksek olan yatırımcılar, geleceğe
            yönelik güçlü kararlar alabilmektedir.
          </p>
          <a
            href="https://www.surelikitap.com/tr/kitap/davranissal-finansta-guncel-yaklasimlar-9786256952560"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mb-1 mb-3">
            Satın Al
          </a>
        </div>
      </div>
    </div>
  );
}

export default Books;
