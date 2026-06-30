import React, { useState } from "react";
const Results = () => {
  const getDomainColor = (domain) => {
    const colorMap = {
      "CP/Dev Team": "bg-gray-100 text-gray-800",
      "Content Team": "bg-gray-100 text-gray-800",
      "PR Team": "bg-gray-100 text-gray-800",
      "Events Team": "bg-gray-100 text-gray-800",
      "Design Team": "bg-gray-100 text-gray-800",
      "Tech Team": "bg-gray-100 text-gray-800",
    };
    return colorMap[domain] || "bg-gray-100 text-gray-800";
  };
  const [search, setSearch] = useState("");
  const results = [
    { "S.No": 1, Name: "B Maneesh Preetham", "Roll Number": "237R1A6710", Class: "III CSD-A", Domain: "Content Team" },
    { "S.No": 2, Name: "G. Charan", "Roll Number": "247R1a05AR", Class: "II CSE-F", Domain: "Content Team" },
    { "S.No": 3, Name: "DEEKSHITH REDDY", "Roll Number": "237R1A05V2", Class: "III CSE-E", Domain: "Content Team" },
    { "S.No": 4, Name: "Thanwika", "Roll Number": "247R1A05CC", Class: "II CSE-F", Domain: "Design Team" },
    { "S.No": 5, Name: "M.shiva", "Roll Number": "247R1A6647", Class: "II CSM-A", Domain: "Design Team" },
    { "S.No": 6, Name: "C.Neeshanth", "Roll Number": "247R1A6614", Class: "II CSM-A", Domain: "Design Team" },
    { "S.No": 7, Name: "P.Isaac", "Roll Number": "247R1A6651", Class: "II CSM-A", Domain: "Design Team" },
    { "S.No": 8, Name: "J.Varun Rao", "Roll Number": "247R1A6631", Class: "II CSM-A", Domain: "Design Team" },
    { "S.No": 9, Name: "Saketh vadnala", "Roll Number": "237R1A3321", Class: "III CSIT-A", Domain: "Design Team" },
    { "S.No": 10, Name: "B.MANI DEEPAK", "Roll Number": "247R1A05T7", Class: "II CSE-E", Domain: "Design Team" },
    { "S.No": 11, Name: "DHEERAJ", "Roll Number": "247R1A05U2", Class: "II CSE-E", Domain: "Design Team" },
    { "S.No": 12, Name: "MOHAMMED MAAZ", "Roll Number": "237R1A6738", Class: "III CSD-A", Domain: "Design Team" },
    { "S.No": 13, Name: "Kavya vanga sree", "Roll Number": "237R1A05R4", Class: "III CSE-D", Domain: "CP/Dev Team" },
    { "S.No": 14, Name: "Madhav", "Roll Number": "247r1a0525", Class: "II CSE-A", Domain: "CP/Dev Team" },
    { "S.No": 15, Name: "Karthik", "Roll Number": "247r1a0443", Class: "II ECE-A", Domain: "CP/Dev Team" },
    { "S.No": 16, Name: "Sreenir", "Roll Number": "247R1A66A2", Class: "II CSM-B", Domain: "CP/Dev Team" },
    { "S.No": 17, Name: "Anant Mishra", "Roll Number": "247R1A66K6", Class: "II CSM-D", Domain: "CP/Dev Team" },
    { "S.No": 18, Name: "A.Ashritha", "Roll Number": "247R1A6604", Class: "II CSM-A", Domain: "CP/Dev Team" },
    { "S.No": 19, Name: "A.Tejaswi", "Roll Number": "247R1A6605", Class: "II CSM-A", Domain: "CP/Dev Team" },
    { "S.No": 20, Name: "CHALIKWAR JAYA RUDRA", "Roll Number": "247r1a6674", Class: "II CSM-B", Domain: "CP/Dev Team" },
    { "S.No": 21, Name: "VADLA ABHILASH CHARY", "Roll Number": "237R1A05Y6", Class: "III CSE-E", Domain: "CP/Dev Team" },
    { "S.No": 22, Name: "Siddu Nampally", "Roll Number": "237R1A05FB", Class: "III CSE-G", Domain: "CP/Dev Team" },
    { "S.No": 23, Name: "A N Nanditha", "Roll Number": "237r1a66k3", Class: "III CSM-D", Domain: "PR Team" },
    { "S.No": 24, Name: "Vedh Rishi", "Roll Number": "237R1A05X4", Class: "III CSE-E", Domain: "PR Team" },
    { "S.No": 25, Name: "Cherukuri Sridevi", "Roll Number": "247R1A6618", Class: "II CSM-A", Domain: "PR Team" },
    { "S.No": 26, Name: "Harshini Vadlamuri", "Roll Number": "237R1A05CF", Class: "III CSE-F", Domain: "PR Team" },
    { "S.No": 27, Name: "SaiVikas", "Roll Number": "237R1A6768", Class: "III CSD-B", Domain: "Events Team" },
    { "S.No": 28, Name: "Charan", "Roll Number": "247R1A6728", Class: "II CSD-A", Domain: "Events Team" },
    { "S.No": 29, Name: "Amulya", "Roll Number": "247R1A05J0", Class: "II CSE-C", Domain: "Events Team" },
    { "S.No": 30, Name: "saiKeerthana", "Roll Number": "247r1a05el", Class: "II CSE-G", Domain: "Events Team" },
    { "S.No": 31, Name: "KADHAM TANUJ PATEL", "Roll Number": "247R1A6729", Class: "II CSD-A", Domain: "Events Team" },
    { "S.No": 32, Name: "HARAPRASAD SWAIN", "Roll Number": "247R1A6725", Class: "II CSD-A", Domain: "Events Team" },
    { "S.No": 33, Name: "MANI VARSHITH", "Roll Number": "237r1a05ej", Class: "III CSE-G", Domain: "Events Team" },
    { "S.No": 34, Name: "ASHISH", "Roll Number": "247r1a6748", Class: "II CSD-A", Domain: "Events Team" },
    { "S.No": 35, Name: "Adhinadh", "Roll Number": "247R1A6716", Class: "II CSD-A", Domain: "Events Team" },
    { "S.No": 36, Name: "linga chaithanya", "Roll Number": "247r1a66p0", Class: "II CSM-D", Domain: "Events Team" },
    { "S.No": 37, Name: "SHAIK FAREED", "Roll Number": "237R1A05BY", Class: "III CSE-F", Domain: "Tech Team" },
    { "S.No": 38, Name: "KOLLI OMPRATHAM", "Roll Number": "247R1A66N7", Class: "II CSM-D", Domain: "Tech Team" },
    { "S.No": 39, Name: "NIVEDH IRENI", "Roll Number": "247R1A66H1", Class: "II CSM-C", Domain: "Tech Team" },
    { "S.No": 40, Name: "VENU GOPAL", "Roll Number": "237R1A6627", Class: "III CSM-A", Domain: "Tech Team" },
  ];

  const filteredResults = results.filter((student) =>
    Object.values(student).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Code Titans 2k25</h1>
        <div className="flex justify-center mb-6">
          <input type="text" placeholder="Search" className="px-4 py-2 w-full max-w-xs border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-900 text-white">
              <tr>
                {["S.No", "Name", "Roll Number", "Department", "Team"].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredResults.length > 0 ? (
                filteredResults.map((student, index) => (
                  <tr key={student["S.No"]} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors`}>
                    <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student["S.No"]}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">{student.Name.toUpperCase()}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700 font-mono">{student["Roll Number"].toUpperCase()}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{student.Class}</span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span className={`px-2.5 py-1 rounded text-xs font-medium ${getDomainColor(student.Domain)}`}>{student.Domain}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="5" className="text-center py-8 text-sm text-gray-500">No results found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
