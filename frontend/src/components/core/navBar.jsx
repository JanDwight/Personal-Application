import UserProfile from "./userProfile";

export default function NavBar() {
  return (
    <div className="flex bg-gray-500 h-fit min-w-fit justify-between items-end">
      <div className='flex justify-between w-1/4 min-w-fit ml-20'>
        <button>Menu 1</button>
        <button>Menu 2</button>
        <button>Menu 3</button>
      </div>

      <div className="mr-5">
        <UserProfile />
      </div>
    </div>
  )
}
