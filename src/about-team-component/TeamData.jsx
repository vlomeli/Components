import React from "react";
import "./AboutTeam.css";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    bio: "Alice has over 10 years of experience in project management and loves leading teams to success.",
    image: "alice.jpg",
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    bio: "Bob is a full-stack developer with a passion for creating innovative solutions.",
    image: "bob.jpg",
  },
  {
    name: "Carol White",
    role: "UI/UX Designer",
    bio: "Carol designs with the user in mind and creates beautiful, intuitive interfaces.",
    image: "carol.jpg",
  },
];

const TeamData = () => {
  return (
    <div className="about-team">
      <h2>About the Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamData;
