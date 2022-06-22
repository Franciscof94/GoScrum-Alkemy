import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TasksForm from "../../components/TasksForm/TasksForm";
import TasksList from "../../components/TasksList/TasksList";
import { Wrapper } from "./Styles";

const Tasks = () => {
  return (
    <Wrapper>
      <div>
        <Header />
        <div>
          <TasksForm />
        </div>
      </div>
      <div>
        <TasksList />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Tasks;
