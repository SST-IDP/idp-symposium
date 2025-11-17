
import abscs from "../assets/logos/citysprouts.png";
import affinidi from "../assets/logos/affinidi.png";
import awwa from "../assets/logos/awwa.png";
import bii from "../assets/logos/bii.png";
import dukenus from "../assets/logos/dukenus.png";
import fortebiotech from "../assets/logos/fortebiotech.png";
import hwn from "../assets/logos/hwn.png";
import infineon from "../assets/logos/infineon.png";
import kkh from "../assets/logos/kkh.png";
import magorium from "../assets/logos/magorium.png";
import nie from "../assets/logos/nie.png";
import nitto from "../assets/logos/nitto.png";
import nni from "../assets/logos/nni.png";
import vdc from "../assets/logos/vdc.png";
import gws from "../assets/logos/gws.png";
import sick from "../assets/logos/sick.png"
import nuspace from "../assets/logos/nuspace.png";
import sit from "../assets/logos/sit.png";
import nccs from "../assets/logos/nccs.png";
import irp from "../assets/logos/irp.png";
import bac from "../assets/logos/bac.png";
import tll from "../assets/logos/tll.png";
const exhibitions = [
  {
    projectId: "HWN",
    title: "To create apps/digital tools to help individuals with special needs in learning.",
    members: [
      "DARIUS YONG",
      "KENZIE VIMALAPUTTA IRAWAN",
      "JANELLE LEE JIA YEN (LI JIAYAN)",
    ],
    organization: "HWN, MINDS, Technical Mentors"
  ,
    logo: hwn,
    synopsis:
      "People with intellectual disabilities (PwIDs) often face communication barriers that lead to social isolation and dependence on caregivers. Many struggle with existing assistive tools, which are often too complex or require literacy skills they may not have. Our project addresses this challenge by asking: How can we help adults with intellectual disabilities—who mainly communicate non-verbally or with simple words—interact more effectively with the community in their daily lives using digital tools? To answer this, we developed a simple, engaging flashcard-based communication app that uses visual and audio-supported phrases to help PwIDs express themselves. With its intuitive design, customisable options, and gamified features such as character creation and daily challenges, the app promotes digital and social inclusion—empowering PwIDs to communicate with greater confidence and participate more fully in Singapore’s inclusive society.",
  },
  {
    projectId: "VDC",
    title: "Optimisation of Plant Growth for the Vertical Farming System using Internet of Things",
    members: [
      "ZAVIER ONG YONG ZHI",
      "IVANKA WEN",
      "ONG YU SUAN ASHLEIGH",
      "VARCHEL HO ZI XIONG",
    ],
    organization: "Vidacity",
    logo: vdc,
    synopsis: "Singapore’s significant reliance on imported food accentuates the need to strengthen local agricultural resilience and productivity as part of the nation’s efforts to enhance food security and sustainability. In alignment with this objective, the project titled “Optimisation of Plant Growth for the Vertical Farming System using Internet of Things (IoT)” investigates the application of IoT technologies to optimise plant growth efficiency within aquaponic systems. The developed prototype incorporates a network of sensors to monitor critical environmental parameters, including pH, electrical conductivity, dissolved oxygen, temperature, and water flow rate. Data collected from these sensors are transmitted via an ESP32 microcontroller to a cloud-based Blynk interface, facilitating real-time monitoring, data visualisation, and analytical assessment. The continuous acquisition and interpretation of environmental data enable precise adjustments to maintain optimal growth conditions for plants. By leveraging IoT-enabled automation and data analytics, this project seeks to advance the efficiency, scalability, and sustainability of urban farming practices, thereby contributing to Singapore’s long-term vision of a robust and self-sufficient agri-food ecosystem.",
  },
  {
    projectId: "KKH-SIT",
    title: "Robotics using Temi Bot: Non-patient facing Bot",
    members: ["KWEK EN XIN, RISSA", "BRYAN TAN JIN XIAN", "KEITH LIM KAI FOO"],
    organization: "KKH, SIT",
    logo: kkh,
    synopsis:
      "This projects aims to upgrade an existing Temibot, which delivers medical specimens within the laboratory. The students were tasked to reprogramme the movement to be more efficient, improve the documentation process and increase the security of the box.",
  },
  {
    projectId: "AWWA-Vivita",
    title: "Designing a mobile storage system for storing and moving equipment to different locations of the early intervention centres.",
    members: [
      "JARON NG YU XUAN (HUANG YOUXUAN)",
      "JAYDEN LIM JUN YANG",
      "TOK KONG YEW (ZHUO KANGYOU)",
    ],
    organization: "AWWA VIVITA",
    logo: awwa,
    synopsis: "This project aims to design a mobile storage system for early intervention centres to improve the storage and movement of equipment across different activity areas. Staff in these centres often handle various educational and therapeutic materials, facing challenges in organization and transport. The proposed solution will focus on mobility, safety, accessibility, and space efficiency. Through research, ideation, and prototyping, the design will include features such as modular compartments, ergonomic handles, lightweight materials, and lockable wheels to enhance ease of use. By addressing these needs, the project seeks to streamline daily operations and create a more efficient and supportive learning environment for both educators and children.",
  },
  {
    projectId: "AFND",
    title:
      "Klassenkreis: The private all-in-one education platform",
    members: ["EZEKEL YINGJIE WEDEMEYER", "GOH MIN WEN, TED","MATTHEW ADRIEL TJIANDRA"],
    organization: "Affinidi",
    logo: affinidi,
    synopsis:
      "Klassenkreis is an educational platform built on Affinidi Verifiable Credentials, enabling students to own their academic identity through blockchain-backed digital credentials. Unlike traditional LMS platforms that store transcripts in institutional databases, Klassenkreis uses passwordless authentication where students present cryptographically-signed VCs from their personal wallets—making achievements portable across any institution. The platform implements a dual-mode credential system: students log in with existing VCs (authentication mode) while earning new Kudos credentials for quality contributions (portfolio mode), both powered by the Affinidi Iota Framework for selective data disclosure. With privacy-first design, user-created data remain private on databases, yet accessible to others to achieve a collaborative environment, for example, pseudonymous feedback systems enable honest course discussions without identity exposure. AI-powered features including semantic search, quality assessment, and personalized study scheduling enhance the learning experience, but the core innovation is data sovereignty—students control their educational credentials, educators verify authenticity cryptographically, and institutions can trust without centralized gatekeepers. Built with Flutter Web, Express.js, and MongoDB Atlas, Klassenkreis demonstrates how education technology can prioritize student ownership over vendor lock-in.",
  },
  {
    projectId: "GWS-NITTO",
    title:
      "Cultivation of Algae biomass using a modular system",
    members: [
      "CAYDRAN MAH JEUN KEI (MA JUNQI)",
      "CALLUM LIM WEI JIE",
      "JOEN FOO XUN HAO",
    ],
    organization: "GWS Living Arts",
    logo: gws,
    synopsis:
      "This project explores the potential of microalgae cultivation as a sustainable method for carbon capture and utilization. Microalgae are fast-growing aquatic organisms capable of sequestering up to 100 gigatons of CO₂ annually, making them highly effective in mitigating carbon emissions. Leveraging Singapore’s abundant seawater and strong sunlight, outdoor algae cultivation presents an efficient and eco-friendly approach to enhance carbon fixation. The harvested algae can be repurposed for applications such as algae facades or converted into biochar, contributing to sustainable urban design and environmental resilience. As most current research on algae-based carbon capture remains confined to laboratory settings, this project highlights the importance of transitioning toward outdoor and real-world cultivation systems to fully realise the potential of microalgae in large-scale decarbonisation efforts.",
  },
  {
    projectId: "SICK",
    title:
      " Advanced Arcade Hammer Machine: Integrating SICK Sensors for Better Gameplay",
    members: [
      "KEVIN ANTHONY VELASCO ORJALO",
      "LAU JIA GUAN",
      "RIVERA ADRIEL HUYATID",
      "CHAN SI YEUI (CHEN SIRUI)",
    ],
    organization: "SICK",
    logo: sick,
    synopsis:
      "This Di’SPARK Capstone Project with SICK reimagines the classic strength-tester hammer machine into a safe, data-driven arcade experience. The team will integrate one or more SICK pressure sensors on the impact pad to capture peak force and impulse, apply signal conditioning to remove noise, and convert readings into calibrated, fair scoring. A SICK 2D LiDAR will monitor the swing zone to enable smart lockout and auto-ready states when the area is clear. A SICK vision camera will drive on-screen feedback, hit validation, and basic pose checks, creating engaging prompts and instant replays. Control runs on an industrial-grade stack with IO-Link where possible, logging all sessions for analytics such as average force, consistency, and queue throughput. The result is a robust showcase of applied sensing that improves safety, gameplay clarity, and audience appeal.This project aims to help elderly individuals embrace technology by addressing common challenges that they face. Through visits, we identified these issues and developed an app tailored to support seniors in overcoming them. The app includes a library of easy-to-follow instructional videos and a feature that allows seniors to request help from volunteers for personalized assistance. By solving these problems, we hope to encourage the elderly to use technology regularly, improving their quality of life and helping them stay current with technological advancements. Ultimately, the goal is for seniors to embrace and benefit from technology confidently.",
  },
  {
    projectId: "NUSP",
    title: "Modem Module capable of transmitting LoRa and LR-FHSS packets",
    members: [
      "LUKE GOH REN YONG",
      "LIM KAI JUN",
      "YEOH TIAN HUAI",
    ],
    organization: "NUspace",
    logo: nuspace,
    synopsis: "To develop a module that acts as an AT command modem, capable of transmitting data packets either via LoRa or LR-FHSS modulation, as set by the user. The modem would be used to send data to NuSpace’s IoT communication satellites. Students are to work with NuSpace engineers to develop both the hardware and software of the AT modem. The outcome would be a hardware product with pre-built software, making it a module that behaves like an AT command modem. Users of this modem would be able to issue AT commands to set the behaviour of the module and command it to transmit data packets",
  },
  {
    projectId: "SIT",
    title: "Design and development of Space Robot Manipulator",
    members: [
      "TAN SIEW LING",
      "NG YONG CHUN",
      "SELVAKUMARAN MUGILAN",
      "SIM JIE YI, KIEREN",
    ],
    organization:
      "Singapore Institute of Technology (SIT)",
    logo: sit,
    synopsis:
      "To develop a space robot manipulator to fabricate 3D wireframe structures. The Bend-Forming process, driven by computer numerical control (CNC), specialises in creating intricate 3D wireframe structures. Combining CNC wire bending with mechanical joints constructs reticulated frameworks from wire feedstock. A crucial aspect of this process involves a path planning framework that leverages Euler paths and geometric calculations to generate fabrication instructions for diverse 3D wireframe geometries. Bend-Forming stands out as a versatile and energy-efficient technique that is well-suited for various applications. It offers a compelling solution, from rapid prototyping of wireframe structures to in-space manufacturing. In the context of this project, we aim to design and build a manipulator that will be attached to a space robot, enabling it to execute the bend-forming process.",
  },
  {
    projectId: "NCCS",
    title: "Ongoing development of a multimodal mobile application for predicting radioresistant nasopharynx carcinoma survival. ",
    members: [
      "TAY YEOW QIAN DAVIS",
      "TAN YI KAI ISAAC",
    ],
    organization:
      "NCCS",
    logo: nccs,
    synopsis:
      "This project focuses on the development of a medical application designed to assist in predicting patient outcomes following radioresistant npc recurrence. The app aims to translate complex clinical calculations into a simple, accessible, and reliable digital tool that supports medical professionals in their decision-making processes through data visualisation. Extensive research was conducted into the background of the cancer type, including its recurrence patterns and clinical factors that influence survival. This ensured that the design was based on a sound understanding of medical principles while remaining easy to use and ethically responsible. Strong consideration was also given to user experience and data privacy, with the system ensuring that all information is processed securely and confidentially. Looking ahead, the project has the potential to expand its capabilities through further validation and integration with hospital systems. With continued refinement, the application could evolve into a valuable clinical tool that enhances diagnostic efficiency and promotes more informed patient care. Some improvements that could be adapted with more time given could be making the app android supported and the localisation of the app through different languages.",
  },
  {
    projectId: "BII",
    title: "Analysing Ring-Enhancing Brain Lesions using Artificial Intelligence",
    members: [
      "CHONG ZHE HAO",
      "COEN PETER NG",
      "RISHAV GANGULY",
      "SEE EN MIN RUTH"
    ],
    organization: "BII",
    logo: bii,
    synopsis:
      "Ring-enhancing brain lesion (REBL) is a phenomena when patient’s brain CT and MRI scans show ring-like patterns, usually with a dark round shaped. These lesions may be caused by many reasons, e.g. tuberculous, fungal brain abscesses, cancers, toxoplasma, nocardia etc. Patients with REBL may experience rapidly deteriorating condition and can die within a week. Hence, a correct diagnosis is important. A correct diagnosis increases the chance of an appropriate treatment, saving the patient’s life. There is a need for a non-invasive method of diagnosing REBLs. In recent years, artificial intelligence (AI) has been increasingly utilised in clinical radiology for the detection, characterisation and monitoring of lesions. In this study, the Project Parties will investigate the utility of AI in characterising and classifying REBLs on brain imaging into infective and non-infective subgroups and in differentiating pyogenic brain abscess from the other infective etiologies.",
  },
  {
    projectId: "IRP",
    title: "Developing an app for visualising measurements of turbulence in fusion plasmas.",
    members: [
      "ARTH AGGARWAL",
      "ETHAN CHEONG XING HUA",
      "SOH ZHI KUAN JONATHAN (SU ZHIKUAN)",
    ],
    organization: "IRP",
    logo: irp,
    synopsis: "The quest for sustainable and reliable energy is a major modern challenge. At the forefront of this pursuit is fusion energy, which offers a potentially unlimited, carbon-free power source. However, a major hurdle to the economic viability of fusion energy is plasma turbulence, which causes significant energy wastage and reduces confinement time. This project aims to create a efficient, accessible, user-friendly application helping scientists to visualise, measure and interpret turbulence in fusion plasma. By designing and testing a novel data-fusion and interpretation framework, we applied software development and data visualisation techniques to develop our application. Our tool empowers scientists to move beyond raw data, helping them to identify turbulence, interpret correlations between fusion plasma parameters, and thus estimate optimal settings. We hope our application accelerates the path towards the viability of nuclear fusion as an energy source. This project was completed by Integrated Diploma Programme (IDP) students Ethan Cheong Xing Hua, Arth Aggarwal and Jonathan Soh Zhi Kuan from the School of Science and Technology, Singapore (SST), in close collaboration with and under the guidance of their mentor, Valerian Hall-Chen, from the Agency for Science, Technology and Research (A*STAR).",
  },
  {
    projectId: "TLL",
    title: "Establishment of Wolbachia-infected Aedes aegypti strain",
    members: [
      "LIM JIA HE (LIN JIAHE)",
      "NATHAN QUEK YI KHENG",
    ],
    organization: "Temasek Life Sciences Laboratory",
    logo: tll,
    synopsis: "Aedes mosquitoes transmit various devastating disease-causing arboviruses, including dengue, Zika, and chikungunya viruses. The rising cases of mosquito-borne diseases worldwide indicate the ineffectiveness of the current mosquito control methods and call for novel vector control methods. One of the emerging and promising vector control methods is Wolbachia-mediated population suppression. The endosymbiotic bacterium Wolbachia is present in about 50% of the insect population but is not found in Aedes aegypti. When introduced into Aedes aegypti, Wolbachia could induce cytoplasmic incompatibility (CI) and have virus-blocking activity. In this project, we aim to establish and test novel Wolbachia-infected Aedes aegypti (Singapore) strains and address their suitability for future use in the Wolbachia Project - Singapore.",
  },
  {
    projectId: "BAC",
    title: "Skin Microbiome in Young Adults",
    members: [
      "MUHAMMAD AAREEZ EESHAN BIN MUHAMMAD FAIZAL",
      "TEO BUE MENG (ZHANG BEIMING)",
    ],
    organization: "Bioacumen",
    logo: bac, 
    synopsis:
      "Our skin is teeming with trillions of microorganisms, like bacteria, fungi and viruses. Collectively, they are known as the skin microbiome, and it is part of a physical layer that protects us from the outside world. Everyone’s skin flora is unique and there are studies that show that skin conditions such as atopic dermatitis, psoriasis, and acne vulgaris are related to imbalances in skin microbiomes. In this project, the students will use PCR as a diagnostic tool to quantitate different microorganisms collected from each skin sample and correlate the genetic results with the current skin conditions of the test subjects.",
  },
  {
    projectId: "NIE (ECO)",
    title:
      "Investigating the Effect of Habitat Disturbances on Insectivory and Frugivory",
    members: ["FAITH NAOMI LIM JUN EN"," GOH ZONG DA, BRYAN", "ETHAN TAN EN YU","JUSTIN ANG WEN JIE (HONG WENJIE)"],
    organization: "National Institute of Education",
    logo: nie,
    synopsis:
      "Ecosystem functions, including frugivory and insectivory, are crucial processes that maintain ecological balance, yet they are increasingly impacted by human disturbances. This project investigates the effects of habitat fragmentation and deforestation on the ecosystem functions of frugivory and insectivory on Sentosa Island. Over the course of five weeks, data were collected across various fragments on the island. Human disturbances were quantified using distance to the nearest building and road, average canopy cover of the station, perimeter-to-area ratio of fragments, and total average precipitation. Rates of frugivory and insectivory were measured by counting the number of attacked clay models attached to natural foliage. Data analysis was done using generalised linear mixed models and the Second Order Akaike Information Criterion (AICc) for model selection. Our findings suggest that human disturbances differentially affect ecosystem functions, highlighting the need to consider function-specific responses in conservation planning and urban ecosystem management.",
  },
  {
    projectId: "MGRM",
    title:
      "Developing a Recycling Bin 2.0",
    members: ["POK VANN XYN","ANG LIANG TZE (WANG LIANGZI)", "KENT NG KEN CHONG (HUANG JIANCONG)"],
    organization: "Magorium",
    logo: magorium,
    synopsis:
      "The escalation of waste generation and the persistent prevalence of recyclate contamination are recognised as significant impediments to effective resource recovery in Singapore. In response, the project entitled Recycling Bin 2.0, undertaken in collaboration with the company Magorium, proposes the development of an advanced recycling receptacle intended for both institutional and public deployment. The system combines automated sorting mechanisms predicated on computer‑vision technology with real‑time monitoring and data transmission via an Internet of Things (IoT) architecture. Key features include: automated classification of materials to reduce contamination, bin‑full and utilisation sensors to optimise collection logistics, and a user‑centric mobile application that leverages gamification to foster public engagement—particularly among younger demographics. By integrating these technological and behavioural components, Recycling Bin 2.0 aims to enhance the quality of reusable material streams, increase user participation in recycling programmes, and align with national objectives for a circular economy and zero‑waste future.",
  },
];

export default exhibitions;