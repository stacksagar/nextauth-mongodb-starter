import React from "react";

export const TableTr = ({ status, index, info }) => {
  return (
    <tr
      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} border-b`}
    >
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
      >
        {info?.amount}
      </th>
      <td className="py-4 px-6">
        <div className="flex flex-col gap-y-1">
          <p>{info?.number}</p>
          <p
            className={`${
              info?.pay_via?.toLowerCase() === "bkash" && "bg-[#cf2771]"
            } ${info?.pay_via?.toLowerCase() === "rocket" && "bg-[#89288f]"} ${
              info?.pay_via?.toLowerCase() === "nagat" && "bg-[#d0392c]"
            } px-2 py-1 text-xs text-white rounded w-fit capitalize`}
          >
            {info?.pay_via}
          </p>
        </div>
      </td>
      <td className="py-4 px-6">{info?.txnid}</td>
      <td className="py-4 px-6">
        <span
          className={`${status === "pending" && "bg-yellow-300"} ${
            status === "success" && "bg-green-600 text-white"
          } ${
            status === "rejected" && "bg-red-500 text-white"
          } px-2 text-sm py-1 rounded capitalize`}
        >
          {status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex tracking-wide flex-col items-start justify-start">
          <span> {new Date(info?.date).toDateString()} </span>
          <span> {new Date(info?.date).toLocaleTimeString()} </span>
        </div>
      </td>
    </tr>
  );
};
