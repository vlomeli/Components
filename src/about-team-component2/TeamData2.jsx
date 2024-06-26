import React from "react";
import "./AboutTeam2.css";
import pfp from "../images/pfp.png";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    bio: "Alice has over 10 years of experience in project management and loves leading teams to success.",
    image: pfp,
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    bio: "Bob is a full-stack developer with a passion for creating innovative solutions.",
    image: pfp,
  },
  {
    name: "Carol White",
    role: "UI/UX Designer",
    bio: "Carol designs with the user in mind and creates beautiful, intuitive interfaces.",
    image: pfp,
  },
  {
    name: "David Brown",
    role: "QA Engineer",
    bio: "David ensures our products meet the highest quality standards.",
    image: pfp,
  },
];

const TeamData2 = () => {
  return (
    <div className="about-team2">
      <h2>Option 2</h2>
      <div className="team-members2">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member2">
            <img
              src={member.image}
              alt={member.name}
              className="member-image2"
            />
            <div className="member-info2">
              <h3>
                {member.name} - {member.role}
              </h3>
              <p className="bio2">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamData2;
