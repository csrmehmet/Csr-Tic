
import { categoryIcons } from '../data';
import Icon from './Icon'; 

const IconSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-12 space-y-4 md:space-y-0">
      {categoryIcons.map((iconData, index) => (
        <Icon 
          key={index}
          icon={iconData.icon}
          name={iconData.name}
        />
      ))}
    </div>
  );
};

export default IconSection;