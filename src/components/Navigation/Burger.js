import React from "react";

const Burger = ({ open, setOpen, navBar, main }) => {
  return (
    <div
      className={main ? "burger burger-main" : "burger"}
      open={open}
      onClick={() => setOpen(!open)}
    >
      {main ? (
        <>
          <span
            style={{
              backgroundColor: navBar
                ? open
                  ? "#fff"
                  : "#394655"
                : open
                ? "#fff"
                : "#fff",
              transform: open ? "rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              backgroundColor: navBar
                ? open
                  ? "#fff"
                  : "#394655"
                : open
                ? "#fff"
                : "#fff",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              backgroundColor: navBar
                ? open
                  ? "#fff"
                  : "#394655"
                : open
                ? "#fff"
                : "#fff",
              transform: open ? "rotate(-45deg)" : "none",
            }}
          />
        </>
      ) : (
        <>
          <span
            style={{
              backgroundColor: navBar
                ? open
                  ? "#fff"
                  : "#394655"
                : open
                ? "#fff"
                : "#394655",
              transform: open ? "rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              backgroundColor: navBar
                ? open
                  ? "#fff"
                  : "#394655"
                : open
                ? "#fff"
                : "#394655",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              backgroundColor: navBar
                ? open
                  ? "#fff"
                  : "#394655"
                : open
                ? "#fff"
                : "#394655",
              transform: open ? "rotate(-45deg)" : "none",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Burger;
