import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from 'firebase/firestore';
import { app, db } from '../firebaseConfig';
import React, { useState, useEffec, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';
import EntryArray from './EntryArray';

const entryData = collection(db, 'entries');

const Entries = () => {
  const [entryName, setEntryName] = useState('');
  const [entryDesc, setEntryDesc] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [entryArray, setEntryArray] = useState([]);

  //Entry data from firebase
  const getEntries = () => {
    getDocs(entryData).then((data) => {
      setEntryArray(
        data.docs.map((entry) => {
          return { ...entry.data(), id: entry.id };
        })
      );
    });
  };

  useEffect(() => {
    getEntries();
  }, []);

  // Adds entry data from state to database
  const addEntryData = () => {
    addDoc(entryData, {
      entryName: entryName,
      entryDesc: entryDesc,
      // Resets entry name and description state to clear form
    }).then(() => {
      setEntryName(''), setEntryDesc('');
      setIsVisible(false);
      getEntries();
    });
  };
  // Captures entry name from input field on change and sets the state
  const addName = (value) => {
    setEntryName(value);
  };
  // Captures entry description from input field on change and sets the state
  const addDesc = (value) => {
    setEntryDesc(value);
  };

  // Delete entry
  const deleteEntry = (id) => {
    const entryById = doc(db, 'entries', id);
    deleteDoc(entryById).then(() => {
      getEntries();
    });
  };

  return (
    <div className='h-screen flex w-1/2 justify-between mx-auto mt-20'>
      {/* Form input */}

      <div className='flex flex-col w-96 h-96 justify-between'>
        <h1 className='text-3xl text-white font-mono'>What is on your mind?</h1>

        <div className='flex flex-col h-96 bg-light-navy p-10 rounded-lg shadow-xl justify-between mt-10'>
          <FormControl className=''>
            <Input
              type='date'
              onChange={(e) => addName(e.target.value)}
              value={entryName}
            />
          </FormControl>
          <TextField
            helperText='Entry'
            sx={{ color: 'success.main' }}
            onChange={(e) => addDesc(e.target.value)}
            value={entryDesc}
          />
          <Button onClick={addEntryData}>Save</Button>
        </div>
      </div>
      {/* List of entries */}
      <div className='flex flex-col w-96 gap-10 h-96 overflow-scroll p-5 overflow-x-hidden'>
        <h1 className='text-2xl text-white font-mono text-center'>Entries</h1>
        <EntryArray
          entryArray={entryArray}
          entryData={entryData}
          getEntries={getEntries}
          deleteEntry={deleteEntry}
        />
      </div>
    </div>
  );
};

export default Entries;
