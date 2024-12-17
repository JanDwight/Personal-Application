import UserProfile from "./userProfile";

export default function Datatable() {
  return (
    <>
      <div className="flex flex-col w-[95%] ">
        <div className="flex justify-between mb-2">
          <button className="bg-green-500">New Item</button>

          <div>PRICE LIST</div>

          <div></div>
        </div>

        <table className="bg-gray-500 border-2 border-black w-full">
          <thead>
            <tr className="flex justify-between border-b-2 border-black px-2">
              <th>Items</th>
              <th>Price</th>
              <th>Store</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="flex justify-between border-b-2 border-black p-1">
              <td>Item 1</td>
              <td>Price 1</td>
              <td>Store 1</td>
              <tr>
                <button className="bg-green-500 px-1">edit</button>
                <button className="bg-red-500 px-1">delete</button>
              </tr>
            </tr>

            {/* This remove this*/}
            <tr className="flex justify-between p-1">
              <td>Item 2</td>
              <td>Price 2</td>
              <td>Store 2</td>
              <tr>
                <button className="bg-green-500 px-1">edit</button>
                <button className="bg-red-500 px-1">delete</button>
              </tr>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
