import React from "react";
import "./home.css"; // Optional: for styling

const Card = ({ header, message, date }) => {
  return (
    <div className="card">
      <h3 className="card-header">{header}</h3>
      <p className="card-message">{message}</p>
      <p className="card-date">{date}</p>
    </div>
  );
};

const Home = () => {
  const cardData = [
    {
      id: 1,
      header: "Meeting",
      message: "Team meeting at 3 PM",
      date: "2024-10-16",
    },
    {
      id: 2,
      header: "Reminder",
      message: "Submit the project report by end of the day",
      date: "2024-10-17",
    },
    {
      id: 3,
      header: "Event",
      message: "Company event on Friday",
      date: "2024-10-18",
    },
    {
      id: 4,
      header: "Holiday",
      message: "Office closed on Monday",
      date: "2024-10-21",
    },
    {
      id: 5,
      header: "Deadline",
      message: "Submit tax forms by end of the week",
      date: "2024-10-19",
    },
  ];

  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card
          key={card.id}
          header={card.header}
          message={card.message}
          date={card.date}
        />
      ))}
    </div>
  );
};

export default Home;
