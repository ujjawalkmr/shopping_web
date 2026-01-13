import React from "react";
import "../css_file/About.css";
import Divider from "@mui/material/Divider";
import CardWithIcon from "../component/Container/CardWithIcon";
import PageImageWithText from "../component/PageImageWithText";
import AnimatedTextImg from "../component/AnimatedTextImg";

function About() {
  const values = [
    {
      title: "Sustainability",
      description: "Protecting our for future generations",
      icon: "🌱",
      className: "sustainability"
    },
    {
      title: "Quality",
      description: "Pure, wholesome dairy products",
      icon: "🥛",
      className: "quality"
    },
    {
      title: "Community",
      description: "Trusted local provider",
      icon: "🤝",
      className: "community"
    }
  ];
  return (<div className="about-container">
    <PageImageWithText />
    <AnimatedTextImg />
    <Divider sx={{ borderBottomWidth: 1, borderColor: '#3d3939ff', marginTop: '40px', marginLeft: "80px", marginRight: "80px", marginBottom: '20px' }} />
    <CardWithIcon
      values={values}
    />
  </div>);
}

export default About;
