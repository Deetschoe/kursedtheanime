'use client'

import Image from 'next/image'
import Script from 'next/script'

const Home = () => {


  return (
    <div className="min-h-screen bg-white text-black">
      {/* Black Header */}
      <div className="w-full bg-black py-3 px-4 flex justify-end items-center fixed top-0 z-10">
        <div className="flex gap-4 items-center">
          <a href="https://minimalmaru.com/collections/pineabur" target="_blank" rel="noopener noreferrer">
            <span className="text-white text-lg font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">Support the Film</span>
          </a>
          <a href="https://discord.gg/pineabur" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Image src="/discord.png" alt="Discord" width={28} height={28} className="brightness-0 invert hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text transition-all duration-300" />
          </a>
          <a href="https://twitter.com/pineabur" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Image src="/twitter.png" alt="Twitter" width={28} height={28} className="brightness-0 invert hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text transition-all duration-300" />
          </a>
          <a href="https://instagram.com/pineabur" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Image src="/instagram.png" alt="Instagram" width={28} height={28} className="brightness-0 invert hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text transition-all duration-300" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-16">
        <div className="max-w-4xl w-full space-y-6 text-center">
          {/* Title and Countdown */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black pt-2">
            Pineabur
          </h1>
          
          <p className="text-xl text-gray-800">
            A film about a programmer named Maru who discovers AGI in San Francisco
          </p>
          
          
          <div className="flex justify-center w-full my-6">
            <div className="w-[1080px] h-[1080px] max-w-full relative">
              <Image 
                src="/pineabur.gif" 
                alt="Pineabur Film Preview" 
                width={1080} 
                height={1080} 
                className="rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="text-lg md:text-xl font-mono bg-gray-100 p-4 rounded-lg inline-block border border-gray-200 mb-6">
            Release Date: Summer 2025
          </div>


          {/* Loops Newsletter Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="newsletter-form-container">
              <form 
                className="newsletter-form" 
                action="https://app.loops.so/api/newsletter-form/cm6qsb6ro00yao1yz80hcjsvi" 
                method="POST" 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
              >
                <input
                  className="newsletter-form-input w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black text-sm"
                  name="newsletter-form-input"
                  type="email"
                  placeholder="you@gmail.com"
                  required
                />
                <button 
                  type="submit"
                  className="newsletter-form-button w-full px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                >
                  Get updates about the film
                </button>
                <button 
                  type="button"
                  className="newsletter-loading-button hidden w-full px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-medium"
                >
                  Please wait...
                </button>
              </form>
              <div className="newsletter-success hidden text-center mt-4 text-sm">
                <p className="newsletter-success-message text-green-500">
                  Thanks! We&apos;ll only send you important updates about Pineabur.
                </p>
              </div>
              <div className="newsletter-error hidden text-center mt-4 text-sm">
                <p className="newsletter-error-message text-red-600">
                  Oops! Something went wrong, please try again
                </p>
              </div>
              <button 
                className="newsletter-back-button hidden text-gray-400 text-sm mx-auto mt-4 hover:underline"
                type="button"
              >
                ← Back
              </button>
            </div>
          </div>
          <br></br>

          <div className="text-sm text-gray-600">
            For business inquiries:{" "}
            <a href="mailto:pineabur@gmail.com" className="hover:text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              pineabur@gmail.com
            </a>
          </div>


        </div>
      </div>
      <br></br>
      <br></br>

      <Script id="loops-form-handler">{`
        function submitHandler(event) {
          event.preventDefault();
          var container = event.target.parentNode;
          var form = container.querySelector(".newsletter-form");
          var formInput = container.querySelector(".newsletter-form-input");
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
          var formInput = container.querySelector(".newsletter-form-input");
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
          var formContainer = formContainers[i]
          var handlersAdded = formContainer.classList.contains('newsletter-handlers-added')
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