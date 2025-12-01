import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`)

  const [review, setReview] = useState('')

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      console.error("Error fetching review:", error)
    }
  }

  return (
    <main className="h-screen w-full p-6 flex gap-4">
      <div className="w-1/2 h-full bg-black relative rounded-lg">
        <div className="h-full w-full rounded-lg bg-gray-900 p-3 border border-gray-700">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript || prism.languages.clike, "javascript")}
            padding={10}
            className="h-full w-full font-mono text-white"
            style={{
              fontSize: "16px",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          className="absolute bottom-4 right-4 bg-orange-400 text-white px-6 py-2 font-medium cursor-pointer rounded-lg transition hover:bg-indigo-600">
          Review
        </button>
      </div>
      <div className="w-1/2 h-full bg-white p-4 text-xl overflow-auto rounded-lg">
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  )
}

export default App
