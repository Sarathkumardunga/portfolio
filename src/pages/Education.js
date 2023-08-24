import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

const Education = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Indian Institue of Engineering science and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Shibpur, WB</h4>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>
            Electronics and Telecommunication Engineering <b>CGPA: 8.33</b>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Verzeo Azure Cloud Computing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <p>Hands-on experience of working with Azure cloud services</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana Junior College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Visakhapatnam, AP
          </h4>
          <p>
            {" "}
            Intermediate <b>Percentile: 97.4%</b>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Saint Claret E.M High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Narasannapeta, AP
          </h4>
          <p>
            High School Education <b>CGPA: 10</b>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education