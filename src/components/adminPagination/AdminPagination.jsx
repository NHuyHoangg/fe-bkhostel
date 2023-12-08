/* eslint-disable react/prop-types */
import { memo } from "react";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";


// eslint-disable-next-line react/display-name, react/prop-types
const Pagination = memo(({handleChange, pageStatus}) => {
  let selectedPageCSS = "text-white bg-[rgb(57,197,200)] rounded-md";
  let notSelectedPageCSS = "text-black bg-white border border-color-[rgb(57,197,200)] rounded-md hover:bg-[rgb(57,197,200)] hover:text-white";

  function renderPage(n) {
    let htmls = [];
    for (let i = 0; i < n; i++) {
      htmls.push(
        <li key={i}>
          <button
            className={`px-3 py-1 transition-colors duration-150 focus:shadow-outline ${
              pageStatus.current === i ? selectedPageCSS : notSelectedPageCSS
            }`}
            onClick={()=>{handleChange(i)}}
          >
            {i + 1}
          </button>
        </li>
      );
    }
    return htmls;
  }

  return (
    <div className="bg-white p-4 flex items-center flex-wrap justify-center pb-8">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center">
          <li>
            <button
              className={`px-3 py-1 transition-colors duration-150 focus:shadow-outline   ${
                pageStatus.current === 0
                  ? "opacity-30 cursor-default"
                  : "text-black hover:text-[rgb(57,197,200)] hover:scale-105 transition"
              }`}
            >
              <FaArrowLeft className="text-xl" onClick={()=>{if (pageStatus.current!==0 ) handleChange(pageStatus.current-1)}}/>
            </button>
          </li>
          {renderPage(pageStatus.quantity)}
          <li>
            <button
              className={`px-3 py-1 transition-colors duration-150 focus:shadow-outline ${
                pageStatus.current === pageStatus.quantity - 1
                  ? "cursor-default opacity-30"
                  : "text-black hover:text-[rgb(57,197,200)] hover:scale-105 transition"
              }`}
              onClick={()=>{if (pageStatus.current!==(pageStatus.quantity-1)) handleChange(pageStatus.current+1)}}
            >
              <FaArrowRight className="text-xl"/>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default Pagination;
