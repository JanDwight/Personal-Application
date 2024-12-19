import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function UserProfile() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="relative">
        <button 
          className="h-10 w-10 cursor-pointer" 
          onClick={() => setIsClicked(!isClicked)}
        >
          <UserCircleIcon className={`${isClicked ? 'text-white' : 'text-black'}`} />
        </button>

        {isClicked && (
          <div className="absolute right-3 w-48 bg-gray-500 rounded-b-lg shadow-lg z-10 origin-top duration-500" style={{ top: '-0%' }}>
            <ul className="py-1 text-black">
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert('Dark Mode Toggled')}
              >
                Dark Mode
              </li>
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert('Logged Out')}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
