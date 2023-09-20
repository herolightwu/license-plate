import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'LP1', label: 'LP1', top: '28%', left: '0', fontsize: 100, pdfTop: '15%' },
  { value: 'LP2', label: 'LP2', top: '32%', left: '0', fontsize: 90, pdfTop: '20%' },
  { value: 'LP3', label: 'LP3', top: '28%', left: '0', fontsize: 100, pdfTop: '15%' },
  { value: 'LP4', label: 'LP4', top: '28%', left: '18%', fontsize: 85, pdfTop: '15%' },
  { value: 'LP5', label: 'LP5', top: '28%', left: '0', fontsize: 100, pdfTop: '15%' },
  { value: 'LP6', label: 'LP6', top: '22%', left: '10%', fontsize: 90, pdfTop: '9%' },
  { value: 'LP7', label: 'LP7', top: '28%', left: '0', fontsize: 100, pdfTop: '15%' },
  { value: 'LP8', label: 'LP8', top: '28%', left: '0', fontsize: 100, pdfTop: '15%' },
  { value: 'LP9', label: 'LP9', top: '28%', left: '12%', fontsize: 90, pdfTop: '15%' },
  { value: 'LP10', label: 'LP10', top: '28%', left: '15%', fontsize: 90, pdfTop: '15%' },
  { value: 'LP12', label: 'LP12', top: '28%', left: '0', fontsize: 100, pdfTop: '15%' },
];

const Landing = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [title, setTitle] = useState('');
  const [sidsValue, setSIDSValue] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  let html2pdf;
  if (typeof window !== 'undefined') {
    html2pdf = require('html2pdf.js')
  }

  const handleGenerate = () => {
    const pdfName = selectedOption.value + "_" + title

    const element = document.getElementById('pdf-card')
    const opt = {
      filename: pdfName,
      image: { type: 'png', quality: 0.98 },
      html2canvas: { dpi: 96, scale: 1, letterRendering: true, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a5', orientation: 'landscape' }
    }
    html2pdf().from(element).set(opt).save()
  }

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div className='w-[100%]'>
      {/* header */}
      <div className='w-full pb-12 pt-4 px-12'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEVWpJ7OmeR6PMSY_fzNEYs2ScyKM5BytRC1eqfCIG9C8kuHb4O8pTDstgljJfA-dhcA&usqp=CAU'
          className='w-[150px]'
        />
      </div>

      {/* main body */}
      <div className='max-w-[1024px] flex flex-col justify-start items-center space-y-8 mx-auto'>
        <div className='w-full grid grid-cols-2 gap-8'>
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>Plate: </p>
            <Select
              
              onChange={handleChange}
              options={options}
              className='w-[70%]'
            />
          </div>          
        </div>

        <div className='w-full grid grid-cols-2 gap-8'>
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>Display Label: </p>
            <input
              type="text"
              value={title}
              maxLength='7'
              onChange={(e) => setTitle(e.target.value.toUpperCase())}
              placeholder="Enter text here"
              className='border border-[#ccc] rounded-md px-2 py-1.5 w-[70%]'
            />
          </div>
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>SIDS Number (Not Use): </p>
            <input
              type="text"
              value={sidsValue}
              onChange={(e) => setSIDSValue(e.target.value)}
              placeholder="Enter text here"
              className='border border-[#ccc] rounded-md px-2 py-1.5 w-[70%]'
            />
          </div>
        </div>

        <div className='w-full grid grid-cols-2 gap-8'>          
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>Name (Not Use): </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter text here"
              className='border border-[#ccc] rounded-md px-2 py-1.5 w-[70%]'
            />
          </div>
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>Address (Not Use): </p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter text here"
              className='border border-[#ccc] rounded-md px-2 py-1.5 w-[70%]'
            />
          </div>
        </div>

        <div className='w-full grid grid-cols-2 gap-8'>
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>Phone Number (Not Use): </p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter text here"
              className='border border-[#ccc] rounded-md px-2 py-1.5 w-[70%]'
            />
          </div>
          <div className='flex flex-row justify-start items-center space-x-8'>
            <p className='flex flex-1'>Email (Not Use): </p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter text here"
              className='border border-[#ccc] rounded-md px-2 py-1.5 w-[70%]'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center items-center hidden'>
          <div id='pdf-card' className='w-[816px] h-[528px] flex flex-row justify-center items-center -scale-x-100'>
            <div className='max-w-[672px] mx-auto relative my-[72px]'>
              <img
                src={'../assets/images/' + selectedOption.value + '.png'}
                className='w-[672px] h-[384px]'
              />
              <p
                className='absolute text-black text-center w-full'
                style={{
                  top: selectedOption.pdfTop, 
                  left: selectedOption.left, 
                  fontSize: selectedOption.fontsize + 30,
                  fontWeight: 200,
                  fontFamily: 'fantasy'
                }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-row justify-center items-center py-6'>
          <div className='max-w-[600px] mx-auto relative'>
            <img
              src={'../assets/images/' + selectedOption.value + '.png'}
              className='w-full'
            />
            <p
              className='absolute text-black text-center w-full'
              style={{
                top: selectedOption.top, 
                left: selectedOption.left, 
                fontSize: selectedOption.fontsize,
                fontWeight: 200,
                fontFamily: 'fantasy'
              }}
            >
              {title}
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-center w-full pb-12'>
          <button
            className='px-12 py-1 bg-blue-600 text-white border border-[#ccc] rounded-md text-center hover:bg-blue-400'
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
                
      </div>
    </div>
  )
}

export default Landing;