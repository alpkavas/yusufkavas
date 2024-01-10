import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [showMore, setShowMore] = useState(6);

  useEffect(() => {
    axios.get("/data/data.json").then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  const handleShowMore = () => {
    setShowMore((prevShowMore) => prevShowMore + 8);
  };

  return (
    <div className="bg-gray-50 md:px-20 md:py-10 px-5" id="articles">
      <h1 className="text-gl flex justify-center mb-5 ">Makalelerim</h1>
      <div className="grid md:grid-cols-2 md:gap-4">
        {articles.slice(0, showMore).map((data, index) => (
          <ul key={index} className="mt-3 mb-3">
            <div className="border-2 p-4 rounded-lg shadow-md">
              <div className="flex text-center items-center">
                <li className="font-semibold line-clamp-1 text-left">
                  {data.title}
                </li>
              </div>
              <li className="font-normal">{data.authors}</li>
              <li className="font-extralight">{data.publication}</li>
              <li>
                <a href={data.link} className="text-red-500">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Daha fazla bilgi için tıklayınız
                  </span>
                </a>
              </li>
            </div>
          </ul>
        ))}
      </div>
      {showMore < articles.length && (
        <div className="flex justify-center">
          <button
            onClick={handleShowMore}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
            <span className="flex text-center items-center">
              <IoMdArrowDropdown />
              <span className="underline-offset-4">Devamı için tıklayınız</span>
              <IoMdArrowDropdown />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Articles;
