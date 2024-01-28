import React from 'react'
import { Table } from './components/Table';

function App() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='columns-3'>
          <img src="https://www.bing.com/th?id=OHR.ChannelOutback_ROW9844310249_UHD.jpg&w=3840&h=2160&c=8&rs=1&o=3&r=0" alt="" />
          <img src="https://www.bing.com/th?id=OHR.ChannelOutback_ROW9844310249_UHD.jpg&w=3840&h=2160&c=8&rs=1&o=3&r=0" alt="" />
          <img src="https://www.bing.com/th?id=OHR.ChannelOutback_ROW9844310249_UHD.jpg&w=3840&h=2160&c=8&rs=1&o=3&r=0" alt="" />
        </div>

        <div className='flex flex-row'>
          <div className='basis-1/4 bg-slate-500'>01</div>
          <div className='basis-1/4 bg-zinc-400'>02</div>
          <div className='basis-1/2 bg-red-300'>03</div>
        </div>

        <div className='flex flex-row justify-center'>
          <div className='basis-full md:basis-8/12 lg:basis-6/12 xl:basis-4/12 bg-orange-500'>
            <Table
              caption='Bootstrap Equivalent'
              head={['Tailwind', 'Bootstrap']}
              rows={[
                ['container', 'container'],
                ['flex flex-row', 'row'],
                ['basis-full md:basis-8/12', 'col-md-8 col-lg-6']
              ]}
            />
          </div>
        </div>
        
        <div className='grid grid-cols-1 gap-4'>
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div>

      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://www.bing.com/th?id=OHR.ChannelOutback_ROW9844310249_UHD.jpg&w=3840&h=2160&c=8&rs=1&o=3&r=0" alt="" />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Company retreats
            </div>
            <a href="#" className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
              Incredible accommodation for your team
            </a>
            <p className='mt-2 text-slate-500'>
              Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to to just that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
