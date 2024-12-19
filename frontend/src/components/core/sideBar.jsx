import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function SideBar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div>
        <button
          className="h-10 w-10 cursor-pointer"
          onClick={() => setIsClicked(!isClicked)}
        > 
          <Bars3Icon className={`${isClicked ? 'text-white' : 'text-black'}`}/>
        </button>

        {isClicked && (
          <div className="absolute left-0 h-dvh overflow-y-hidden w-48 bg-gray-500 shadow-lg z-10" style={{ height: "calc(100dvh - 2.9rem)" }}>
            <ul className="py-1 text-black">
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert('Menu 1 Clicked')}
              >
                Menu 1
              </li>
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert('Menu 2 Clicked')}
              >
                Menu 2
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
