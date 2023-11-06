import React from "react";
import { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListDta = listData.filter((elem, id) => {
      return id != id;
    });
    setListData(updatedListDta);
  };
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your List:{")"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <div key={i}>
                <p className="listData">{data}</p>
                <button
                  className="btn-position"
                  onClick={() => removeActivity(i)}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Todo;
