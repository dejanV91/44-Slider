import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import persons from "./shared/data";

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index + 1);
      if (index === persons.length - 1) {
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
          <FiChevronLeft onClick={() => prevPerson()} />
        </button>
        <button className="next">
          <FiChevronRight onClick={() => nextPerson()} />
        </button>
      </div>
    </section>
  );
}

export default App;
