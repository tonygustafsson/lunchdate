import React from 'react';

const DatesList = ({ dates, datesCreateAjaxPost, datesRemoveAjaxPost, newDateData }) => {
  return (
    <div className="DatesList">
      <h2>Dates</h2>

      <ul className="DatesList">
        {typeof dates !== "undefined" && dates.map((date) => {
          return (
            <li className="DateListItem" key={date.key}>
              Time: {date.time}<br />
              User: {date.user}<br />
              Place: {date.place}<br />
              TakeAway: {date.takeaway ? 'Yes' : 'No'}<br />
              Note: {date.note ? date.note : ''}<br />
              <a onClick={() => datesRemoveAjaxPost(date.key)}> [del]</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DatesList;
