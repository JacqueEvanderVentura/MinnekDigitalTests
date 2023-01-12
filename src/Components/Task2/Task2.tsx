import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import BreedList from "./BreedList";
import Instructions from "../Instructions/Instructions";

const Task2 = () => {
  const [breeds, setBreeds] = useState<Object>([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => setBreeds(res.data.message));
  }, []);

  return (
    <div className="container center">
      <Instructions url="https://github.com/Minnek-Digital-Studio/recruitment-test-fullstack#user-content-task-2" />
      <BreedList breeds={breeds} />
    </div>
  );
};
export default Task2;
