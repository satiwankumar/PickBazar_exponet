// import { Description } from 'containers/ProductDetailsBook/ProductDetailsBook.style';
import React, { useState } from 'react';

type ReadMoreProps = {
  more?: string;
  less?: string;
  character?: number;
};

const ReadMore = ({ children, more, less, character }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;

  function createMarkup(description) {
    return {__html: description};
  }
  


  return (
    <>
      {(children && children.length < character) || expanded
        ? <div  className="custome-ul" dangerouslySetInnerHTML={createMarkup(children)}/>
        : children.substring(0, character)}
      {children && children.length > character && !expanded && (
        <>
          <br />
          <span>
            <a
              href="#"
              onClick={toggleLines}
              style={{ color: '#009e7f', fontWeight: 700 }}
            >
              {more}
            </a>
          </span>
        </>
      )}
      {children && children.length > character && expanded && (
        <>
          <br />
          <span>
            <a
              href="#"
              onClick={toggleLines}
              style={{ color: '#009e7f', fontWeight: 700 }}
            >
              {less}
            </a>
          </span>
        </>
      )}
    </>
  );
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less',
};

export default ReadMore;
