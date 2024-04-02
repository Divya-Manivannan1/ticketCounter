import { useParams } from "react-router-dom";
import { Employee } from "../../types/teamType";
import "./EmployeeProfile.scss";

type EmployeeTileProps = {
  employees: Employee[];
};

export const EmployeeProfile = ({ employees }: EmployeeTileProps) => {
  const { empId } = useParams();

  const employee = employees.find((emp) => emp.id === Number(empId));

  if (employee === undefined) return <p>Employee not found</p>;

  return (
    <div className="profile">
      <div className="profile__data">
        <h2 className="profile__name">{employee.name}</h2> <br />
        <p className="profile__heading">Designation: </p>
        <p className="profile__role">{employee.role}</p>{" "}
        <p className="profile__heading">Department: </p>
        <p className="profile__dept">{employee.profile.department}</p>{" "}
        <p className="profile__heading">Experience: </p>
        <p className="profile__exp">{employee.profile.experience}</p>
        <p className="profile__heading">Tech Stack: </p>
        <ul className="profile__tech">
          {employee.profile.techstack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <img
        className="profile__img"
        src={employee.profile.profilePicture ?? undefined}
        alt={`${employee.name}'s picture`}
      />
    </div>
  );
};
