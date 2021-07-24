import React, { Component } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import arrayMove from "./arrayMove";

//Drag handler
const DragHandle = sortableHandle(() => (
  <span className={styles.dragHandler}>
    <FontAwesomeIcon icon={faBars} />
  </span>
));

//Draggable elements
const SortableItem = sortableElement(({ value }) => (
  <div className={styles.dragElement}>
    {value}
    <DragHandle />
  </div>
));

//Drag area
const SortableContainer = sortableContainer(({ children }) => {
  return <div className={styles.dragContainer}>{children}</div>;
});

class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Dinesh", "Mathi", "Mahesh", "Danny", "Prasad", "Deepak"]
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </SortableContainer>
    );
  }
}

export default DragAndDrop;