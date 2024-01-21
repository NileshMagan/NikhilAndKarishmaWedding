import React from "react";
import CustomButton from "./Button";

const App: React.FC = () => {
  const headingTitle = "Nikhil & Karishma";
  const weddingInfoButton = {
    url: "https://www.theknot.com/us/nikhil-magan-and-karishma-hari-jan-2024",
    buttonName: "Wedding Website",
  };

  const photoStorageInfoButton = {
    url: "https://bit.ly/NikhilAndKarishma",
    buttonName: "Upload Photos",
  };


  return (
    <div className="appOuterContainer">
      <div className="appInnerContainer">
        <div className="appContents">
          <h3 className="title">{headingTitle}</h3>
          <div className="buttonContainer">
            <CustomButton url={weddingInfoButton.url}>
              {weddingInfoButton.buttonName}
            </CustomButton>
            <CustomButton url={photoStorageInfoButton.url}>
              {photoStorageInfoButton.buttonName}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
