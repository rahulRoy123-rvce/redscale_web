// Import React
import React, { useEffect } from "react";

// Carousel component
const Carousel = () => {

  useEffect(() => {
    function gallery() {
      this.index = 0;
      this.load = function () {
        this.rootEl = document.querySelector(".gallery");
        this.platform = this.rootEl.querySelector(".platform");
        this.frames = this.platform.querySelectorAll(".each-frame");
        this.contentArea = this.rootEl.querySelector(".content-area");
        this.width = parseInt(this.rootEl.style.width);
        this.limit = { start: 0, end: this.frames.length - 1 };
        this.frames.forEach(each => { each.style.width = this.width + "px"; });
        this.goto(this.index);
      }
      this.set_title = function () { this.rootEl.querySelector(".heading").innerText = this.frames[this.index].getAttribute("title"); }
      this.next = function () { this.platform.style.right = this.width * ++this.index + "px"; this.set_title(); }
      this.prev = function () { this.platform.style.right = this.width * --this.index + "px"; this.set_title(); }
      this.goto = function (index) { this.platform.style.right = this.width * index + "px"; this.index = index; this.set_title(); }
      this.load();
    }

    var G = new gallery();
    G.rootEl.addEventListener("click", function (t) {
      var val = t.target.getAttribute("action");
      if (val === "next" && G.index !== G.limit.end) { G.next(); }
      if (val === "prev" && G.index !== G.limit.start) { G.prev(); }
      if (val === "goto") {
        let rv = t.target.getAttribute("goto");
        rv = rv === "end" ? G.limit.end : rv;
        G.goto(parseInt(rv));
      }
    });

    document.addEventListener("keyup", function (t) {
      var val = t.keyCode;
      if (val === 39 && G.index !== G.limit.end) { G.next(); }
      if (val === 37 && G.index !== G.limit.start) { G.prev(); }
    });

    // Run G.load() if new data loaded with ajax
  }, []);

  return (
    <div>
      <div className="text-xl font-bold m-5 text-center">Use Keyboard Arrow Keys To Go Left And Right</div>

      <div className="gallery border-2 rounded mx-auto m-5 bg-white" style={{ width: '750px' }}>
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto"></div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <svg action="prev" className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path action="prev" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <svg action="next" className="w-7 border-2 rounded-r-lg p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path action="next" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        <div className="content-area w-full h-96 overflow-hidden">
          <div className="platform shadow-xl h-full flex">

            {/* ... (same content as before) ... */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
