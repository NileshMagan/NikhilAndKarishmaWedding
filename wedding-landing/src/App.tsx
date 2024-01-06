import React from "react";
import CustomButton from "./Button";

const App: React.FC = () => {
  const headingTitle = "Nikhil & Karishma";
  const weddingInfoButton = {
    url: "https://www.theknot.com/us/nikhil-magan-and-karishma-hari-jan-2024",
    buttonName: "To Wedding Site",
  };

  const photoStorageInfoButton = {
    url: "https://onedrive.live.com/?id=2F9ECF7A82E448A9%21933&cid=2F9ECF7A82E448A9",
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
