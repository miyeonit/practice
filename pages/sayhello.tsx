import { useState, useEffect, useLayoutEffect } from "react";
import { NextPage, GetStaticProps } from "next";

const sayHello: NextPage = () => {
  const [data, setData] = useState({ name: "" });

  useLayoutEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((profile) => {
        setData(profile);
      });
  }, []);

  console.log(data, "data");
  return <div>hello {data.name}</div>;
};

export default sayHello;
