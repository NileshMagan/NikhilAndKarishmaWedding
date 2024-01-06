import React from "react";
import { Typography, Button, Grid } from "@mui/material";
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
    // <Container>
    <div className="appOuterContainer">
      <div className="appInnerContainer">
        <div className="appContents">
          {/* Title */}
          {/* <Typography
        variant="h3"
        align="center"
        // style={{ margin: "20px 0", fontFamily: "cursive" }}
        style={{ margin: "20px 0" }}
      >
      </Typography> */}
          <h3 className="title">{headingTitle}</h3>

          {/* Placeholder for the couple's image */}
          {/* <Grid container justifyContent="center" className="photoContainer">
        <img
          src={process.env.PUBLIC_URL + "/Photos/Nikhil & Karishma-1571.jpg"}
          alt="Couple"
          className="photo"
          // style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }}
        />
      </Grid> */}

          {/* Buttons */}
          {/* <Grid container spacing={2} justifyContent="center" margin={{ top: 20, bottom: 20 }}> */}
          <div className="buttonContainer">
            {/* <div 
          className="button" 
          onClick={() =>
            window.open(
              "https://www.theknot.com/us/nikhil-magan-and-karishma-hari-jan-2024",
              "_blank"
            )
          }>
          To Wedding Site
        </div> */}
            <CustomButton url={weddingInfoButton.url}>
              {weddingInfoButton.buttonName}
            </CustomButton>
            <CustomButton url={photoStorageInfoButton.url}>
              {photoStorageInfoButton.buttonName}
            </CustomButton>
            {/* <div 
          className="button" 
          onClick={() =>
            window.open(
              "https://onedrive.live.com/?id=2F9ECF7A82E448A9%21933&cid=2F9ECF7A82E448A9",
              "_blank"
            )
          }>
          Upload Wedding Photos
        </div> */}
          </div>

          {/* <Grid container spacing={2} justifyContent="center" className="buttonContainer">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              window.open(
                "https://www.theknot.com/us/nikhil-magan-and-karishma-hari-jan-2024",
                "_blank"
              )
            }
          >
            Wedding Home
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              window.open(
                "https://onedrive.live.com/?id=2F9ECF7A82E448A9%21933&cid=2F9ECF7A82E448A9",
                "_blank"
              )
            }
          >
            Upload Wedding Photos
          </Button>
        </Grid>
      </Grid> */}
          {/* </Container> */}
        </div>
      </div>
    </div>
  );
};

export default App;
