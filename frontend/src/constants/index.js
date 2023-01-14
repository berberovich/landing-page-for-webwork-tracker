import neonCircle1 from "../assets/neoncircle1.png";
import neonCircle2 from "../assets/neoncircle2.png";
import featureLogo1 from "../assets/features-images/featureLogo1.png";
import featureLogo2 from "../assets/features-images/featureLogo2.png";
import featureLogo3 from "../assets/features-images/featureLogo3.png";
import featureLogo4 from "../assets/features-images/featureLogo4.png";
import featureLogo5 from "../assets/features-images/featureLogo5.png";
import featureLogo6 from "../assets/features-images/featureLogo1.png";
import featureImage1 from "../assets/features-images/featureImage1.png";
import featureImage2 from "../assets/features-images/featureImage2.png";
import featureImage3 from "../assets/features-images/featureImage3.png";
import featureImage4 from "../assets/features-images/featureImage4.png";
import featureImage5 from "../assets/features-images/featureImage5.png";
import featureImage6 from "../assets/features-images/featureImage6.png";

export const plan1 = {
  id: 1,
  topRightImagePath: neonCircle1,
  duration: "Monthly",
  previousPrice: "$4.99",
  newPrice: "$2.49",
  features: [
    { id: 1, content: "14-day Free Trial" },
    { id: 2, content: "Access to All Features" },
    { id: 3, content: "24/7 Support" },
  ],
  bottomRightText: "*for 6 months",
};

export const plan2 = {
  id: 2,
  topRightImagePath: neonCircle2,
  duration: "Yearly",
  previousPrice: "$4.09",
  newPrice: "$2.05",
  features: [
    { id: 1, content: "14-day Free Trial" },
    { id: 2, content: "Access to All Features" },
    { id: 3, content: "24/7 Support" },
  ],
  bottomRightText: "",
};

function Feature(obj) {
  const { id, title, content, advantages, icon, image } = obj;
  this.id = id;
  this.title = title;
  this.content = content;
  this.advantages = advantages.map((adv, i) => {
    return {
      id: i + 1,
      content: adv,
    };
  });
  this.icon = icon;
  this.image = image;
}

const feature1 = new Feature({
  title: "Time Tracking With Screenshots",
  content:
    "Track the time your employees spend on work and get detailed information",
  advantages: [
    "4 Screenshot Modes",
    "Idle Time Tracking",
    "Synchronized Tracking",
    "Billable Hours",
  ],
  icon: featureLogo1,
  image: featureImage1,
});

const feature2 = new Feature({
  title: "Productivity Monitoring",
  content:
    "See how productive your employees are and make sure they don't burnout",
  advantages: [
    "App and Website Usage Tracking",
    "Activity Level Tracking",
    "Productivity Reports",
    "Work and Life Balance Popups",
  ],
  icon: featureLogo2,
  image: featureImage2,
});

const feature3 = {
  id: 3,
  title: "Task Management",
  content: "Assign, manage and work with tasks on Task Management system",
  advantages: [
    "Create Tasks and Projects",
    "Set Deadline",
    "Attach Files",
    "Customize Status Tags",
    "Create Subtasks",
  ],
  icon: featureLogo3,
  image: featureImage3,
};

const feature4 = {
  id: 4,
  title: "Communication Channels",
  content: "Communicate with your team without leaving WebWork Time Tracker",
  advantages: [
    "Team Chat",
    "Team Chat Mobile App",
    "Video Cells (beta)",
    "Whiteboard",
  ],
  icon: featureLogo4,
  image: featureImage4,
};

const feature5 = {
  id: 5,
  title: "HR Tools",
  content: "Keep your workspace organized with the help of HR tools",
  advantages: [
    "Attendance Monitoring and Management",
    "Time Off Requests",
    "Leave and Holiday Management",
  ],
  icon: featureLogo5,
  image: featureImage5,
};

const feature6 = {
  id: 6,
  title: "Online Reports",
  content: "Get detailed reports with all the tracked information",
  advantages: [
    "Timesheet",
    "Statistics",
    "Activity Level",
    "Tasks",
    "Geolocation",
  ],
  icon: featureLogo6,
  image: featureImage6,
};

export const features = [
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
];
