import useCustomhook from "./useCutsomhook";

function Drafts() {
  const data = useCustomhook("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:drafts");

  const convertToAMPM = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  return (
    <>
      {console.log("static data is", data)}
      <div className="content">
        <div className="mail">
          {data && data.map((Value) => (
            <div key={Value.id} className="inbox-message-item">
              <div className="checkbox">
                <button className="btn">
                  <img src="./icons/check_box_outline_blank_black_24dp.svg" alt="Select" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                </button>
              </div>
              <div className="message-group-hidden">
                <button className="btn-alt btn-nofill drag-indicator">
                  <img src="./icons/drag_indicator_black_24dp.svg" alt="Drag" className="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                </button>
              </div>

              <button className="btn star">
                <img src="./icons/star_border_black_24dp.svg" alt="Not starred" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
              </button>

              <div className="message-default">

                <div className="message-sender message-content unread">
                  <span>{Value.payload.headers.find(item => item.name === "From").value}</span>
                </div>

                <div className="message-subject message-content unread">
                  <span>{Value.payload.headers.find(item => item.name === "Subject").value}</span>
                </div>

                <div className="message-separator message-content"> - </div>

                <div className="message-body message-content">
                  <span>{Value.snippet}</span>
                </div>

                <div className="gap message-content">&nbsp;</div>

                <div className="message-date center-text unread">
                  <span>{convertToAMPM(Value.payload.headers.find(item => item.name === "Date").value)}</span>
                </div>

              </div>

              <div className="message-group-hidden">
                <div className="inbox-message-item-options">
                  <button className="btn">
                    <img src="./icons/archive_black_24dp.svg" alt="Archive" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button className="btn">
                    <img src="./icons/delete_black_24dp.svg" alt="Delete" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button className="btn">
                    <img src="./icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>

                  <button className="btn">
                    <img src="./icons/access_time_filled_black_24dp.svg" alt="Snooze" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Drafts;
