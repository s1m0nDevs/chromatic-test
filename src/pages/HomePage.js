import React from "react";
import "../webComponents/TodoItem.js";
import "../webComponents/ExpandableList.js";

export const HomePage = () => {
  return (
    <>
      <todo-item checked>
        TodoItem 1<span slot="description">Description</span>
      </todo-item>
      <todo-item>TodoItem 2</todo-item>
      <todo-item>TodoItem 3</todo-item>
      <ul is="expandable-list" data-expanded>
        <li>Item 1</li>
        <li>Item 2</li>
        <ul is="expandable-list" data-expanded>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </ul>
    </>
  );
};
