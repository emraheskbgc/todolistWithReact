import { useState } from "react";
const Section = ({ lists, setLists, value, setValue }) => {
  //search filter
  const [searchQuery, setSearchQuery] = useState("");
  const searchFilter =
    searchQuery.length > 0
      ? lists.filter((list) =>
          list.todoName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : lists;

  //handle click all, active, completed
  const onClickList = () => {
    setLists(
      lists.map((i) => {
        const isTodoActive = lists.some((e) => {
          return e.todoActive === false;
        });
        return isTodoActive === true
          ? { ...i, todoActive: true }
          : { ...i, todoActive: false };
      })
    );
  };

  const handClickAll = (e) => {
    e.preventDefault();
    setLists(value);
  };

  const handClickActive = (e) => {
    e.preventDefault();
    setLists(lists.filter((list) => list.todoActive === false));
  };

  //handle click completed
  const handClickCompleted = (e) => {
    e.preventDefault();
    setLists(lists.filter((list) => list.todoActive === true));
  };
  //handle click clear completed
  const onClear = (e) => {
    e.preventDefault();
    setLists(lists.filter((list) => list.todoActive === false));
  };
  //handle uncompleted
  const unCompleted = lists.filter((item) => item.todoActive === false);

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </form>
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={onClickList}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {searchFilter.map((list, i) => (
            <li key={i} className={list.todoActive ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={list.todoActive}
                  onChange={() => {
                    setLists(
                      lists.map((i) => {
                        return i === list
                          ? { ...i, todoActive: !i.todoActive }
                          : i;
                      })
                    );
                  }}
                />
                <label>{list.todoName}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    setLists(lists.filter((remove) => remove !== list));
                  }}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompleted.length} items left</strong>
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              id="all"
              className={lists.todoActive === null ? "selected" : ""}
              onClick={handClickAll}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              id="active"
              className={lists.todoActive === false ? "selected" : ""}
              onClick={handClickActive}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              id="completed"
              className={lists.todoActive === true ? "selected" : ""}
              onClick={handClickCompleted}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={onClear}>
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default Section;
