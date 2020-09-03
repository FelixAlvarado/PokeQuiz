import React, { useEffect } from 'react';

export default function Home({getQuizes}) {

  useEffect(() => {
    
    getQuizes();

  });

  return (
    <div>
      <p>hello welcome</p>
    </div>
  );    
}
