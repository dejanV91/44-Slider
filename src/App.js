import React, { useEffect, useState } from "react";
import { Slides } from "./components/Slides";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import people from "./shared/data";

function App() {
  const [persons, setPeople] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index + 1);
      if (index === persons.length) {
        setIndex(0);
      }
    }, 6000);
    return () => clearInterval(timer);
  });

  const nextPerson = () => {
    if (index === persons.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex(persons.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <Slides />
        <button className="prev">
          <FiChevronLeft prevPerson={prevPerson} />
        </button>
        <button className="next">
          <FiChevronRight nextPerson={nextPerson} />
        </button>
      </div>
    </section>
  );
}

export default App;
