export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 max-w-[60vw] text-center">
        I haven't implemented this route as it's not part of the assessment.
      </h1>
      <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  )
}
