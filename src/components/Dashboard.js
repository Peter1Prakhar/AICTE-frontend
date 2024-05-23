import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { formsFilledState } from '../pages/atoms'; // Adjust the import path
import './dashStyles.css'

const Dashboard = () => {

  document.body.style.overflow = 'hidden';

  const formsFilled = useRecoilValue(formsFilledState);
  const [progress, setProgress] = useState(0);

  const notices = [
    'Approval Process Handbook 2024-2027 launched! Check here.',
    'The last date for submission of approval for new institutes is 24 December 2023.',
    'New APH corrigendum released. Check it out!',
  ];
  

  // Dummy payment data
  const paymentData = [
    { amount: 'Rs. 6000', reason: 'Registration', dateTime: '20/12/2023 02:25 AM', method: 'NEFT' },
    { amount: 'Rs. 3200', reason: 'TER charges', dateTime: '28/09/22 1:30 PM', method: 'Paytm' },
    // Add more payment entries as needed
  ];

  useEffect(() => {
    // Calculate progress when formsFilled state changes
    const totalForms = 21;
    const newProgress = (formsFilled / totalForms) * 100;
    setProgress(newProgress);
  }, [formsFilled]);

  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['blue', '#ccc'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '10%',
    rotation: -0.5 * Math.PI,
    circumference: 2 * Math.PI,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className='flex flex-row'>
        {/* Main Content */}
      <div className="flex bg-gray-200 p-4 rounded-md shadow-md mt-2 h-72 border border-blue-500">
        {/* Doughnut Chart */}
        <div className="w-64 h-64">
          <Doughnut data={data} options={options} />
        </div>

        {/* Text next to the Circular Progress Tracker */}
        <div className="flex flex-col ml-4">
          <h2 className="text-xl font-bold mb-4">Progress</h2>
          <p>Scrutiny Review: --</p>
          <br />
          <p>EVC Review: --</p>
        </div>
      </div>

      <div className=" flex bg-gray-200 p-4 mt-2 rounded-md shadow-md h-72 ml-4 w-custom border border-blue-500">
        <div flex flex-col>
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>     
      <table >
    <thead>
      <tr>
        <th className="border p-2">Last Online</th>
        <th className="border p-2">Activity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">2023-01-15 08:30 AM</td>
        <td className="border p-2">Logged in</td>
      </tr>
      <tr>
        <td className="border p-2">2023-01-14 03:45 PM</td>
        <td className="border p-2">Updated profile</td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
  <button className="text-blue-500 text-sm mt-2">View More</button>
  </div>
      </div>

      {/* Notice Board on the Right */}
      <div className="bg-gray-200 p-4 mt-2 ml-auto lg:w-1/4 rounded-md shadow-md border border-blue-500">
        <h2 className="text-xl font-bold mb-4">Notice Board</h2>
        <ul>
        {notices.map((notice, index) => (
            <li className="mb-2" key={index}
            style={{
              '--index': index,
              animation: 'slideUp 1s ease-in-out forwards',
              animationDelay: `calc(0.2s * var(--index))`,
            }}>
             
            &#9658; {notice}
            </li>
                    ))}
          </ul>
        </div>
      </div>
      {/* Payment Section */}
      <div className="mt-8 p-4 bg-gray-200 rounded-md shadow-md border border-blue-500">
        <h2 className="text-xl font-bold mb-4">Payment History</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2">Fees Paid</th>
              <th className="border p-2">Reason Paid</th>
              <th className="border p-2">Date and Time</th>
              <th className="border p-2">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index}>
                <td className="border p-2">{payment.amount}</td>
                <td className="border p-2">{payment.reason}</td>
                <td className="border p-2">{payment.dateTime}</td>
                <td className="border p-2">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="text-blue-500 text-sm mt-2">View More</button>
      </div>
    </div>
  );
}

export default Dashboard;
