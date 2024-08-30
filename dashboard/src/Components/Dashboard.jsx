import React, { PureComponent } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiPassPendingLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-200 text-black h-auto p-5">
      {/* 4 cards */}
      <div>
        <p>Overview</p>
        {/* cards */}
        <div className="flex gap-2">
          <div className="border-2 bg-white w-[313px] p-5 rounded-lg mt-3">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-semibold">Revenue</p>
              <HiOutlineCurrencyDollar className="size-5 opacity-80" />
            </div>
            <div className="flex gap-3 my-3">
              <p className="text-3xl font-bold">$537.83</p>
              <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-2xl px-2 font-semibold">
                {" "}
                <IoIosArrowUp /> 10.8%{" "}
              </p>
            </div>
            <div className="my-3">
              <p className="text-green-700 font-semibold">
                +$128.58 <span className="text-gray-500">than past week</span>
              </p>
            </div>
          </div>
          <div className="border-2 bg-white w-[313px] p-5 rounded-lg mt-3">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-semibold">Sales</p>
              <GrMoney className="size-5 opacity-80" />
            </div>
            <div className="flex gap-3 my-3">
              <p className="text-3xl font-bold">4859</p>
              <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-2xl px-2 font-semibold">
                {" "}
                <IoIosArrowUp /> 18.2%{" "}
              </p>
            </div>
            <div className="my-3">
              <p className="text-green-700 font-semibold">
                +47 <span className="text-gray-500">than past week</span>
              </p>
            </div>
          </div>
          <div className="border-2 bg-white w-[313px] p-5 rounded-lg mt-3">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-semibold">Customer</p>
              <MdOutlinePeopleAlt className="size-5 opacity-80" />
            </div>
            <div className="flex gap-3 my-3">
              <p className="text-3xl font-bold">2235</p>
              <p className="flex items-center gap-1 bg-red-100 text-red-700 rounded-2xl px-2 font-semibold">
                {" "}
                <IoIosArrowDown /> 12.4%{" "}
              </p>
            </div>
            <div className="my-3">
              <p className="text-red-700 font-semibold">
                -215 <span className="text-gray-500">than past week</span>
              </p>
            </div>
          </div>
          <div className="border-2 bg-white w-[313px] p-5 rounded-lg mt-3">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-semibold">Spending</p>
              <RiPassPendingLine className="size-5 opacity-80" />
            </div>
            <div className="flex gap-3 my-3">
              <p className="text-3xl font-bold">$219.65</p>
              <p className="flex items-center gap-1 bg-green-100 text-green-700 rounded-2xl px-2 font-semibold">
                {" "}
                <IoIosArrowUp /> 9.1%{" "}
              </p>
            </div>
            <div className="my-3">
              <p className="text-green-700 font-semibold">
                +$88.67 <span className="text-gray-500">than past week</span>
              </p>
            </div>
          </div>
        </div>

        {/* charts */}
        <div className="flex gap-3">
          <div className="border w-fit bg-white/70 mt-5 p-2">
            <LineChart
              width={800}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          {/* bar charts */}
          <div className="border w-fit bg-white/70 mt-5 p-2">
            <BarChart
              width={430}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
