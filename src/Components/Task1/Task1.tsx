import { useState } from "react";
import Instructions from "../Instructions/Instructions";

const Task1 = () => {
	const [arrayToSort, setArrayToSort] = useState(['n','2','&','a','l','9','$','q','47','i','a','j','b','z','%','8'])

function sort_preserve_place() {
  const preserved = arrayToSort
    .map((element: any, index: number) => [element, index])
    .filter(([element]:string[]) => /[^A-Za-z0-9]/.test(element));


  const rest = arrayToSort.filter(
    (_: string, index: number) => !preserved.some(([_, p_index]) => index === p_index)
  );

  const output = rest.reverse();

  for (let [p, i] of preserved) output.splice(i, 0, p);

  return output;
}

function sort(){
	sort_preserve_place();
	setArrayToSort(sort_preserve_place());
}

function handleSetArray(e: React.ChangeEvent<HTMLInputElement>) {
  setArrayToSort(e.target.value.split(""));
}

  return (
    <div className="container">
     <Instructions url='https://github.com/Minnek-Digital-Studio/recruitment-test-fullstack#user-content-task-1'/>
      <div>
        <label htmlFor="input">
          <small>Input</small>
        </label>
        <br />
        <input type="text" id="input" onChange={handleSetArray}/>
      </div>
      <div>
        <small>Output</small>
        <br />
        <div className="flex">
          <div className="gray-box">[{arrayToSort.join(", ")}]</div>
          <button onClick={sort}>Sort</button>
        </div>
      </div>
    </div>
  );
};

export default Task1