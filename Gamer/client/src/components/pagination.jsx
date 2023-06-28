import React from 'react';

const Pagination = ({data,pageHandler}) => {

 // let pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 //console.log(data.length)

 let pageNumbers = []

 for(let i=1;i< Math.ceil(data.length/3)+1;i++ ){

    pageNumbers.push(i);
 }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {pageNumbers.map((page) => (
        <div key={page} className='pagebutton' onClick={ () => pageHandler(page)} 

        style={{ 
            margin: '0.5em',
            display: 'inline-block',
            padding: '1.5em',
            border: '1px solid black',
            borderRadius: '10%',
            width: '30px',
            height: '30px',
            textAlign: 'center',
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: '#f0f0f0',
            color: '#333',
          }}>

          {page}
        </div>
      ))}
    </div>
  );
}

export default Pagination
