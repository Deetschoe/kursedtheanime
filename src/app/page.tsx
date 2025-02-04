'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const Home = () => {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const releaseDate = new Date('October 1, 2025 15:00:00 EDT')
      const now = new Date()
      const difference = releaseDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return `${days}d ${hours}h ${minutes}m ${seconds}s`
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#723201] via-[#160f07] to-black text-white">
      {/* Social Icons */}
      <div className="fixed top-4 right-4 flex gap-4">
        <a href="https://discord.gg/kA9qBMbVWq" target="_blank" rel="noopener noreferrer">
          <Image src="/discord.png" alt="Discord" width={32} height={32} className="hover:opacity-80 transition-opacity" />
        </a>
        <a href="https://twitter.com/kursedtheanime" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter.png" alt="Twitter" width={32} height={32} className="hover:opacity-80 transition-opacity" />
        </a>
        <a href="https://instagram.com/kursedtheanime" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.png" alt="Instagram" width={32} height={32} className="hover:opacity-80 transition-opacity" />
        </a>
        <a href="https://minimalmaru.com/collections/pineabur" target="_blank" rel="noopener noreferrer">
        <div>
  <div className="pt-1">
  <span className="text-lg font-medium hover:text-[#b8b8b8]">Support the Series</span>
  </div>
</div>        </a>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
  <div className="max-w-4xl w-full space-y-8 text-center pt-16 md:pt-3">
    {/* Title and Countdown */}
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#ffffff]">
      Kursed: Yorokobi Island
    </h1>
          
          <div className="flex justify-center w-full my-8">
            <iframe 
              width="628"
              height="378"
              src="https://www.youtube.com/embed/1RMU5NwsthU?si=rBjq69dUrPS3-TZd" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-lg"
              allowFullScreen
            />
          </div>

          <div className="text-lg md:text-xl font-mono bg-[#723201]/50 p-4 rounded-lg inline-block">
            {timeLeft} until Pilot Release
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
                  className="newsletter-form-button w-full px-4 py-2 rounded-md bg-[#eebe0f] text-black text-sm font-medium hover:bg-[#d1a609]/90 transition-colors"
                >
                  Sign up to get reminded
                </button>
                <button 
                  type="button"
                  className="newsletter-loading-button hidden w-full px-4 py-2 rounded-md bg-[#d1a609] text-black text-sm font-medium"
                >
                  Please wait...
                </button>
              </form>
              <div className="newsletter-success hidden text-center mt-4 text-sm">
                <p className="newsletter-success-message text-green-500">
                  Thanks! we promise not to spam only the good stuff
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

          <div className="text-sm text-white/70">
  we are a small independent team producing the series and looking for all sorts of people to speed up production, for biz inquiries:{" "}
  <a href="mailto:pineabur@gmail.com" className="hover:text-white transition-colors">
    pineabur@gmail.com
  </a>
</div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            <Link 
              href="/news" 
              className="bg-[#3c3c3c] hover:bg-[#1d1d1d]/80 px-4 py-2 rounded-md text-sm font-semibold"
            >
              News Article
            </Link>
            
            <a 
              href="https://discord.gg/kA9qBMbVWq" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#454dbd] hover:bg-[#363d9f]/80 px-4 py-2 rounded-md text-sm font-semibold"
            >
              Join our Discord
            </a>


            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjDGUa8QUheGOuq50B4B0bPbuHgRw5rBb09lpnE6_MsHMDAw/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3c3c3c] hover:bg-[#1d1d1d]/80 px-4 py-2 rounded-md text-sm font-semibold"
            >
              Apply to the Team
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