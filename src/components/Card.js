import { CounterContext } from "@/context/CounterProvider"
import { useContext } from "react"

export const Card = ({ inter, url, title, body }) => {
  const counter = useContext(CounterContext)

  return (
    <a
          href={url}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            {title}{' '}{counter}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            {body}
          </p>
        </a>
)
}