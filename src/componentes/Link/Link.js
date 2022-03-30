import React from 'react';

const Link = (props) => {

          const{name,link} =props.route
          return (
                    <div>
                              <li className='mr-10  '>
                                        <a className='align-middle   ' href={link}>{name}</a>
                              </li>
                              
                    </div>
          );
};

export default Link;