import React from 'react';
import Book from './book';
import Llibres from './Llibres.json'


function App() {

  const books = Llibres.map(item => <Book title={item.title} author={item.author} />)
    
  return (
    <div>
      {books}  
    </div>
  );
 }

export default App;