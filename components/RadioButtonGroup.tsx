'use client';

import { useState, useMemo } from 'react';
import RadioButtonCard from '@/components/RadioButtonCard';

export default function RadioButtonGroup() {
  const [activeCard, setActiveCard] = useState(0);

  const LABEL = useMemo(() => ([
    {
      id: 1,
      title: '3 Sticks (-32%)',
      helperText: '$64.00/each',
      name: 'first item'
    },
    {
      id: 2,
      title: '2 Sticks (-22%)',
      helperText: '$71.00/each',
      name: 'second item'
    },
    {
      id: 3,
      title: '1 Stick (-15%)',
      helperText: '$75.00',
      name: 'third item'
    }
  ]), []);

  return (
    <div className='flex flex-row gap-4 justify-center mt-12'>
      {LABEL.map((item, index) =>
        <RadioButtonCard
          key={item.id}
          title={item.title}
          helperText={item.helperText}
          badge={index === 0 ? 'best deal' : ''}
          isActive={activeCard === index}
          setActiveCard={setActiveCard}
          index={index}
          name={item.name}
        />
      )}
    </div>
  );
}