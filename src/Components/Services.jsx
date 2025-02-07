import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Services = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="flex justify-center py-10">
        <h1 className="text-5xl font-bold font-oswald">Our Services</h1>
      </div>

      <div className="grid py-10   gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data && data?.map((d, id) => <Cards key={id} d={d}></Cards>)}
      </div>
    </div>
  );
};

export default Services;
