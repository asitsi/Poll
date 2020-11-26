import React from "react";
import ShareButton from "react-web-share-button";

const Sharebutton = () => {
  return (
    <>
      <ShareButton
        title="My Great Page"
        text="A really great page"
        url="http://www.greatpage.com"
        buttonStyle={{
          color: "#ffca08",
          background: "#fff",
          width: "100%",
          padding: "10px 12px",
          border: "none",
          position: "absolute",
          left: "0",
        }}
      />
    </>
  );
};

export default Sharebutton;
