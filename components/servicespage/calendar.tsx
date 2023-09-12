import React, { useState } from 'react';
import { addDays, format, getMonth,startOfMonth } from 'date-fns';
import { DayPicker, DateRange } from 'react-day-picker';
import CarSelector from './Selector';


const currentDate = new Date();


export default function Calendar() {
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p className='flex justify-center'>Please Select the Days you would like to rent.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <div className='flex flex-col justify-center h-screen items-center'>
    <>
      <DayPicker
        styles={{
          caption: { color: 'dc2626' }
        }}
        id="test"
        mode="range"
        defaultMonth={startOfMonth(currentDate)}
        
        selected={range}
        footer={footer}
        onSelect={setRange}
      />
      
    </>
    <div>
      {range?.from && range?.to && (
        <h1>
          {format(range.from, 'PPP')} - {format(range.to, 'PPP')}
        </h1>
      )}
      <CarSelector />
      </div>
    </div>
    
  );
}