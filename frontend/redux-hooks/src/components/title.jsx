import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Title() {
  const title = useSelector((state) => state.TitleReducer.title);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "CHANGETITLE",
            payload: (Math.random() + 1).toString(36).substring(7),
          })
        }
      >
        change title
      </button>
    </div>
  );
}
