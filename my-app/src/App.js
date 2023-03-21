import React, { Component } from "react";
import { CardDetails } from "./CarDetails";
import Counter from "./Counter";
import { FilteredList } from "./FilteredList";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import Hello from "./Hello";
import Welcome from "./Welcome";

const objs = [
  {
    name: "matteo",
    id: 1,
    age: 21,
  },
  {
    name: "giorgio",
    id: 2,
    age: 44,
  },

  {
    name: "olivia",
    id: 3,
    age: 19,
  },
  {
    name: "asia",
    id: 4,
    age: 20,
  },
  {
    name: "marco",
    id: 5,
    age: 12,
  },
];

const car = {
  model: "kia picanto",
  year: 2010,
  color: "gray",
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Counter />
        <GithubUser username="Roberta93-web" />
        <GithubUserList />
        <CardDetails initialData={car} />
        <FilteredList list={objs} />
      </div>
    );
  }
}
