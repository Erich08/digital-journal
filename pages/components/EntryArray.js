import React from 'react';
import Button from '@mui/material/Button';
import doc from 'firebase/firestore';

const EntryArray = ({ entryArray, deleteEntry }) => {
  return (
    <div>
      {entryArray.map((entry) => {
        return (
          <div
            className='bg-light-navy mb-5 p-5 rounded-lg font-mono'
            key={entry.id}
          >
            {console.log(entry.id)}
            <h1 className='text-navy'>{entry.entryName}</h1>
            <p className='text-white'>{entry.entryDesc}</p>
            <div className='w-15 flex justify-center mt-5'>
              <Button
                variant='outlined'
                className=''
                onClick={() => deleteEntry(entry.id)}
              >
                Delete Entry
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntryArray;
