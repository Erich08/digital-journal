import { collection, getDoc, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { app, db } from '../firebaseConfig';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import FormControl, { useFormControl } from '@mui/material/FormControl';

const entryData = collection(db, 'entries');

const Entries = () => {
  const [entryName, setEntryName] = useState('');
  const [entryDesc, setEntryDesc] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const isEntryVisible = () => {
    setIsVisible(!isVisible);
  };

  const addEntryData = () => {
    addDoc(entryData, {
      entryName: entryName,
      entryDesc: entryDesc,
    }).then(() => {
      setEntryName(''), setEntryDesc('');
    });
  };

  const addName = (value) => {
    setEntryName(value);
  };

  const addDesc = (value) => {
    setEntryDesc(value);
  };

  return (
    <div className='w-full h-screen shadow-lg flex flex-col items-center justify-between mx-0 my-0'>
      <Button variant='outlined' onClick={isEntryVisible}>
        Add Entry
      </Button>
      {isVisible ? (
        <div className='bg-light-navy w-1/4 h-96 flex flex-col overflow-hidden rounded-lg mb-10'>
          <FormControl fullWidth>
            <TextField
              type='date'
              onChange={(e) => addName(e.target.value)}
              value={entryName}
              helperText="Select Today's Date"
            />
            <TextField
              label='Entry'
              type='text'
              onChange={(e) => addDesc(e.target.value)}
              value={entryDesc}
            />
            <div className='flex justify-center'>
              <Button variant='outlined' onClick={addEntryData}>
                Save Entry
              </Button>
              <Button variant='outlined' onClick={isEntryVisible}>
                Close
              </Button>
            </div>
          </FormControl>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Entries;
