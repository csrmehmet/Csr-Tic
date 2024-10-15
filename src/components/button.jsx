/* eslint-disable react/prop-types */


const Button = ({ label, onClick, styleType = 'primary', disabled = false }) => {
 
  const baseStyle = 'px-4 py-2 rounded font-sans text-btn-text transition duration-300 ease-in-out';
  
  
  const styles = {
    primary: 'bg-primary hover:bg-light text-white',
    secondary: 'bg-secondary hover:bg-accent text-white',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  
  const disabledStyle = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseStyle} ${styles[styleType]} ${disabled ? disabledStyle : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
