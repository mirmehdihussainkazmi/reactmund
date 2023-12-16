import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let itemsFunc = async () => {
      let { data } = await axios.get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      setUsers(data);
      console.log(data);
    };
    itemsFunc();
  }, []);

  return (
    <>
      <div className="container flex flex-wrap p-12">
        {users.map((data) => {
          return (
            <>
              <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.product_type}
                  </p>
                  <img
        className="bg-indigo-300 ..."
        src={data.image_link}
        alt={data.name}
      />
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.price} USD 
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}  
                  </p>
                
  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Users;
