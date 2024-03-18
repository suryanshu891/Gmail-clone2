import React from 'react';

const Rightside = () => {
  return (
    <section className="app-container">

      <div className="app-group">

        <div className="app-item">
          <button className="btn">
            <img src="./icons/calendar_2020q4_2x.png" alt="Calendar" className="btn-icon btn-icon-sm" />
          </button>
        </div>

        <div className="app-item">
          <button className="btn">
            <img src="./icons/keep_2020q4v3_2x.png" alt="Keep" className="btn-icon btn-icon-sm" />
          </button>
        </div>

        <div className="app-item">
          <button className="btn">
            <img src="./icons/tasks2_2x.png" alt="Tasks" className="btn-icon btn-icon-sm" />
          </button>
        </div>

        <div className="app-item">
          <button className="btn">
            <img src="./icons/contacts_2x.png" alt="Contacts" className="btn-icon btn-icon-sm" />
          </button>
        </div>

        <div className="btn btn-nofill">
          <div className="hrt-rule btn-icon-sm"></div>
        </div>

        <div className="app-item">
          <button className="btn" disabled>
            <img src="./icons/add_black_24dp.svg" alt="Add" className="btn-icon btn-icon-sm btn-icon-disabled" />
          </button>
        </div>

      </div>

      <button className="btn">
        <img src="./icons/chevron_right_black_24dp.svg" alt="Chevron Right" className="btn-icon btn-icon-sm btn-icon-alt" />
      </button>

    </section>
  );
}

export default Rightside;
