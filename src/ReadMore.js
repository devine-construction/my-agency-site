import React, { useState } from 'react';
import './App.css';

export default function ReadMore({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  // Turn children into an array so we can split off the first element
  const items = React.Children.toArray(children);
  const first = items[0];
  const rest  = items.slice(1);

  return (
    <div className="read-more">
      {/* Always-visible first bit */}
      {first}

      {/* Collapse/expand the rest */}
      {rest.length > 0 && (
        <>
          <div className={`content-wrapper ${isOpen ? 'open' : 'collapsed'}`}>
            {rest}
          </div>
          <button
            className="read-more-toggle"
            onClick={() => setIsOpen(o => !o)}
          >
            {isOpen ? 'See less' : 'See more'}
          </button>
        </>
      )}
    </div>
  );
}
