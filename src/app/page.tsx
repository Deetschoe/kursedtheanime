'use client'

import Image from 'next/image'
import Script from 'next/script'

const Home = () => {


  return (
    <div className="min-h-screen bg-[#F9F9F9] text-black flex flex-col justify-between">
      {/* Hero Section with main artwork and playful background */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] pt-32 pb-8 px-4 overflow-hidden">
        {/* Playful background circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-orange-200 rounded-full z-0 animate-pop" />
        {/* Floating retro shapes */}
        <div className="absolute left-10 top-32 w-32 h-32 bg-[#B7D84B]/30 rounded-full blur-2xl animate-float z-0" />
        <div className="absolute right-10 bottom-24 w-40 h-20 bg-blue-100/40 rounded-full blur-xl rotate-12 animate-float2 z-0" />
        {/* Main hero image (artwork) with drop shadow */}
        <div className="relative w-full max-w-3xl aspect-[16/7] rounded-2xl overflow-visible z-10 animate-fadein">
          <img src="/gif.gif" alt="Main Visual" className="object-cover w-full h-full drop-shadow-2xl outline outline-4 outline-white animate-bounce-slow" />
          {/* Overlayed title and tagline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#F9F9F9]/80 via-transparent to-[#F9F9F9]/40">
            <h1 className="text-6xl md:text-8xl font-extrabold bg-blue-100/40 tracking-tight font-sans drop-shadow-lg mb-4 animate-pop">sf the anime</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light animate-fadein delay-200 text-center">
            スタートアップ、AIの仲間、そして人間の精神の物語<br/>
              A story of startups, AI companions, and the human spirit
            </p>
          </div>
        </div>
        {/* Animated arrow for scroll hint */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 mb-2 z-20 animate-bounce">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="#B7D84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="text-lg md:text-xl font-mono text-green-700 p-1 mt-8 z-10 animate-fadein delay-400">Sign up for updates</div>
      </section>

      {/* Wavy divider */}
      <div className="w-full overflow-hidden -mt-4 mb-8">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0 40 Q 360 80 720 40 T 1440 40 V80 H0Z" fill="#B7D84B" fillOpacity="0.18" />
        </svg>
      </div>

      {/* Newsletter Form Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 pb-8">
        <form 
          className="flex flex-col items-center gap-3 w-full max-w-md mx-auto bg-transparent p-0 rounded-none border-0 shadow-none"
          action="https://app.loops.so/api/newsletter-form/cm6qsb6ro00yao1yz80hcjsvi" 
          method="POST"
        >
          <input
            className="w-full px-4 py-2 rounded-md border-2 border-[#B7D84B] bg-[#F9F9F9] text-black text-lg focus:outline-none focus:ring-2 focus:ring-[#B7D84B] font-mono"
            name="email"
            type="email"
            placeholder="youremail@gmail.com"
            required
          />
          <button 
            type="submit"
            className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-[#B7D84B] via-green-200 to-blue-100 text-green-900 text-lg font-bold shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-100 hover:to-[#B7D84B] focus:outline-none focus:ring-2 focus:ring-green-400 animate-pop flex items-center justify-center gap-2"
          >
            <span>get updates</span>
          </button>
        </form>
      </section>

      {/* Video Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 pb-8">
        <div className="w-full max-w-2xl aspect-video rounded-xl shadow-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IJ72jJr6AIk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Wide image near the bottom - full-bleed with playful background */}
      <section className="relative w-full pb-8 overflow-hidden">
        <div className="absolute left-0 top-1/3 w-40 h-40 bg-[#B7D84B]/20 rounded-full blur-2xl animate-float z-0" />
        <div className="absolute right-0 bottom-0 w-56 h-24 bg-blue-100/30 rounded-full blur-xl animate-float2 z-0" />
        <img src="/pineabur.gif" alt=" Wide Visual" className="w-full h-[28vw] min-h-[200px] max-h-[400px] object-cover object-center animate-fadein outline outline-4 outline-white" />
      </section>

      {/* Retro anime-style scene transition bar with sparkles */}
      <div className="relative w-full flex items-center justify-center py-8">
        <div className="w-full h-8 bg-gradient-to-r from-orange-200 via-[#B7D84B] to-blue-100 flex items-center justify-center overflow-hidden shadow-md rounded-full">
          {/* Sparkles and stars */}
          <svg className="mx-2 animate-twinkle" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="2" fill="#fff8dc"/>
            <circle cx="16" cy="4" r="1.5" fill="#fff8dc"/>
            <circle cx="24" cy="12" r="1.2" fill="#fff8dc"/>
            <circle cx="28" cy="6" r="1" fill="#fff8dc"/>
          </svg>
          <svg className="mx-2 animate-twinkle delay-200" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="10" r="1.2" fill="#fff8dc"/>
            <circle cx="18" cy="8" r="2" fill="#fff8dc"/>
            <circle cx="26" cy="4" r="1.5" fill="#fff8dc"/>
          </svg>
        </div>
        {/* Floating pixel mascot (star) */}
        <div className="absolute right-8 -top-6 animate-bounce">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,4 24,16 36,16 26,24 30,36 20,28 10,36 14,24 4,16 16,16" fill="#fff8dc" stroke="#B7D84B" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Minimal Black Footer with Socials */}
      <footer className="w-full bg-black py-4 px-4 flex flex-col items-center justify-center gap-4 mt-auto">
        <div className="flex gap-6 items-center">
          <a href="https://www.etsy.com/shop/minimalanimeclothes?section_id=53961539" target="_blank" rel="noopener noreferrer">
            <span className="text-white text-lg font-medium">Shop Merch</span>
          </a>
          <a href="https://discord.gg/pineabur" target="_blank" rel="noopener noreferrer">
            <Image src="/discord.png" alt="Discord" width={28} height={28} className="brightness-0 invert" />
          </a>
          <a href="https://twitter.com/pineabur" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" alt="Twitter" width={28} height={28} className="brightness-0 invert" />
          </a>
          <a href="https://instagram.com/pineabur" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={28} height={28} className="brightness-0 invert" />
          </a>
        </div>
      </footer>
      <Script id="loops-form-handler">{`
  function submitHandler(event) {
    event.preventDefault();
    var container = event.target.parentNode;
    var form = container.querySelector(".newsletter-form");
    var formInput = form.querySelector('input[name="email"]');
    var success = container.querySelector(".newsletter-success");
    var errorContainer = container.querySelector(".newsletter-error");
    var errorMessage = container.querySelector(".newsletter-error-message");
    var backButton = container.querySelector(".newsletter-back-button");
    var submitButton = container.querySelector(".newsletter-form-button");
    var loadingButton = container.querySelector(".newsletter-loading-button");

    const rateLimit = () => {
      errorContainer.style.display = "flex";
      errorMessage.innerText = "Too many signups, please try again in a little while";
      submitButton.style.display = "none";
      formInput.style.display = "none";
      backButton.style.display = "block";
    }

    var time = new Date();
    var timestamp = time.valueOf();
    var previousTimestamp = localStorage.getItem("loops-form-timestamp");

    if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
      rateLimit();
      return;
    }
    localStorage.setItem("loops-form-timestamp", timestamp);

    submitButton.style.display = "none";
    loadingButton.style.display = "flex";

    var formBody = "userGroup=&mailingLists=&email=" + encodeURIComponent(formInput.value);

    fetch(event.target.action, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => [res.ok, res.json(), res])
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          success.style.display = "flex";
          form.reset();
        } else {
          dataPromise.then(data => {
            errorContainer.style.display = "flex";
            errorMessage.innerText = data.message ? data.message : res.statusText;
          });
        }
      })
      .catch(error => {
        if (error.message === "Failed to fetch") {
          rateLimit();
          return;
        }
        errorContainer.style.display = "flex";
        if (error.message) errorMessage.innerText = error.message;
        localStorage.setItem("loops-form-timestamp", '');
      })
      .finally(() => {
        formInput.style.display = "none";
        loadingButton.style.display = "none";
        backButton.style.display = "block";
      });
  }

  function resetFormHandler(event) {
    var container = event.target.parentNode;
var form = container.querySelector(".newsletter-form");
if (!form) return;

var formInput = form.querySelector('input[name="email"]');
if (!formInput) return;
    var success = container.querySelector(".newsletter-success");
    var errorContainer = container.querySelector(".newsletter-error");
    var errorMessage = container.querySelector(".newsletter-error-message");
    var backButton = container.querySelector(".newsletter-back-button");
    var submitButton = container.querySelector(".newsletter-form-button");

    success.style.display = "none";
    errorContainer.style.display = "none";
    errorMessage.innerText = "Oops! Something went wrong, please try again";
    backButton.style.display = "none";
    formInput.style.display = "flex";
    submitButton.style.display = "flex";
  }

  var formContainers = document.getElementsByClassName("newsletter-form-container");

  for (var i = 0; i < formContainers.length; i++) {
    var formContainer = formContainers[i];
    var handlersAdded = formContainer.classList.contains('newsletter-handlers-added');
    if (handlersAdded) continue;
    formContainer
      .querySelector(".newsletter-form")
      .addEventListener("submit", submitHandler);
    formContainer
      .querySelector(".newsletter-back-button")
      .addEventListener("click", resetFormHandler);
    formContainer.classList.add("newsletter-handlers-added");
  }
`}</Script>

    </div>
  )
}

export default Home