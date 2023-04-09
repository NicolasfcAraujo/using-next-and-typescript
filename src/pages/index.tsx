import { useEffect, useState } from "react"

export default function Home() {
  const [height, setHeight] = useState<number|undefined>()

  useEffect(() => {
    setHeight(document.getElementById("navbar")?.clientHeight)
  }, [])

  return (
    <main>
      <div style={{height: `calc(100vh - ${height}px)`}} className="text-center flex flex-col justify-center">
        <h1 className="font-semibold text-7xl">Using Next.js and typescript</h1>
        <h3 className=" font-normal text-5xl">navigate to Todo page</h3>
      </div>
    </main>
  )
}
