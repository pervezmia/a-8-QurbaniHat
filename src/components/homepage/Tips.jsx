import { Card } from "@heroui/react";
import React from "react";

const Tips = async () => {
  const res = await fetch("https://a-8-qurbani-hat.vercel.app/benefits.json");
  const data = await res.json();
  console.log(data);
  // console.log(res);
  return (
    <div>
        <h3 className="font-bold mt-10 mb-3">Tips and Tricks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {data.map((d) => (
        <div key={d.id}>
          <Card>
            <div className="space-y-4">
              <h2 className="font-black">{d.name} {d.title}</h2>
              
                <ul className="list-none">
                    {
                    d.benefits.map((b, inx )=> <li className="" key={inx}><p className="mt-3 p-2 rounded-xl bg-green-200" >{b}</p></li>)
                }
                </ul>
              
              <p>{d.description}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tips;
