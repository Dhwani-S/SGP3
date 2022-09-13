import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/purely_dhwani";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://thumbs.dreamstime.com/b/red-dress-mannequin-illustration-white-background-red-dress-mannequin-illustration-white-background-216081943.jpg"
              alt="Missori"
            />
            <Typography>Missori</Typography>
            <div id="visit">
              <Button onClick={visitInstagram} color="primary">
                Visit Instagram
              </Button>
            </div>

            <span>
              We have successfully dispatched more than 10k orders nationally and internationally.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
