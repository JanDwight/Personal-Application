export default function Login() {

  return(
    <>
      <div className="flex flex-col w-1/2 min-w-fit items-center ml-auto mr-auto p-4 pt-2 pb-6 bg-gray-300">
        {/* HEADER */}
        <div className="mb-2 font-bold text-lg">
          Login
        </div>

        {/* Body */}
        <div>
          <form action="">
            <div className="flex flex-col">
              <label htmlFor="">Username:</label>
              <input type="text" className="ml-2 border-2 border-black items-center"/>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="">Password:</label>
              <input type="password" className="ml-2 border-2 border-black items-center" />
            </div>

            <div className="w-fit text-xs text-blue-500 underline cursor-pointer">
              Forgot Password
            </div>

              <button className="mt-2 w-full items-center bg-green-400 hover:bg-green-500 rounded-md hover:shadow-slate-400 hover:shadow-md hover:text-white">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};