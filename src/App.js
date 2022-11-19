import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./shared/data";

function App() {
  const [persons, setPersons] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastPerson = persons.length - 1;
    if (index > lastPerson) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastPerson);
    }
  }, [index, persons]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const setClass = (index, order) => {
    if (index === order) {
      return "activeSlide";
    }
    if (order === index - 1) {
      return "lastSlide";
    }
    if (index === 0 && order === persons.length - 1) {
      return "lastSlide";
    }
    return "nextSlide";
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {persons.map((item, order) => {
          const { id, image, name, title, quote } = item;
          return (
            <article key={id} className={setClass(index, order)}>
              <img src={image} className="person-img" alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft onClick={() => setIndex(index - 1)} />
        </button>
        <button className="next">
          <FiChevronRight onClick={() => setIndex(index + 1)} />
        </button>
      </div>
    </section>
  );
}

export default App;
