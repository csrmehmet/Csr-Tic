import { teamData } from '../data';

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#252B42] mb-4">{teamData.title}</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          {teamData.description}
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {teamData.members.map((member) => (
          <div key={member.id} className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#23A6F0] font-bold mb-2">{member.position}</span>
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;