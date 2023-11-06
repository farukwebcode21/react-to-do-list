import React, { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    setListData((prevListData) => {
      const updatedList = [...prevListData, activity];
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return id !== i;
    });
    setListData(updatedListData);
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
        <p className="list-heading">Here is your List:{"}"}</p>
        {listData.length > 0 &&
          listData.map((data, i) => (
            <div key={data}>
              <p className="listData">{data}</p>
              <button
                className="btn-position"
                onClick={() => removeActivity(i)}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todo;
