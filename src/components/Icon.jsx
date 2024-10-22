/* eslint-disable react/prop-types */

const Icon = ({ icon, name }) => {
    return (
      <div className="flex flex-col items-center">
        <i className={`${icon} text-4xl text-gray-500 mb-2`}></i>
        <span className="text-sm text-gray-600">{name}</span>
      </div>
    );
  };
  
  export default Icon;  