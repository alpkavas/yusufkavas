import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlinePlayLesson } from "react-icons/md";
import { BsCloudDownload } from "react-icons/bs";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("data/note.json").then((response) => {
      setNotes(response.data.notes);
      console.log(response.data.notes);
    });
  }, []);
  return (
    <div className=" bg-gray-50 h-[30rem] flex items-center justify-center flex-col ">
      <h1 className="text-gl flex justify-center mb-5 align-bottom">
        Notlarım
      </h1>

      <div className=" flex justify-center items-center" id="notes">
        <ul
          role="list-disc"
          className="divide-y divide-gray-100  h-80 overflow-y-scroll bg-gray-200 md:w-[40rem] w-[20rem]">
          {notes.map((note) => (
            <li key={note.id} className=" py-5 ">
              <div className=" flex md:space-x-20 space-x-10 md:justify-between justify-center  items-center px-10">
                <MdOutlinePlayLesson className="h-12 md:w-[1.5rem] w-20 mr-2" />
                <a href={note.link} target="_blank">
                  <p className="text-sm font-semibold leading-6 md:w-40 w-10 text-gray-900">
                    {note.name}
                  </p>
                </a>
                <div className="w-[4rem] px-2"></div>
                <p className="text-sm leading-6 text-gray-900">
                  <a href={note.link}>
                    <BsCloudDownload />
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
