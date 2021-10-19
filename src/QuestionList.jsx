import { useState } from 'react'
import NumberFormat from 'react-number-format';

const tiers = [
  {
    name: 'Apple',
    website: 'apple.com',
    return: 456,
    features: [
      'Think Different',
    ],
  },
  {
    name: 'Tesla',
    website: 'tesla.com',
    return:  2037,
    features: [
      'Electric vehicles can be better, quicker and more fun to drive than gasoline cars.',
    ],
  },
]

export default function QuestionList() {
  
  const initialAmount = 1000
  const fiveYearReturn = 456
  const investmentAfterFiveYears = fiveYearReturn * 0.01 * initialAmount + initialAmount;

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Buying a new Apple or Tesla is exciting.
</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            However, investing can be fun too! </p>
          <p className="mt-4 text-lg leading-6 text-gray-500">See how rich you would be if you had bought the company's stock.
          </p>
        </div>
        {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <img className='object-center h-50 w-50' src={'//logo.clearbit.com/' + tier.website} alt={tier.name + ' logo'}/>
                    </div>
                  </div>
                </div>
              ))}
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
           
            <div className="sm:col-span-2">
              <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
                Amount of Money
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="cost"
                  id="cost"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
          </form>
          
        </div>
        {investmentAfterFiveYears > 1 &&
          <div className="mt-5">
            <p className="text-2xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl block xl:inline">
            You would have <NumberFormat value={investmentAfterFiveYears} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={0} /> if you invested ${initialAmount} in Apple five years ago.
            </p>
          </div>
        }
      </div>
    </div>
  )
}
