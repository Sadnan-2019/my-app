import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/solid";


const Benefits = (props) => {
          // const {benefit} =props.benefit
          // console.log(props.benefit)
          return (
                    <div>
            <div>
            <h1 className="flex items-center">
          <CheckCircleIcon className="h-4 w-4 mr-2  text-green-600"></CheckCircleIcon>
          {props.benefit}
          </h1>   
            </div>
                    </div>
          );
};

export default Benefits;