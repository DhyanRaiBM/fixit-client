'use client'
import SearchBar from '@/components/SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const text1 = 'Conversational Intelligence for Sales Optimization'
  const text2 = 'Enabling Human Intelligence with Artificial Intelligence'
  const [answer, setAnswer] = useState('')

  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let words = answer.split(' ')
    let index = 0

    const intervalId = setInterval(() => {
      if (index < words.length) {
        setDisplayedText((prev) => prev + (index > 0 ? ' ' : '') + words[index])
        index++
      } else {
        clearInterval(intervalId)
      }
    }, 100) // Adjust the speed here (in milliseconds)

    return () => setDisplayedText('')
  }, [answer])

  let ind = 0

  const [isScrolled, setIsScrolled] = useState(false)
  const { isLoaded, user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        document.body.classList.remove('no-scroll')
      } else {
        document.body.classList.add('no-scroll')
      }
    }
  }, [isLoaded, user])

  return (
    <div>
      <header
        className={`fixed top-0 z-50 w-full left-0 right-0 transition-all ease duration-200 py-0 h-[60px] bg-white bg-transparent ${
          isScrolled ? 'bg-white text-black' : 'bg text-white'
        } block`}
      >
        <nav className="relative w-full mx-auto h-full flex items-center justify-between">
          <div className="flex items-center justify-between w-[95%] sm:w-[85%] mx-auto">
            <a href="/">
              <div className="flex items-center transition-all ease duration-200 gap-x-2">
                <img
                  alt="fixit"
                  loading="lazy"
                  width="25"
                  height="25"
                  src="/fixit.svg"
                  className="text-transparent"
                />
                <h4
                  className={`text-[2rem] text-[#263238] ${
                    isScrolled ? ' text-black' : ' text-white'
                  }`}
                >
                  fiXit
                </h4>
              </div>
            </a>

            <div className="flex text-sm lg:w-80 max-w-80 justify-end items-center gap-x-5">
              <a href="/about">
                <button
                  className={`bg-transparent rounded-sm border px-3 py-1.5 flex min-w-fit font-bold text-main border-main ${
                    isScrolled && 'border-1 border-black'
                  }`}
                >
                  About Us
                </button>
              </a>
              {!isLoaded ? (
                <p>Loading...</p>
              ) : !user ? (
                <a href="/sign-in">
                  <button
                    className={`bg-transparent rounded-sm border px-3 py-1.5 flex w-full min-w-max font-bold text-main border-main ${
                      isScrolled && 'border-1 border-black'
                    }`}
                  >
                    Login
                  </button>
                </a>
              ) : (
                <UserButton />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="">
        <div className="bg-black">
          <div className="bg-new-color xl:px-[160px] max-sm:px-5">
            <div className="text-main w-full text-4xl pt-[8rem] pb-20 lg:pb-10 max-sm:pb-0 xl:pt-[2rem] xl:h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-center">
              <div className="flex  xl:ml-10 pt-[5rem] xl:pt-0 h-fit xl:w-[60%] pb-0 flex-col text-center text-white items-center xl:items-start gap-4 sm:-mt-[2%] justify-center xl:justify-between ">
                <h3 className="w-full  leading-tight text-[45px] sm:text-[70px] text-center md:text-[70px] xl:text-[50px] md:mt-5 p-0 xl:text-start font-proximaBold -mt-[2%] bg-clip-text text-gray-700 width-[60%]">
                  {text1.split('').map((char, index) => (
                    <>
                      <span
                        key={index}
                        className="text-reveal font-bold"
                        style={{ animationDelay: `${ind++ * 0.05}s` }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                      {index === 14 && <br />}
                      {index === 31 && <br />}
                    </>
                  ))}
                </h3>
                <h3 className="w-full leading-tight text-[30px] sm:text-[30px] text-center md:text-[30px] xl:text-[35px] md:mt-5 p-0 xl:text-start font-proximaBold -mt-[2%] bg-clip-text text-gray-700">
                  {text2.split('').map((char, index) => (
                    <>
                      <span
                        key={index}
                        className="text-reveal font-bold"
                        style={{ animationDelay: `${ind++ * 0.05}s` }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                      {/* {index === 26 && <br />} */}
                    </>
                  ))}
                </h3>
                <div
                  id="calendly-inline-widget"
                  className="fixed right-0 bottom-0"
                  data-auto-load="false"
                  style={{ minWidth: '320px', height: '580px' }}
                ></div>
                <div className="flex flex-row gap-12 md:gap-24">
                  <div>
                    <button className="text-lg font-bold mt-12 animate-in slide-in-from-bottom-14 duration-700 text-[#e46e26] hover:text-[#EDC0C0] rounded-sm underline">
                      <a href="/sign-in">Try now &nbsp;&nbsp;&gt;</a>
                    </button>
                  </div>
                  <div>
                    <button className="text-lg font-bold mt-12 animate-in slide-in-from-bottom-14 duration-700 text-[#e46e26] hover:text-[#EDC0C0] rounded-sm underline">
                      <a href="/sign-in">Schedule now &nbsp;&nbsp;&gt;</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] xl:w-[50%] xl:mr-10 h-screen mb-0 xl:mb-0 border-gray-600 rounded-2xl flex flex-col justify-center items-center">
                <div className="flex flex-col  items-center rounded-2xl px-8 lg:py-10 bg-transparent bg-record cursor-pointer">
                  <div className="text-white font-bold text-2xl">
                    Give it a try.
                  </div>
                  <div className="text-white text-base text-center xl:px-10">
                    Click the mic to transcribe live in English or select
                    another language.
                  </div>
                </div>
                <div className="text-white bg-[#0a0a0a] rounded-bl-2xl rounded-br-2xl mt-3 p-4 w-full text-base">
                  <span className="text-xl font-bold">Transcription</span>
                  <div className="bg-[black] px-4 py-2 mt-3 rounded-lg">
                    Click the mic to transcribe live in English or select
                    another language.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pt-5 mb-[150px] mt-[30px]  max-sm:py-5 flex bg-new-color flex-col items-center justify-center">
              <div className="w-full h-full bg-transparent flex flex-col justify-center items-center">
                <div className="w-full">
                  <div className="w-full px-4 max-sm:px-0 sm:h-3/5 bg-transparent flex flex-col items-center m-auto">
                    <div className="w-full h-10 rounded-t-2xl flex items-center justify-center">
                      <span className="text-neutral-400 text-center leading-[3.45rem] px-6 max-sm:px-2 font-bold font-proximaBold text-[45px] max-sm:text-2xl py-6 max-sm:py-2 m-auto">
                        Enabling sales teams in leading companies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SearchBar setAnswer={setAnswer} />
            </div>
            <div className="mb-[100px]">
              {answer && (
                <div className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md max-w-3xl mx-auto">
                  <p className="whitespace-pre-line">{displayedText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage
