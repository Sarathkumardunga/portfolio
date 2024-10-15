import React from "react";
import "../styles/Education.css"
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
          date="Jan 2024 - Dec 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Arizona State Univerisity
          </h3>
          <h4 className="vertical-timeline-element-subtitle subtitle">
            Tempe, USA
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Master of Science
          </h4>

          <p>
            Software Engineering{" "}
            <b>
              CGPA: <span className="grade">3.89/4.00</span>
            </b>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Indian Institue of Engineering science and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle subtitle">
            Shibpur, WB
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>
            Electronics and Telecommunication Engineering{" "}
            <b>
              CGPA: <span className="grade">8.33/10.0</span>
            </b>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
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
          <h3 className="vertical-timeline-element-title title">
            Narayana Junior College
          </h3>
          <h4 className="vertical-timeline-element-subtitle subtitle">
            Visakhapatnam, AP
          </h4>
          <p>
            Intermediate{" "}
            <b>
              Percentile: <span className="grade">97.4%</span>
            </b>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title title">
            Saint Claret E.M High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle subtitle">
            Narasannapeta, AP
          </h4>
          <p>
            High School Education{" "}
            <b>
              CGPA: <span className="grade">10</span>
            </b>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education