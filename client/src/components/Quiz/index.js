import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { quizes: state.quizes };
  };

  const ConnectedList = ({ quizes }) => (
    <ul>
      {quizes.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );

  const List = connect(mapStateToProps)(ConnectedList);
 export default List;