import hwn from "../assets/logos/hwn.webp";
import kkh from "../assets/logos/kkh.png";
import awwa from "../assets/logos/awwa.png";
import sit from "../assets/logos/sit.png";
import nni from "../assets/logos/nni.png";
import nccs from "../assets/logos/nccs.jpeg";
import nie from "../assets/logos/nie.png";
import bac from "../assets/logos/bac.jpg";
import sick from "../assets/logos/sick.svg";
import bii from "../assets/logos/bii.webp";
import ttsh from "../assets/logos/ttsh.jpeg";
import dso from "../assets/logos/dso.jpeg";
import stm from "../assets/logos/stm.jpg";
import ghk from "../assets/logos/ghk.jpeg";
import nhcs from "../assets/logos/nhcs.png";

const exhibitions = [
  {
    projectId: "HWN",
    title: "Creation of a digital tool/ platform to enable us to enhance the skills development of youths",
    members: [
      "CAITLYN CHEN RUI EUNICE RUZSICSKA",
      "LIN LEI LEI PHYO",
      "GABRYL CHUA KAI EN",
      "SOW KAI XIAN LUCAS",
    ],
    organization: "HWN",
    logo: hwn,
    synopsis:
      "This project aims to enhance HWN’s existing training programmes through digital tools that enable youth volunteers to practise responding to a range of realistic scenarios. Through such simulations, volunteers can develop critical thinking, decision-making and communication skills while receiving opportunities to apply what they have learnt in a safe and conducive environment. The tool can also leverage HWN’s existing library of scenarios and learning resources while providing opportunities for repeated practice.",
  },
  {
    projectId: "KKH",
    title: "Neonatal resuscitation buddy",
    members: ["ASHTON TOH ZHI SHENG", "PRAKASH DHANVIN", "ASHER TAN KENG FONG"],
    organization: "KKH",
    logo: kkh,
    synopsis:
      "Doctors working in the neonatal department in paediatric hospitals frequently encounter situations where they have to prepare for the resuscitation of newborn infants. Sometimes these are emergency scenarios with little time to prepare thoroughly. Some infants may also have underlying conditions that require special considerations. The project aims to develop a phone application as a reference for doctors working in the neonatal department, to enable quick and accurate preparation of manpower, equipment, and drugs for the resuscitation of newborn infants.",
  },
  {
    projectId: "TTSH",
    title: "Linen Defect Detection Solution",
    members: ["TESSA LEE JIN EN", "TEO OWEN", "TOH HONG RUI, TREVOR (ZHUO HONGRUI)"],
    organization: "TTSH",
    logo: ttsh,
    synopsis:
      "The current manual process of identifying torn, stained, or defective linen and pyjamas in the hospital’s linen workflow is labour-intensive, time-consuming, and subject to human error. Defective items that are not detected may compromise patient comfort, safety, and satisfaction. This projects aims to develop a computer vision-based solution to detect torn, stained, or defective linen and pyjamas efficiently, thereby enhancing service reliability and patient experience while reducing staff workload and wastage.",
  },
  {
    projectId: "AWWA",
    title: "Designing innovative toys to increase engagement in play for children with special needs (continuation of 2024 CP)",
    members: ["YEO ZI QI", "AEGON CHEUNG HAO EN", "CHAN YEE JIE LUCAS"],
    organization: "AWWA",
    logo: awwa,
    synopsis:
      "This project aims to support children with special educational needs in developing essential everyday skills and greater independence through interactive play. Developed in collaboration with AWWA, the learning toy features five educational games focusing on colours, shapes, numbers, emotions and money. Using computer vision technology, the toy allows children to interact with familiar objects, including existing toys and materials at the centre. With adjustable difficulty levels and sensory-friendly features, the learning experience can be adapted to different abilities and needs. This innovative solution provides educators with an engaging and accessible tool to help children build confidence and practical life skills for greater independence.",
  },
  {
    projectId: "DSO",
    title: "Sound Counter-measures Robot Vehicle",
    members: ["ASHVIK DEV", "GABRIEL CONSTANTINE CHAN", "TEIW YONG SHENG JAYDEN"],
    organization: "DSO",
    logo: dso,
    synopsis:
      "This project aims to develop an autonomous robot that can detect and counter electronic jamming signals to maintain reliable communications in contested environments. Operating independently without wireless communication with its base, the robot will detect the direction of jamming signals, generate counter-signals to reduce interference, and autonomously return to its home base.",
  },
  {
    projectId: "STM",
    title: "An Interactive Demo Unit to Pique Interest in STEM Education Careers Among Primary & Secondary School Students",
    members: [
      "PHUA XUAN ZHI ETHAN",
      "YAP DANIELLE ELIZA SALANG",
      "LIM JUN PING, GORDON",
      "LUM SEN LOONG, ETHAN",
    ],
    organization: "STMicroelectronics",
    logo: stm,
    synopsis:
      "This project aims to interest students in STEM by bringing the inaccessible information from behind the doors of wafer fabrication labs to the general public through an interactive physical mini-fabrication lab. By simulating the processes in the prototype's fabrication labs, students can learn and visualise how a wafer changes throughout the production process. With the recreated Overhead Transport System (OTS), students can also learn more about how wafers are safely transported around the modern fab, thereby automating wafer production processes. This compact setup provides an engaging educational tool to expose youth to the semiconductor industry.",
  },
  {
    projectId: "SICK",
    title: "RFID-Based Asset Tracking System for R&D Lab Tools and Equipment",
    members: ["VICTORIA HO YING XUAN", "AW KAI BIN, ZYDEN", "EVAN TANG KAR MENG"],
    organization: "SICK",
    logo: sick,
    synopsis:
      "As the R&D lab grows, its expanding collection of tools and specialised equipment makes it increasingly difficult to locate items, manage inventory and maintain accountability for borrowed equipment. This project aims to design, develop and implement a passive RFID-based asset tracking system that combines hardware and software to monitor the borrowing and return of lab tools and equipment. Each item is fitted with a passive RFID tag, while strategically placed readers detect its movement and relay information to the software. The system is intended to improve equipment traceability, simplify the borrowing and return process, and support more efficient resource sharing and asset management.",
  },
  {
    projectId: "BII",
    title: "Using Artificial Intelligence to aid Living Well for Cancer Patients: Classifying Malignancy of Lung Nodules Using CT Scans",
    members: ["ISHAAN RAI", "JAIRUS TAY SIA TAT", "EMMAUS SIM"],
    organization: "Bioinformatics Institute",
    logo: bii,
    synopsis:
      "Lung cancer is the leading cause of cancer-related deaths worldwide and is the most commonly diagnosed cancer globally. In our population, it is a major cause of cancer-related mortality, with many cases diagnosed only at the advanced stage. This makes early detection imperative, as it allows treatment to begin before the disease progresses further. Early detection can be achieved through the detection of malignant lung nodules in CT scans. However, radiologists face heavy workloads and visual fatigue, which may contribute to missed or delayed detection of subtle abnormalities. This project aims to investigate whether artificial intelligence can supplement radiologists' discernment by learning from disagreements between their assessments. Two malignancy classification models will be compared: one using hard labels, where the radiologists' assessments are reduced to a single target, and another using soft labels, which retain the distribution of their ratings, to determine whether this information can improve malignancy classification.",
  },
  {
    projectId: "SIT",
    title: "Enhanced Wheelchair Armrest Design for Stroke Rehabilitation and Mass Production",
    members: ["DEON SIM JIA JUN", "DEAN CHAN", "JOVAN KEE BING LE", "WONG JIA JUN JACE"],
    organization: "SIT",
    logo: sit,
    synopsis:
      "Standard wheelchairs, meant for general use, may not adequately meet the specific needs of stroke survivors, e.g. insufficient forearm support and customisation. Based on our literature review, this could lead to poor trunk support and an increased risk of shoulder subluxation. An interview with a stroke survivor revealed that safety was the main priority, over comfort, as reduced sensation in the paretic arm meant that the stroke survivor would not be able to feel the discomfort. This highlights the importance of enhancing safety features, e.g. preventing arm slippage, to minimise the risk of injury. Using computer-aided design and ergonomic design thinking, we created an affordable armrest that attaches securely to most existing wheelchairs. Our armrest offers customisation options such as height adjustability, 45° and 90° rotation, and 5 positions along its longitudinal track. A key feature is the use of contoured padding to evenly distribute the load and to prevent the arm from slipping without an additional harness. In terms of strength, it achieves a safety factor of 11.8. The armrest is primarily 3D-printed, and components are readily available, making it suitable for mass production.",
  },
  {
    projectId: "GHK",
    title: "Creation of GeekyKey",
    members: ["CHUA LI MING ETHAN", "JOSHUA HO WAI YARN", "LEE JUN LEI ADAM", "YAP ZI TAO"],
    organization: "Geekshacking",
    logo: ghk,
    synopsis:
      "At hackathons and community events, participants often stay within their existing social circles, limiting opportunities to meet new people and form meaningful connections. Event organisers also face the challenge of repeatedly developing software for different activities. GeekyKey is a reusable NFC-based interaction platform designed to encourage face-to-face networking while reducing repeated development work for event organisers. Our solution prioritises ease of use, accessibility without dedicated app installation, affordability, and reusability across events. The system combines passive NFC tokens, dedicated scanning stations, and a web-based platform. Participants can tap one another's tokens using compatible smartphones to view profiles, send connection requests, and exchange contact information with mutual consent. Successful connections unlock compatibility scores, interactive mini-games, and collectible avatar rewards. Organisers can manage participant groups, configure connection rules to encourage interactions beyond existing circles, and monitor engagement through visualisations and statistics. The same NFC infrastructure also supports station-based activities such as digital stamp passports. By separating reusable identity infrastructure from event-specific software, GeekyKey provides a flexible foundation for engaging physical-digital experiences without requiring hardware changes for every new activity.",
  },
  {
    projectId: "NNI",
    title: "Development and characterization of a therapeutic antibody for neurological diseases",
    members: ["DAYAN SOH", "WAH DE EN"],
    organization: "National Neuroscience Institute (NNI)",
    logo: nni,
    synopsis:
      "TRPM4 channel is an ion channel conducting monovalent cations. Upregulation and activation of TRPM4 channel cause oncotic cell death under hypoxia condition, and thus play an important role in many neurological diseases such as stroke, vascular dementia and head injury. Over the past decade, our lab has been working on developing a TRPM4 specific blocking antibody that can be used as a novel drug. One patent on this antibody to treat stroke has been granted in 2019, and two more patents are under filing. In this study, we will use various molecular, cellular and electrophysiological techniques to study the functions of a humanized TRPM4 antibody in different animal models. This humanized antibody, once proved effective in animal models, can be used in future clinical practice to treat patients with stroke, head injury, and vascular dementia.",
  },
  {
    projectId: "NHCS",
    title: "Cardiac electrophysiological alterations in sepsis-induced cardiomyopathy",
    members: ["EMMA FAITH TAN XIN XUAN", "AIDEN CHAI JUN XIAN", "ER JUN KANG JAYDEN", "YANG KAI JUN BRIAN"],
    organization: "National Heart Centre Singapore (NHCS)",
    logo: nhcs,
    synopsis:
      "Sepsis is a major cause of mortality globally, with the most common arrhythmic complication of sepsis being atrial fibrillation (AF). Although various studies have contributed to advances in the field, many examine these processes in isolation, hindering a unified understanding. Therefore, we provide an integrated analysis of the systemic phenotypes observed in sepsis. Male C57BL/6J mice were either sham-treated (n = 10) or underwent mild cecal ligation and puncture (CLP) (n = 20). Lead II electrocardiograms and transesophageal atrial pacing were conducted at day seven. Tissues of the heart, lung, liver, kidney, gastrocnemius, and circulating plasma were then harvested for histology and molecular studies. We illustrated increased AF inducibility, impaired cardiac electrical signalling, such as prolonged P-wave, QTc and Tpeak-end intervals and depressed heart rate variability. Elevated systemic and localised tissue expression of pro-inflammatory mediators (Interleukin-6 and S100A8/A9), accompanied by cellular infiltrates, fibrosis and cardiomyocyte hypertrophy were also observed in CLP mice. The integration of AF inducibility with electrophysiological, structural, molecular and systemic phenotypes provides a comprehensive characterisation of sepsis-associated cardiac and multi-organ pathology. Collectively, we have evaluated a chronic model that is suitable for investigating pathophysiology in sepsis, providing a platform to evaluate potential therapeutic interventions, such as inflammatory blockers or genetic manipulations.",
  },
  {
    projectId: "BAC",
    title: "Evaluation of a Portable Cold Atmospheric Plasma Device on Skin Bacterial DNA Abundance and Atopic Dermatitis Severity",
    members: ["VIANN TOH BEI XUAN", "TAN KAI EN, ISAIAH"],
    organization: "BioAcumen Global",
    logo: bac,
    synopsis:
      "This project studies how cold plasma technology affects the skin microbiome. The microbiome plays an important role in protecting and maintaining skin health. Atopic dermatitis is mainly caused by an overgrowth of S.aureus. This project investigates a commercial cold plasma device's ability to alleviate the effects of atopic dermatitis. This project investigates whether cold plasma can reduce harmful microbes while keeping beneficial ones on the skin. By comparing the microorganisms on the skin before and after treatment, this study looks at the changes in microbial balance. The results will help show whether cold plasma can be used as a safe method to improve overall skin health.",
  },
  {
    projectId: "NCCS",
    title: "Investigation of the Therapeutic Efficacy and Molecular Pathways of an Anti-Cancer Drug in Head and Neck Cancer",
    members: ["HAN ZONG DING", "JAVIUS LOH JINGWEI"],
    organization: "National Cancer Center Singapore (NCCS)",
    logo: nccs,
    synopsis:
      "This project aims to assess the therapeutic potential of Docetaxel in vitro and validate its mechanism of action in the FaDu cancer cell line. This study will involve culturing the FaDu cell line to evaluate the efficacy of Docetaxel, using the CyQUANT MTT Cell Viability Assay to determine the IC50. The drug’s mechanism of action will be further investigated by analysing key molecular pathways using quantitative real-time PCR to assess cellular changes, including cell cycle arrest and apoptosis markers. This integrated approach will provide preclinical insights into the efficacy of Docetaxel and its target-specific molecular mechanisms in head and neck cancer, supporting a better understanding of its therapeutic potential.",
  },
  {
    projectId: "NIE(MBT)",
    title: "Biomedical potential of intertidal marine sponges from Singapore",
    members: ["AYDEN SEAH", "KEEREN NG REN HUR", "KESHAV MICHAEL VIKNESH", "LUCIUS TEO LE EN"],
    organization: "NIE",
    logo: nie,
    synopsis:
      "The ocean is home to a rich diversity of marine organisms. Many of which produce natural compounds with the potential to benefit human health and the environment. This project investigates three species of marine sponges to explore whether the natural compounds they produce could have useful biological properties.",
  },
  {
    projectId: "NIE(ENV)",
    title: "Impacts of Plasma-Activated Water on the Growth of Escherichia coli and root rot fungi in a Hydroponic Cultivation System of Alternanthera sissoo and sessilis",
    members: [
      "IDHAM HAZIQ BIN MOHAMMAD HANAFI",
      "KEGAN HO ZEN-HE",
      "SHINE ARKAR MINN",
      "WONG EAN SUN",
    ],
    organization: "NIE",
    logo: nie,
    synopsis:
      "This study evaluates plasma-activated water (PAW) as disinfectant against Escherichia coli and root rot fungi at 0%, 25%, 50%, and 75% dilutions against conventional disinfectant (H2O2), focusing on hydroponics and Alternanthera sissoo/sessilis. PAW was generated by treating water with dielectric barrier discharge plasma, after which it contained ~10 ppm H2O2 and decreased in pH. A. sissoo/sessilis were cultivated hydroponically, half being submerged in E. coli/root rot suspension, then PAW, with the remainder grown in PAW-containing contaminated media. UV spectrophotometry and spread plate were employed to determine microbial reduction. Generally, PAW outperformed H2O2, with varying efficacy by concentration.",
  },
];

export default exhibitions;
