import React, { useState } from "react";
const Results = () => {
  const getDomainColor = (domain) => {
    const colorMap = {
      "CP/Dev Team": "bg-blue-100 text-blue-800",
      "Content Team": "bg-purple-100 text-purple-800",
      "PR Team": "bg-orange-100 text-orange-800",
      "Events Team": "bg-green-100 text-green-800",
      "Design Team": "bg-indigo-100 text-indigo-800",
      "Tech Team": "bg-red-100 text-red-800",
      DevOps: "bg-yellow-100 text-yellow-800",
      "UI/UX Design": "bg-pink-100 text-pink-800",
      Blockchain: "bg-teal-100 text-teal-800",
      "Game Development": "bg-violet-100 text-violet-800",
    };

    const [search, setSearch] = useState("")

    return colorMap[domain] || "bg-gray-100 text-gray-800"; // default color for unmapped domains
  };
  const results = [
    {
      "S.No": 1,
      Name: "B Maneesh Preetham",
      "Roll Number": "237R1A6710",
      Class: "III CSD-A",
      Domain: "Content Team",
    },
    {
      "S.No": 2,
      Name: "G. Charan",
      "Roll Number": "247R1a05AR",
      Class: "II CSE-F",
      Domain: "Content Team",
    },
    {
      "S.No": 3,
      Name: "DEEKSHITH REDDY",
      "Roll Number": "237R1A05V2",
      Class: "III CSE-E",
      Domain: "Content Team",
    },
    {
      "S.No": 4,
      Name: "Thanwika",
      "Roll Number": "247R1A05CC",
      Class: "II CSE-F",
      Domain: "Design Team",
    },
    {
      "S.No": 5,
      Name: "M.shiva",
      "Roll Number": "247R1A6647",
      Class: "II CSM-A",
      Domain: "Design Team",
    },
    {
      "S.No": 6,
      Name: "C.Neeshanth",
      "Roll Number": "247R1A6614",
      Class: "II CSM-A",
      Domain: "Design Team",
    },
    {
      "S.No": 7,
      Name: "P.Isaac",
      "Roll Number": "247R1A6651",
      Class: "II CSM-A",
      Domain: "Design Team",
    },
    {
      "S.No": 8,
      Name: "J.Varun Rao",
      "Roll Number": "247R1A6631",
      Class: "II CSM-A",
      Domain: "Design Team",
    },
    {
      "S.No": 9,
      Name: "Saketh vadnala",
      "Roll Number": "237R1A3321",
      Class: "III CSIT-A",
      Domain: "Design Team",
    },
    {
      "S.No": 10,
      Name: "B.MANI DEEPAK",
      "Roll Number": "247R1A05T7",
      Class: "II CSE-E",
      Domain: "Design Team",
    },
    {
      "S.No": 11,
      Name: "DHEERAJ",
      "Roll Number": "247R1A05U2",
      Class: "II CSE-E",
      Domain: "Design Team",
    },
    {
      "S.No": 12,
      Name: "MOHAMMED MAAZ",
      "Roll Number": "237R1A6738",
      Class: "III CSD-A",
      Domain: "Design Team",
    },
    {
      "S.No": 13,
      Name: "Kavya vanga sree",
      "Roll Number": "237R1A05R4",
      Class: "III CSE-D",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 14,
      Name: "Madhav",
      "Roll Number": "247r1a0525",
      Class: "II CSE-A",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 15,
      Name: "Karthik",
      "Roll Number": "247r1a0443",
      Class: "II ECE-A",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 16,
      Name: "Sreenir",
      "Roll Number": "247R1A66A2",
      Class: "II CSM-B",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 17,
      Name: "Anant Mishra",
      "Roll Number": "247R1A66K6",
      Class: "II CSM-D",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 18,
      Name: "A.Ashritha",
      "Roll Number": "247R1A6604",
      Class: "II CSM-A",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 19,
      Name: "A.Tejaswi",
      "Roll Number": "247R1A6605",
      Class: "II CSM-A",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 20,
      Name: "CHALIKWAR JAYA RUDRA",
      "Roll Number": "247r1a6674",
      Class: "II CSM-B",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 21,
      Name: "VADLA ABHILASH CHARY",
      "Roll Number": "237R1A05Y6",
      Class: "III CSE-E",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 22,
      Name: "Siddu Nampally",
      "Roll Number": "237R1A05FB",
      Class: "III CSE-G",
      Domain: "CP/Dev Team",
    },
    {
      "S.No": 23,
      Name: "A N Nanditha",
      "Roll Number": "237r1a66k3",
      Class: "III CSM-D",
      Domain: "PR Team",
    },
    {
      "S.No": 24,
      Name: "Vedh Rishi",
      "Roll Number": "237R1A05X4",
      Class: "III CSE-E",
      Domain: "PR Team",
    },
    {
      "S.No": 25,
      Name: "Cherukuri Sridevi",
      "Roll Number": "247R1A6618",
      Class: "II CSM-A",
      Domain: "PR Team",
    },
    {
      "S.No": 26,
      Name: "Harshini Vadlamuri",
      "Roll Number": "237R1A05CF",
      Class: "III CSE-F",
      Domain: "PR Team",
    },
    {
      "S.No": 27,
      Name: "SaiVikas",
      "Roll Number": "237R1A6768",
      Class: "III CSD-B",
      Domain: "Events Team",
    },
    {
      "S.No": 28,
      Name: "Charan",
      "Roll Number": "247R1A6728",
      Class: "II CSD-A",
      Domain: "Events Team",
    },
    {
      "S.No": 29,
      Name: "Amulya",
      "Roll Number": "247R1A05J0",
      Class: "II CSE-C",
      Domain: "Events Team",
    },
    {
      "S.No": 30,
      Name: "saiKeerthana",
      "Roll Number": "247r1a05el",
      Class: "II CSE-G",
      Domain: "Events Team",
    },
    {
      "S.No": 31,
      Name: "KADHAM TANUJ PATEL",
      "Roll Number": "247R1A6729",
      Class: "II CSD-A",
      Domain: "Events Team",
    },
    {
      "S.No": 32,
      Name: "HARAPRASAD SWAIN",
      "Roll Number": "247R1A6725",
      Class: "II CSD-A",
      Domain: "Events Team",
    },
    {
      "S.No": 33,
      Name: "MANI VARSHITH",
      "Roll Number": "237r1a05ej",
      Class: "III CSE-G",
      Domain: "Events Team",
    },
    {
      "S.No": 34,
      Name: "ASHISH",
      "Roll Number": "247r1a6748",
      Class: "II CSD-A",
      Domain: "Events Team",
    },
    {
      "S.No": 35,
      Name: "Adhinadh",
      "Roll Number": "247R1A6716",
      Class: "II CSD-A",
      Domain: "Events Team",
    },
    {
      "S.No": 36,
      Name: "linga chaithanya",
      "Roll Number": "247r1a66p0",
      Class: "II CSM-D",
      Domain: "Events Team",
    },
    {
      "S.No": 37,
      Name: "SHAIK FAREED",
      "Roll Number": "237R1A05BY",
      Class: "III CSE-F",
      Domain: "Tech Team",
    },
    {
      "S.No": 38,
      Name: "KOLLI OMPRATHAM",
      "Roll Number": "247R1A66N7",
      Class: "II CSM-D",
      Domain: "Tech Team",
    },
    {
      "S.No": 39,
      Name: "NIVEDH IRENI",
      "Roll Number": "247R1A66H1",
      Class: "II CSM-C",
      Domain: "Tech Team",
    },
    {
      "S.No": 40,
      Name: "VENU GOPAL",
      "Roll Number": "237R1A6627",
      Class: "III CSM-A",
      Domain: "Tech Team",
    },
  ];

  
  return (
    <div className="container mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold text-emerald-800 mb-6 text-center">
        Code Titans 2k25
      </h1>
      <input type="text" placeholder="Search" className="m-3 outline-1 p-2 w-[300px] rounded-sm" onChange={(e)=>{setSearch(e.target.value)}} />

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider border-b border-emerald-500">
                S.No
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider border-b border-emerald-500">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider border-b border-emerald-500">
                Roll Number
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider border-b border-emerald-500">
                Department
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider border-b border-emerald-500">
                Team
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.map((student, index) => (
              <tr
                key={student["S.No"]}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-emerald-200 transition-colors duration-200`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student["S.No"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.Name.toUpperCase()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-mono">
                  {student["Roll Number"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {student.Class}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDomainColor(
                      student.Domain
                    )}`}
                  >
                    {student.Domain}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
