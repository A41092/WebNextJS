const SeachTypeCar = () => (
    <form className="flex flex-col">
    <span className=" p-2 ">Hãng xe</span>
    <input
      type="text"
      className=" ml-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Nhập..."
    />
    <span className=" p-2 ">Tên xe</span>
    <input
      type="text"
      className=" w-max ml-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Nhập..."
    />
    <span className=" p-2 ">Đời xe</span>
    <input
      type="text"
      className=" w-max ml-2 mb-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Nhập..."
    />
  </form>
  );

export default SeachTypeCar;