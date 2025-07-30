export const projects = [
    {
    id: "wip",
    name: "Projects Completed, but not yet added to the portfolio",
    description: "Involving... Ansys Mechanical, Fluid, and Thermal. Creo Flow. Table Tennis Ball Launcher.",
    image: `${process.env.PUBLIC_URL}/assets/images/projects/wip.png`,
    image1: ``,
    image2: ``,
    link: "",
    tags: ["Fluid/Thermal Analysis", "Mechanical Analysis", "Simulation", "Product Design"]
  },
  {
    id: "website-portfolio",
    name: "Portfolio Website",
    description: "A personal website built with React to showcase my work.",
    image: `${process.env.PUBLIC_URL}/logo512.png`,
    image1: ``,
    image2: ``,
    link: "",
    tags: ["React", "Web Development", "JavaScript"]
  },
  {
  id: "cold-plate-design",
  name: "Cold Plate Design for a Thermal Conduction Module (TCM)",
  description: "Designed and optimized a cold plate for thermal management in multi-chip modules (MCMs) using analytical methods and SolidWorks simulations, achieving a 17°C temperature reduction.",
  body: "In this project, I designed a cold plate for a Thermal Conduction Module (TCM) to manage heat dissipation in multi-chip modules (MCMs). The design process involved using analytical methods to calculate the required dimensions and materials for optimal thermal performance. I then created a 3D model in SolidWorks and performed a parametric study through simulations to validate the design. The final design achieved a significant temperature reduction of 17°C compared to the initial design, demonstrating the effectiveness of the cold plate in enhancing thermal management.",
  image: `${process.env.PUBLIC_URL}/assets/images/projects/tcm2.png`, // Replace with the actual image path
  image1: `${process.env.PUBLIC_URL}/assets/images/projects/tcm1.png`, // Replace with the actual image path
  image2: `${process.env.PUBLIC_URL}/assets/images/projects/tcm3.png`, // Replace with the actual image path
  link: "",
  tags: ["SolidWorks", "Product Design", "Fluid/Thermal Analysis", "Simulation"]
  },
  {
  id: "fea-solidworks-vs-matlab",
  name: "SolidWorks vs. MATLAB Structural Analysis",
  description: "Benchmarked Finite Element Analysis results from SolidWorks Simulation against custom MATLAB scripts for a cantilever beam, validating accuracy and highlighting solver trade-offs.",
  body:
    "In this study I modelled a cantilever beam in SolidWorks, ran static, buckling, and fatigue studies, then recreated the same case in MATLAB using my own 2D FEM code.  I compared displacement fields, principal stresses, solution time, and mesh-dependence.  The MATLAB solver matched SolidWorks' displacements within 1.8 % while running ~40 % faster on coarse meshes.  A full write-up with derivations, code snippets, and result plots is included in the linked PDF.",
  image:  `${process.env.PUBLIC_URL}/assets/images/projects/cs21.png`,
  image1: ``,
  image2: ``,
  pdf:    `${process.env.PUBLIC_URL}/assets/docs/cs2report.pdf`,   // <‑‑ PDF here
  tags: ["Mechanical Analysis", "SolidWorks", "MATLAB", "Simulation"]
  },
  {
  id: "rocket-launch-dynamics",
  name: "Rocket Launch Dynamics Simulation",
  description: "Developed a simplified model of rocket launch dynamics using MATLAB Simulink, accounting for various factors and complexities.",
  body: "In a team-based project for a modeling and simulation class, we used MATLAB Simulink to develop a model of rocket launch dynamics, governed by a forcing function, parameters, and independent variables. The model accounted for factors such as dry mass, fuel mass, thrust, drag, and environmental conditions. The process involved extensive research on rocket dynamics, governing equations, and specifications for components like rocket thrusters and nose cones. We created a basic Simulink model and then implemented complexities such as fuel consumption, variable thrust, variable drag, stages, and environmental factors. We researched specific rocket boosters to implement and test in the model, and then simulated various launch scenarios. The project culminated in a comparison of our results to real-life studies and rocket launch data.",
  image: `${process.env.PUBLIC_URL}/assets/images/projects/rld1.png`, // Replace with the actual image path
  image1: ``,
  image2: ``,
  link: "",
  tags: ["MATLAB", "Simulink", "Simulation"]
  },
  {
  id: "hydroponic-tower",
  name: "Hydroponic Tower",
  description: "Designed and built a hydroponic tower for growing plants with an efficient use of space.",
  body: "In this personal project, I built a hydroponic tower for growing plants. This farming method allows for efficient use of space and does not require soil. Parts were printed on an ELEGOO Neptune 4 Printer out of PETG. I selected PETG to minimize light and reduce mold formation, and because of its weather and UV-resistant properties. The system features a 24W submersible pump to deliver water to the top of the system. The system is then plugged into a smart plug that powers the pump on a regular interval, optimal for the types of plants in the system. 3D printing saves cost and time when compared to similar PVC setups.",
  image: `${process.env.PUBLIC_URL}/assets/images/projects/hpn.png`, // Replace with the actual image path
  image1: ``,
  image2: ``,
  link: "",
  tags: ["3D Printing", "Product Design", "SolidWorks", "Electronics"]
  },
  {
  id: "c-clamp-fea",
  name: "C-Clamp FEA",
  description: "Analyzed a C-Clamp using Finite Element Analysis (FEA) in SolidWorks to determine loads on the part and verified the results with hand calculations.",
  body: "In this project, I learned how to apply Finite Element Analysis (FEA) in SolidWorks to determine loads on a mechanical part. I then made calculations by hand to verify and validate the FEA results. In this case, I analyzed a C-Clamp which is used to attach work to a surface or bench securely. I have also done projects working on buckling and fatigue analysis.",
  image: `${process.env.PUBLIC_URL}/assets/images/projects/cclamp.png`, // Replace with the actual image path
  image1: ``,
  image2: ``,
  link: "",
  tags: ["SolidWorks", "Simulation", "Mechanical Analysis"]
  },
  {
  id: "amplifier-crossover-network",
  name: "Amplifier + Crossover Filter Network",
  description: "Designed and simulated an amplifier and crossover filter circuit to separate audio signal frequencies and achieve a 10 dB signal amplification.",
  body: "I designed and simulated an amplifier and crossover filter circuit using MATLAB, Simulink, and Simscape to separate audio signal frequencies and achieve a 10 dB signal amplification. This involved developing and testing high-pass and low-pass filters using FFT analysis and optimizing filter designs, such as Butterworth, Chebyshev, and Bessel, to ensure at least -12 dB attenuation for unwanted frequencies. I built and tested the physical circuits using lab equipment (breadboard, oscilloscope, jumper wire, resistors, op-amps, etc.) and compared the analog performance to MATLAB digital filters. The project culminated in a team-based presentation where we shared our findings and insights.",
  image: `${process.env.PUBLIC_URL}/assets/images/projects/acf.png`, // Replace with the actual image path
  image1: ``,
  image2: ``,
  link: "",
  tags: ["MATLAB", "Simulink", "Simscape", "Circuit Design", "Signal Processing", "Electronics"]
  },
  {
  id: "autonomous-vehicle-challenge",
  name: "Autonomous Vehicle Challenge",
  description: "Led a team to create a robot that used LiDAR and Ultrasonic Sensors to autonomously navigate an obstacle course.",
  body: "During this project, I led a team to create a robot that utilized LiDAR and Ultrasonic Sensors to autonomously navigate through a randomized obstacle course. Specifically, I wrote and optimized the pathfinding code in Arduino IDE (C++) so the robot completed the obstacle course without collisions. I also developed the original mechanical design of the carriage using SolidWorks and assisted with circuit organization.",
  image: `${process.env.PUBLIC_URL}/assets/images/projects/robot1.png`, // Replace with the actual image path
  image1: ``,
  image2: ``,
  link: "",
  tags: ["Arduino", "C++", "SolidWorks", "Robotics", "Electronics", "Circuit Design", "Product Design"]
  },
  {
    id: "environmental-monitor",
    name: "Environmental Monitoring System",
    description: "Developed an Indoor Monitoring System (IMS) with Arduino to measure temperature, humidity, and TVOCs.",
    body: "The Indoor Monitoring System (IMS) is designed to track indoor air quality by measuring temperature, humidity, and total volatile organic compounds (TVOCs). This data can be used to evaluate environmental conditions in indoor spaces, making the IMS a valuable tool for enhancing air quality and occupant comfort. I created the mechanical design in SolidWorks and 3D printed the custom housing to enclose the sensors. In addition, I developed the system’s wiring and integration to ensure reliable data collection.",
    image: `${process.env.PUBLIC_URL}/assets/images/projects/ems.png`,
    image1: ``,
    image2: ``,
    link: "",
    tags: ["Arduino","SolidWorks", "C++", "3D Printing", "Data Analysis", "Circuit Design", "Electronics", "Product Design"]
  },
  
  



]