import Link from "next/link"

type Props = {

}

const Navbar = (props: Props) => {
  return (
    <div id="navbar" className="bg-gray-950 text-white text-xl px-4 py-4 space-x-4 font-normal">
        <Link href="/">Home</Link>
        <Link href="/Todo">Todo</Link>
    </div>
  )
}
export default Navbar