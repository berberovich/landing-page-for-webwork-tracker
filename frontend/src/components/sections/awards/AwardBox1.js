import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../../../assets/awards/logo.png";
const useStyles = createUseStyles({
  awardBoxContainer: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
    width: 173,
    backgroundColor: "white",
    color: "black",
    borderRadius: 18,
    textAlign: "center",
    alignSelf: "flexStart",
  },
  awardTitle: (props) => ({
    padding: 4,
    paddingBottom: 18,
    fontSize: props.titleFontSize,
    color: "#252530",
    fontWeight: 700,
    textAlign: "center",
  }),
});
function AwardBox1(props) {
  const { title, season, year, titleFontSize } = props;
  const classes = useStyles({
    titleFontSize,
  });
  return (
    <div className={classes.awardBoxContainer}>
      <div className="award-logo">
        <img src={logo} alt="" />
      </div>
      <p className={classes.awardTitle}>{title}</p>
      <p className="award-season">{season}</p>
      <p className="award-year">{year}</p>
    </div>
  );
}

export default AwardBox1;
