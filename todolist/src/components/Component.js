import React, { useState } from "react";
import Footer from "./Footer";
import Section from "./Section";

const Components = () => {
  const [lists, setLists] = useState([
    { todoName: "Taste JavaScript ", todoActive: true },
    { todoName: "Code furiously ", todoActive: true },
    { todoName: "Promote Mavo", todoActive: false },
    { todoName: "Give talks", todoActive: false },
    { todoName: "GWrite tutorials", todoActive: true },
    { todoName: "Have a life!", todoActive: false },
  ]);

  const [value, setValue] = useState(lists);
  return (
    <div>
      <div className="todoapp">
        <Section
          value={value}
          setValue={setValue}
          setLists={setLists}
          lists={lists}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Components;
