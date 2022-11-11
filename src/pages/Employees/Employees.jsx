import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

const Employees = () => {
  return (
    <>
      <PageHeader
        title="Page Header"
        subTitle="Page description"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <EmployeeForm />
    </>
  );
};

export default Employees;
