import axios from 'axios'
import { useState } from 'react'
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb'

interface Props {
  setAnswer: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ setAnswer }: Props) => {
  const [question, setQuestion] = useState('')

  function onSubmit() {
    const data = {
      text: question.toLowerCase(),
    }

    axios
      .post(process.env.NEXT_PUBLIC_URL as string, data)
      .then((response) => {
        if (response.status !== 404) {
          setAnswer(response.data.answer)
        } else {
          setAnswer('Answer not found, please try something else.')
        }
      })
      .catch((error) => {
        setAnswer('Answer not found, please try something else.')
        console.error('Error:', error)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-[50vh] ">
      {/* Logo */}
      <div className="mb-6 w-[200px] flex justify-center items-center gap-5">
        <img src="/fixit.svg" alt="fiXit Logo" className="w-10 h-10 inline" />
        <span className="text-4xl font-semibold">fiXit</span>
      </div>

      {/* Search Bar */}
      <div className="relative w-full sm:min-w-[60vw] mb-6 ">
        <input
          type="text"
          value={question}
          placeholder="SalesGPT can help you to browse uncovered topics"
          className="w-full p-4 pl-4 pr-10 text-gray-700 bg-white border-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          onClick={onSubmit}
        >
          <TbSquareRoundedArrowRightFilled className="w-7 h-7" />
        </button>
      </div>

      {/* Suggested Topics */}
      <div className="flex z-20 flex-wrap max-sm:flex-col gap-1 justify-center space-x-2">
        <span>Try Asking</span>
        {[
          'Budget analysis overview',
          'Tax proposals summary',
          'Expenditure breakdown',
          'Disinvestment targets explained',
          'Focus on fiscal responsibility',
        ].map((topic, index) => (
          <span
            key={index}
            className="px-4 py-2 mb-2 text-sm text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-blue-100"
            onClick={() => {
              console.log('got clicked')
              setQuestion(topic)
            }}
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
