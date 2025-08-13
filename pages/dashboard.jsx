import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';


// Add your full courses list here — make sure it has objects with keys: code, name, credit, status, attendance, semester, year
const courses = [
  { code: "MTS-111", name: "Calculus & Analytical Geometry", semester: "Spring 2022", status: "Pass", credit: "3" },
  { code: "CS-111", name: "Introduction to Computers", semester: "Spring 2022", status: "Pass", credit: "3" },
  { code: "HUM-114", name: "Islamic Studies/Ethics", semester: "Spring 2022", status: "Pass", credit: "3" },
  { code: "CS-113", name: "Programming Fundamentals", semester: "Spring 2022", status: "Pass", credit: "3" },
  { code: "ELL101", name: "Reading & Writing Skill", semester: "Spring 2022", status: "Pass", credit: "3" },
  { code: "CS-116", name: "Basic Electronics", semester: "Fall 2022", status: "Pass", credit: "3" },
  { code: "ELL 104", name: "Composition Writing", semester: "Fall 2022", status: "Pass", credit: "3" },
  { code: "CS-114", name: "Discrete Structures", semester: "Fall 2022", status: "Pass", credit: "3" },
  { code: "CS-112", name: "Object Oriented Programming", semester: "Fall 2022", status: "Pass", credit: "3" },
  { code: "HUM-120", name: "Pakistan Studies", semester: "Fall 2022", status: "Pass", credit: "3" },
  { code: "MTS-112", name: "Probability and Statistics", semester: "Fall 2022", status: "Pass", credit: "3" },
  { code: "CS-213", name: "Data Communication and Computer Networks", semester: "Spring 2023", status: "Pass", credit: "3" },
  { code: "CS-211", name: "Data Structure & Algorithms", semester: "Spring 2023", status: "Pass", credit: "3" },
  { code: "CS-215", name: "Digital Logic & Design", semester: "Spring 2023", status: "Pass", credit: "3" },
  { code: "SE-211", name: "Software Engineering", semester: "Spring 2023", status: "Pass", credit: "3" },
  { code: "EDU-0201", name: "Urdu Language", semester: "Spring 2023", status: "Pass", credit: "3" },
  { code: "EDU-0202", name: "Applied Physics", semester: "Spring 2023", status: "Pass", credit: "3" },
  { code: "CS-226", name: "Computer Architecture & Organization", semester: "Fall 2023",  status: "Pass", credit: "3" },
  { code: "MTS-222", name: "Linear Algebra", semester: "Fall 2023", status: "Pass", credit: "3" },
  { code: "MTS-224", name: "Multivariable Calculus", semester: "Fall 2023", status: "Pass", credit: "3" },
  { code: "CS-222", name: "Operating System", semester: "Fall 2023", status: "Pass", credit: "3" },
  { code: "MGT-290", name: "Psychology", semester: "Fall 2023", status: "Pass", credit: "3" },
  { code: "CS-311", name: "Theory of Automata", semester: "Fall 2023", status: "Pass", credit: "3" },
  { code: "MTS-311", name: "Differential Equations", semester: "Spring 2024", status: "Pass", credit: "3" },
  { code: "CS-214", name: "Database System", semester: "Spring 2024", status: "Pass", credit: "3" },
  { code: "CS-0485", name: "IT Project Management", semester: "Spring 2024", status: "Pass", credit: "3" },
  { code: "CS-313", name: "Web Design and Development", semester: "Spring 2024", status: "Pass", credit: "3" },
  { code: "CS-315", name: "Microprocessor & Assembly Language", semester: "Spring 2024", status: "Pass", credit: "3" },
  { code: "MGT-211", name: "Principles of Management", semester: "Spring 2024", status: "Pass", credit: "3" },
  { code: "CS-424", name: "Artificial Intelligence", semester: "Fall 2024", status: "Pass", credit: "3" },
  { code: "CS-326", name: "Compiler Construction", semester: "Fall 2024", status: "Pass", credit: "3" },
  { code: "CS-413", name: "Design and Analysis of Algorithms", semester: "Fall 2024", status: "Pass", credit: "3" },
  { code: "CS-417", name: "Information Security", semester: "Fall 2024", status: "Pass", credit: "3" },
  { code: "CS-485", name: "Introduction to Neural Networks", semester: "Fall 2024", status: "Pass", credit: "3" },
  { code: "CS-317", name: "Visual Programming", semester: "Fall 2024", status: "Pass", credit: "3" },
  { code: "CS-452", name: "Data Encryption and Security", semester: "Spring 2025", status: "Pass", credit: "3" },
  { code: "CS-332", name: "Human Computer Interaction", semester: "Spring 2025", status: "Pass", credit: "3" },
  { code: "CS-415", name: "Numerical Computing", semester: "Spring 2025", status: "Pass", credit: "3" },
  { code: "CS-422", name: "Professional Practices", semester: "Spring 2025", status: "Pass", credit: "3" },
  { code: "CS-473", name: "Machine Learning Techniques", semester: "Spring 2025", status: "Pass", credit: "3" },
  { code: "ISL-601", name: "Quran o Hadith", semester: "Spring 2025", status: "Pass", credit: "3" },
  { code: "CS-463", name: "Data Mining", semester: "Fall 2025", status: "Enrolled", credit: "3", attendance: "2/3" },
  { code: "CS-499", name: "Project", semester: "Fall 2025", status: "Enrolled", credit: "3" },
  { code: "ISL-512", name: "Seerat and Tasawwuf", semester: "Fall 2025", status: "Enrolled", credit: "3", attendance: "2/3" }
];


const currentCourses = courses.filter(course => course.status === "Enrolled");
const passedCourses = courses.filter(course => course.status === "Pass");
const failedCourses = courses.filter(course => course.status === "Failed");

export default function Dashboard() {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('current');

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const studentData = JSON.parse(localStorage.getItem('student'));

    if (!loggedIn || !studentData) {
      router.push('/');
    } else {
      setStudent({
        ...studentData,
        name: "Waleed Hussain",
        regNo: "22-APH-27426",
        rollNo: "27426",
        program: "Bachelor of Science (Computer Science) BS (CS)",
        batch: "2022-2025",
        department: "Computer Science",
        cgpa: "2.8",
        currentSemester: "Fall 2025",
        currentYear: "8th Semester",
        Contact: "03191402404",
        picture: "/student.jpg",
        email: "waleedkhokharbusiness@gmail.com",
        address: "Rawalakot",
        Contact: "03191402404",
      });
    }
  }, [router]);

  if (!student) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Student Dashboard | MIU LMS</title>
      </Head>

      {/* Header */}
     <header className="text-white shadow-lg" style={{ backgroundColor: '#007B66' }}>

        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image 
              src="/logo.jpg" 
              alt="University Logo" 
              width={40} 
              height={40}
              className="rounded"
            />
            <h1 className="text-xl font-bold">MIU Learning Management System</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={student.picture}
                alt="Student"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3"></span>
            </div>
            <div>
              <p className="font-medium">{student.name}</p>
              <p className="text-xs text-blue-100">{student.regNo}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-white rounded-xl shadow-md p-4 h-fit sticky top-6">
          <nav>
            <ul className="space-y-1">
            {[
  { tab: 'profile', label: 'My Profile', icon: '👤' },
  { tab: 'current', label: 'Current Courses', icon: '📚' },
  { tab: 'history', label: 'Academic History', icon: '📝' },
  { tab: 'attendance', label: 'Attendance', icon: '✅' },
].map(({ tab, label, icon }) => (
  <li key={tab}>
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg font-sans ${
        activeTab === tab 
          ? 'bg-blue-100 text-blue-800 font-medium' 
          : 'hover:bg-gray-100 text-gray-900'
      }`}
      style={{ fontSize: '1rem' }}  // Matches typical base font size
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  </li>
))}

{/* Grand Report Button */}
<li>
  <button
    onClick={() => router.push('/GradeReport')}
    className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg font-sans ${
      activeTab === 'grand-report' ? 'bg-blue-100 text-blue-800 font-medium' : 'hover:bg-gray-100 text-gray-900'
    }`}
    style={{ fontSize: '1rem' }}
  >
    <span>📊</span>
    <span>Grand Report</span>
  </button>
</li>

{/* Logout Button */}
<li>
  <button
    onClick={() => {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('student');
      router.push('/');
    }}
    className="w-full text-left flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg text-red-600 font-sans"
    style={{ fontSize: '1rem' }}
  >
    <span>🚪</span>
    <span>Logout</span>
  </button>
</li>

            </ul>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1">
         {/* Profile Tab */}
{activeTab === 'profile' && (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
  <div className="p-4 text-white" style={{ backgroundColor: '#007B66' }}>
{/* Changed text-pink to text-pink-500 */}
      <h2 className="text-xl font-semibold">Student Profile</h2>
    </div>
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Student Picture */}
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <div className="relative mb-4">
            <Image
              src={student.picture}
              alt="Student"
              width={150}
              height={150}
              className="rounded-lg border-4 border-blue-100"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold"> {/* changed text-red to text-red-500 */}
              Verified
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg text-gray-900">{student.name}</h3> {/* added text-gray-900 */}
            <p className="text-blue-600">{student.regNo}</p>
            <p className="text-sm text-gray-700 mt-1">{student.program}</p> {/* changed to text-gray-700 */}
          </div>
        </div>

        {/* Student Details */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 font-medium">Personal Information</p> {/* changed to text-gray-700 */}
              <div className="mt-2 space-y-2 text-gray-900"> {/* add text-gray-900 here */}
                <p><span className="font-medium">Full Name:</span> {student.name}</p>
                        <p><span className="font-medium">Registration No:</span> {student.regNo}</p>
               
        
                <p><span className="font-medium">Roll Number:</span> {student.rollNo}</p>
                  <p><span className="font-medium">Address:</span> {student.address}</p>
              </div>
            </section>

            <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 font-medium">Academic Information</p> {/* changed to text-gray-700 */}
              <div className="mt-2 space-y-2 text-gray-900"> {/* add text-gray-900 */}
                <p><span className="font-medium">Program:</span> {student.program}</p>
                <p><span className="font-medium">Batch:</span> {student.batch}</p>
                <p><span className="font-medium">Current Semester:</span> {student.currentSemester}</p>
                <p><span className="font-medium">CGPA:</span> {student.cgpa}</p>
              </div>
            </section>

            <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 font-medium">Contact Information</p> {/* changed to text-gray-700 */}
              <div className="mt-2 space-y-2 text-gray-900"> {/* add text-gray-900 */}
                <p><span className="font-medium">Email:</span> {student.email}</p>
               
                <p><span className="font-medium">Phone:</span> {student.Contact}</p>
              </div>
            </section>

            <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 font-medium">University Details</p> {/* changed to text-gray-700 */}
              <div className="mt-2 space-y-2 text-gray-900"> {/* add text-gray-900 */}
                <p><span className="font-medium">Department:</span> {student.department}</p>
                <p><span className="font-medium">Passionate Developer:</span> {student.advisor}</p>
                <p><span className="font-medium">Status:</span> Regular Student</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{/* Current Courses Tab */}
{activeTab === 'current' && (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
    <div className="p-4 text-white" style={{ backgroundColor: '#007B66' }}>

      <h2 className="text-xl font-semibold">
        Current Semester Courses ({student.currentSemester})
      </h2>
    </div>
    <div className="p-4 sm:p-6">
      {/* Mobile Cards View */}
      <div className="md:hidden space-y-4">
        {currentCourses.map((course, idx) => {
          const [attended, total] = course.attendance
            ? course.attendance.split('/').map(Number)
            : [0, 0];
          const attendancePercent = total ? (attended / total) * 100 : 0;

          return (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Code</p>
                  <p className="font-medium text-gray-900">{course.code}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Credits</p>
                  <p className="font-medium text-gray-900">{course.credit}</p>
                </div>
              </div>
              
              <div className="mt-3">
                <p className="text-xs text-gray-500">Course Name</p>
                <p className="font-medium text-gray-900">{course.name}</p>
              </div>
              
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {course.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Attendance</p>
                  {course.attendance ? (
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${attendancePercent}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-900">{course.attendance}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-900">-</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Credit Hrs
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCourses.map((course, idx) => {
              const [attended, total] = course.attendance
                ? course.attendance.split('/').map(Number)
                : [0, 0];
              const attendancePercent = total ? (attended / total) * 100 : 0;

              return (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {course.code}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {course.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.credit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.attendance ? (
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className="bg-green-600 h-2.5 rounded-full"
                            style={{ width: `${attendancePercent}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-900">{course.attendance}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-900">-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}
         {/* Academic History Tab */}
{activeTab === 'history' && (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
   <div className="p-4 text-white" style={{ backgroundColor: '#007B66' }}>

      <h2 className="text-xl font-semibold">Complete Academic History</h2>
    </div>
    <div className="p-4 sm:p-6">
      {/* Filter Buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          All Courses ({courses.length})
        </button>
        <button className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Passed ({passedCourses.length})
        </button>
        <button className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
          Failed ({failedCourses.length})
        </button>
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden space-y-3">
        {courses.map((course, idx) => (
          <div 
            key={idx} 
            className={`border rounded-lg p-4 ${course.status === "Failed" ? "bg-red-50 border-red-200" : "border-gray-200"}`}
          >
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <p className="text-xs text-gray-500">Code</p>
                <p className="font-medium text-gray-900">{course.code}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Credits</p>
                <p className="font-medium text-gray-900">{course.credit}</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-xs text-gray-500">Course Name</p>
              <p className="font-medium text-gray-900">{course.name}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Semester</p>
              <p className="text-gray-900">{course.semester}</p>
            </div>

            <div className="mt-3">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                course.status === "Pass" ? "bg-green-100 text-green-800" :
                course.status === "Failed" ? "bg-red-100 text-red-800" :
                "bg-blue-100 text-blue-800"
              }`}>
                {course.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course, idx) => (
              <tr 
                key={idx} 
                className={course.status === "Failed" ? "bg-red-50 hover:bg-red-100" : "hover:bg-gray-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.code}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.semester}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.credit}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    course.status === "Pass" ? "bg-green-100 text-green-800" :
                    course.status === "Failed" ? "bg-red-100 text-red-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

          {/* Attendance Tab */}
          {activeTab === 'attendance' && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
             <div className="p-4 text-black" style={{ backgroundColor: '#007B66' }}>

                <h2 className="text-xl font-semibold">Attendance Summary</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">Overall Attendance</p>
                        <p className="text-2xl font-bold text-green-600">85%</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Good</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">Current Semester</p>
                        <p className="text-2xl font-bold text-blue-600">80%</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Satisfactory</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white border border-yellow-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">Classes Missed</p>
                        <p className="text-2xl font-bold text-yellow-600">4</p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Warning</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium mb-4">Course-wise Attendance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCourses.filter(c => c.attendance).map((course, idx) => {
                    const [attended, total] = course.attendance.split('/').map(Number);
                    const attendancePercent = (attended / total) * 100;

                    return (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800">{course.code} - {course.name}</h4>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                              <div
                                className="bg-green-600 h-2.5 rounded-full"
                                style={{ width: `${attendancePercent}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{course.attendance}</span>
                          </div>
                          <span className="text-sm text-gray-500">{course.semester}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
