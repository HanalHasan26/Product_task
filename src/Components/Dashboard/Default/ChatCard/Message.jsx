import React from 'react';

const Message = ({ msg, divClass, spanClass }) =>{
return(
  <div className={`message-main ${divClass}`}><span className={`mb-0 ${spanClass}`}>{msg}</span></div>
);
};

export default Message;