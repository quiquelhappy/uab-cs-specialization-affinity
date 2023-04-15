type id = string;

export type specialization = {
    description?: string,
    name: string,
    subjects: subject[]
}
export type subject = {
    description?: string | string[],
    name: string,
}

export const subjects: Record<id, subject> = {
    '102759': {
        name: 'Software Design',
        description: 'This subject is the continuation of the programming subjects seen in the first and second courses, such as Fundamentals of Computer Science, Programming Methodology and Programming Laboratory. Based on the fact that the student already has some basic knowledge about programming, this course is focused on introducing different styles and paradigms of algorithm design. The main objective is that students develop skills in the design and analysis of algorithms in order to solve real-world problems effectively and efficiently according to the requirements established by a potential client.'
    },
    '102763': {
        name: 'Software Requirements',
        description: [
            "Study the main methodologies proposed to manage the requirements of a software project.",
            "Understand the problem of Requirements Engineering, and its relationship with other phases of Software Engineering.",
            "Know the participants involved in Requirement Engineering.",
            "Acquire practical experience in the application of techniques for collecting and managing requirements."
        ]
    },
    '102741': {
        name: 'Database Management and Administration',
        description: [
            "To know, to understand and to know how to use the main DB management tools to be able to parameterize the BD in the most optimum way according to the needs of users and processes.",
            "To know, to understand and to know how to use the main DB optimization tools.",
            "To understand and to know how to configure distributed DBs.",
            "To understand and to know how to use non-relational DB.",
            "To set up a DB system in the most optimal way based on some needs.",
            "To optimize the execution of transactions that maximizes the response time and the use of resources available to the DB.",
            "To use the SQL language immersed to design, program and verify DB applications based on programming languages and SQL.",
            "To use and configure a non-relational DB based on a DB design I/O."
        ]
    },
    '102758': {
        name: 'Software Quality and Testing',
        description: "In this subject we introduce the basic concepts to plan software tests and the techniques to implement them, as well as estimates of their quality."
    },
    '102789': {
        name: 'Software Development Management',
        description: "In this subject you will learn how to deal with the changes. Every software development process is subject to changes of all kinds. Changes might be caused by the need for improvement of the developed product. Changes in initial requirements. Changes in terms or work team, budget, etc. In short, at the end of this course you will have to be able to manage any change that supposes a deviation from the initial planning."
    },
    '102781': {
        name: 'Quality Models in ICT Management',
        description: "Know the strategies and frameworks in the management of Information Technology services, and have sufficient bases to be able to support the implementation of a service strategy in companies and other organizations."
    },
    '102790': {
        name: 'Software Architecture and Technologies',
        description: [
            "Design an architecture that can best solve a specific problem, taking into account the associated risks.",
            "Design the architecture of a component based computer system.",
            "Generate proposals that are innovative and competitive.",
            "Make one's own decisions.",
            "Manage information by critically incorporating the innovations of one's professional field, and analysing future trends."
        ]
    },
    '102788': {
        name: 'Software Integrated Lab',
        description: "This subject wants to provide a useful experience to students regarding what they can find when developing software projects professionally. Therefore, from the point of view of the students, it is about developing a complete and relatively long software project. In addition, the development process will be as or more important than the final result (software product). Therefore, the software should be developed in the most professional way possible, in particular, applying the best practices and working as a team."
    },
    '102740': {
        name: 'Distributed Systems',
        description: "The subject of Distributed Systems aims to show the fundamental concepts, and most common problems of distributed systems, as well as the most common techniques of resource management in this type of systems. In the same line, the student will be introduced to the use of common tools in these environments, for the resolution of computational problems coming from the sciences and engineering."
    },
    '102791': {
        name: 'Embedded Systems',
        description: "This course is the first within the subject of Design of application-oriented computing systems, which deals with the development of systems that run the algorithms of specific applications under a set of stringent requirements. For example, it is not enough for a mobile device to be capable of displaying a video, it must be done at 25 images per second, synchronizing it with audio and consuming as little energy as possible. Therefore, the main goal of the subject is to know how to design algorithms and the implications that each design has in the cost of the application depending on the very algorithm and how it is implemented, that is, in accordance to the chosen execution platform."
    },
    '102776': {
        name: 'Network Management and Administration',
        description: "With this subject, the student will obtain the necessary knowledge for the administration and management of computer networks. The student will be able to apply this knowledge in aspects of general configuration and typical services as well as in monitoring, performance analysis, disaster recovery and security."
    },
    '102778': {
        name: 'Advanced Computer Architectures',
        description: "The fundamental objective of the subject is that students acquire the capabilities of analysis, use and evaluation of advanced computer architectures, for the development of applications and computer services. The basic concepts that will be described in the theoretical sessions are: the multi-core processor, the shared memory multi-processor system, the computer accelerators, performance evaluation, and the programming languages and models of these parallel systems."
    },
    '102793': {
        name: 'Microprocessors and Peripherals',
        description: "The aim of the course is for students to understand the fundamental components used in the design of systems based on digital processors (microprocessors and peripheral devices) and how they are interconnected, analyzing the different interfaces. Apply knowledge of computer architecture and system design to select the features of the microcontroller, peripherals and peripheral controllers best suited to the needs of the application. Select the most suitable platform for the design of a system for a specific application and design and develop the solution based on the selected microcontroller."
    },
    '102777': {
        name: 'High Performance Computing',
        description: "The objective of this subject is to know high performance and parallel computing systems, multiprocessor and multi-computing systems, paradigms of parallel programming, learn to develop applications using message passing or shared memory and analyze the performance of these applications. The theoretical concepts about programming paradigms, message passing and shared memory are reinforced with lab sessions in which students learn to program using parallel programming languages. All the components described in this subject must allow the student to understand the operation of high performance and parallel systems and, to some extent, be able to perform a simple design of a parallel application and evaluate its performance."
    },
    '102794': {
        name: 'Hardware / Software Integration',
        description: [
            "Learn the embedded system design methodology.",
            "Learn how to partition the design in the hardware part and the software part.",
            "Create interfaces and peripherals that are coupled to the system.",
            "Deepening in data process techniques on embedded systems."
        ]
    },
    '102792': {
        name: 'Embedded Systems Prototyping',
        description: [
            "To acquire a global vision of the prototyping process.",
            "To know technological alternatives of system prototyping",
            "To learn how to implement FSM from graphs",
            "To learn how to describe digital circuits using a HDL",
            "To use a HDL to prototypeembedded systems on FPGAs.",
            "To develop an embedded system prototype using micro-controllers.",
            "To learn about Real-time and use RTOS (Real Time Operating Systems) in embedded systems",
            "Be able to evaluate the performance of a embedded system",
            "To know how to verify an embedded system",
            "To know about MPSoC & NoC"
        ]
    },
    '102783': {
        name: 'Analysis and Design of Algorithms',
        description: "This subject is the continuation of the programming subjects seen in the first and second courses, such as Fundamentals of Computer Science, Programming Methodology and Programming Laboratory. Based on the fact that the student already has some basic knowledge about programming, this course is focused on introducing different styles and paradigms of algorithm design. The main objective is that students develop skills in the design and analysis of algorithms in order to solve real-world problems effectively and efficiently according to the requirements established by a potential client."
    },
    '102786': {
        name: 'Knowledge, Reasoning and Uncertainty',
        description: "The subject aims, both expand some of the topics developed during Artificial Intelligence, and introduce new problems associated with artificial intelligence, mainly the reasoning with partial or 'non exact' knowledge. The first part will deal with the expansion of the search mechanisms developed in the second year, introducing generic algorithms to solve constraint satisfaction problems as a reasoning mechanism (i.e. production planning, maximizing efficiency in logistics decisions, etc.) . In a second part the bases for representation of knowledge associated with problems are given to be able to make decisions for their resolution. The last part will introduce the basic techniques to be able to extract information, and therefore solutions, when the information that is available or not is completely reliable or is not perfectly defined (Ex: weather forecasts, voice recognition, when a production is can consider good or not and to what extent, etc). In these last two sections we focus on algorithms and representations that are driven by data, from which the modeling of the world they represent is extracted."
    },
    '102787': {
        name: 'Machine Learning',
        description: "The course aims both to expand some of the topics developed during Artificial Intelligence, and to introduce new problems associated with AI, mainly the learning of concepts and trends from data. It is about training students to be data engineers/scientists, one of the occupations with the most brilliant future and most demanded by an increasing number of companies, including Facebook, Google, Microsoft and Amazon, to cite but a few. In fact, it is expected that the growth of the demand of these professionals in data engineering/science will be exponential at an international level, especially due to the growth in the generation of massive data. Thus, the main objective of the Course is to teach how to find a good solution (sometimes the best one is impossible) for different data analysis problems at different context,, based on identifying the best knowledge representation and applying the most appropriate technique to automatically generate good mathematical models that best explain the observed data with an acceptable deviation."
    },
    '102753': {
        name: 'Interactive Graphic Visualisation',
        description: [
            "The techniques of Graphics for Computer and Visualization Graphics, especially those of realism (rendering) and animation by Computer (Computer Animation) are present in many fields, essentially in the entertainment (cinema, television, videojuegos, etc.) but also in others such as scientific visualization, visualization of medical images, cartography, industrial design (realization and simulation both static and dynamic products) and others.",
            "The fact of seeing these computer-generated images usually does not have to remove or minimize the complexity in which they have been designed and generated. In many cases (essentially entertainment) there must be a graphic designer who designs the character, scriptwriters, but also a computer scientist who modifies the shape of the character and defines the dynamic equations of movements as well as generates them.",
            "This subject intends to present the concepts related to the different processes and algorithms that must be used to obtain a realistic image. It is not intended that these algorithms be known to implement them (many of them are already implemented in graphic libraries), but to know the possibilities of each algorithm and the parameters that are used to configure them.",
            "Basic and advanced concepts of computer animation are introduced, both trajectories (rotation and translation) and articulated objects in order to know how to define cinematic models and generate movements of these objects.",
            "In a more appliedway, the student is required to acquire abilities in the OpenGL graphical library (Open Graphics Library) in a Visual C ++ graphical environment with MFC interface or Qt environment",
        ]
    },
    '102782': {
        name: 'Compilers',
        description: [
            "Introduce the fundamental concepts and structures of a compiler of imperative languages.",
            "Improve the use and understanding of compilers (efficiency, language limits, etc.), and programming languages.",
            "Practical implementation of simple parsers.",
            "Recognizers of configuration files with complex parameters.",
            "Flexibilization of dialogues with the user.",
            "Solve problems using syntactic and semantic techniques.",
            "Definition and implementation of grammars to solve problems.",
            "Decision between implementing an entire compiler or using a tool to generate compilers based on the type of problem to be solved.",
            "Implement complex algorithms.",
            "Test strategies of complex programs.",
            "Implementation of recursive algorithms.",
            "Use of tools that generate code.",
            "Modularization in subproblems strongly coupled.",
            "Adaptation and use of a program already made.",
            "Improve the quality of the programs created thanks to the greater knowledge of the operation of the compilers.",
            "Correct use of the structures of the programming languages to obtain more optimal programs.",
            "Resolving complexity problems by applying the principles of modularity and recursion.",
            "Use of automatic programming tools."
        ]
    },
    '102784': {
        name: 'Computer Vision',
        description: [
            "Know, understand and know how to model the acquisition of images through a camera.",
            "Understand the phenomenon of human visual perception.",
            "Describe and relate the phases in which the solution is divided to a problem of image analysis.",
            "Identify the advantages and disadvantages of the computer vision algorithms that are explained.",
            "Solve real problems related to vision techniques to find a solution.",
            "Understand the result and limitations of vision techniques in different case studies.",
            "Know how to choose the most suitable image processing algorithm to solve a given task.",
            "Knowing how to choose the most appropriate computer vision techniques to solve contextualized problems."
        ]
    },
    '102785': {
        name: 'Robotics, Language and Planning',
        description: [
            "The student will assimilate the basic notions of robotics (both industrial and service) and will reach a generic knowledge of the component modules of a robot (hardware and software).",
            "Agile methodologies aimed at solving challenges will be studied. These methodologies are part of the most current innovation strategies and are integrated into direct impact activities such as rapid prototyping and hackathons. Students will develop these skills.",
            "You will learn to design and program a robot and evaluate its operation in a qualitative and quantitative way from simulators and electronic systems.",
            "Knowledge will be acquired to create strategies with the aim of guiding a real robot from the information acquired by a camera.",
        ]
    },
    '102754': {
        name: 'Multimedia Systems', 
        description: [
            "Information Technology aims to ensure that, at any time and anywhere, we can access, with different types of devices and different networks, multimedia information. The Information Society is one of the current adventures and for its construction it is necessary to develop ideas and innovative products based on the aforementioned technologies.",
            "After introducing the convergence between the different channels through which users receive multimedia information (digital TV and internet), they enter the JPEG image and MPEG video and multimedia standards that allow them to represent and transmit this information.",
            "The transmission of these data either through the Internet channel, for those of Television or those of mobile phones lead to some characteristic applications with the corresponding user interfaces.",
            "The standards are introduced to describe the metadata associated with Digital Video and some automatic annotation techniques.",
            "With a view to gaining a deep knowledge of the methodology associated with the definition of standards, qualitative and quantitative studies will be carried out and created on several known algorithms.",
            "Finally, the theme of Software as a Service (SaaS) is introduced from a modern perspective of manipulation and management of multimedia content, using the tools of Cloud Computing as an element that makes it possible to obtain value from the contents digital",
            "The objectives presented will be addressed from a theoretical perspective, as well as practical, including reporting.",
            "All this approach is given in the context of the study of the perceptual thresholds of the human visual system (HVS), which will allow us to understand the reason for the multiple technological decisions."
        ]
    },
    '102773': {
        name: 'Fundamentals of Information Technology',
        description: "The course deals with topics such as coding theory; advanced cryptographic protocols, blockchain technology and cryptocurrencies."
    },
    '102752': {
        name: 'Information Systems',
        description: [
            "Understand basic concepts of Information Systems.",
            "Understand Information Systems and their role in today's organizations.",
            "Know Porter's value chain model.",
            "Understand Integrated Information Systems.",
            "Develop the capacity to analyze, evaluate and select Integrated Information Systems.",
            "Understand the implementation life cycle of information system.",
            "Know new trends in information systems.",
        ]
    },
    '102751': {
        name: 'Network Infrastructure and Technology',
        description: "This course deals with the different types of computer networks in existence today. After classifying these, we specify their components and the standards they comply with, and we analyse their functioning. On the one hand, students are expected to gain an overall insight into the concepts related to the computer networks in current use, for communication in both local environments and at a distance, and for both wired and wireless systems, to be able to place them within a hierarchical protocol model, and to understand the basic mechanisms of functioning and management. On the other, students must be able to design networks, choosing the best technologies and configurations for each case, simulate these and use tools to keep them working properly and detect malfunctions."
    },
    '102749': {
        name: 'Advanced Internet Technologies',
        description: "The course will focus on the networks that use the family of TCP / IP protocols for their interconnection. The training objectives of the course are focused on obtaining a specific knowledge of advanced concepts related to the interconnection of internet networks, such as those that allow tuning protocol parameters to obtain good performances in particular scenarios, and obtain a more general view of these networks through multi-level architectures. Knowing in depth the new version of the IP protocol, IPv6, will be another objective of the subject. On the other hand, the students will have to be able to design networks, and configure them, to adapt to particular requirements. They should also be capable of detecting and solving performance problems in a network, and configuring routers with load balancing, following specific queue management policies, and translating NAT addresses."
    },
    '102750': {
        name: 'Web Systems and Technologies',
        description: "This subject is framed within the increasingly everyday uses that society gives to web technologies. Knowledge of these technologies is at the frontier of innovation in business models, which aim to adapt to the use of new technologies to improve their competitiveness and to offer added value. The aim of this subject is to provide an overview of these technologies, and at the same time allow students to deepen their understanding of particular elements by fostering their innovative spirit."
    },
    '102757': {
        name: 'Information and Security Management',
        description: "The aim of this course is to provide students with a basic knowledge about the problem of information security and existing mechanisms for the protection of computer systems. Students will be able to develop a critical view of the security in computer systems. Furthermore students will be able to implement some aspects of the subject. Knowing how to perform certain attacks is an important step towards understanding the needs of system security, and to then apply appropriate protection techniques in each case."
    },
    '105073': {
        name: 'Data Compression Technologies',
        description: "The aim of the subject of Data Compression Technologies is to acquire specific knowledge about data compression systems. This allows students to have sufficient ability to evaluate the performance and features of compression systems for a specific scenario, as well as design / modify existing systems. This subject allows to build a knowledge base to develop the final degree project (TFG) related to this topic and / or continue with related postgraduate studies. The possibility of simultaneous this subject and the TFG is contemplated."
    },
    '105072': {
        name: 'Blockchain Technology and Cryptocurrency',
        description: [
            "Understand the theoretical concepts of blockchain technology",
            "Understand how cryptocurrencies work.",
            "Understand how Bitcoin works, from a technical point of view.",
            "Understand the concept of smart contract.",
            "Understand the diference between an UTXO-based blockchain and an account-based blockchain",
            "Know some of the scalability mechanisms of blockchain technology.",
        ]
    },
    '105074': {
        name: 'Applications of Coding Theory',
        description: "The course is focused on coding theory and its applications into the real world. The coding theory is the study of methods for efficient and accurate transfer of information from one place to another. It deals with the problem of detecting and correcting transmission errors caused by noise on the channel. In distributed storage systems, coding theory also offers solutions, to improve hard disk failure tolerance, which are much more efficient than replication-based ones. This course allows us to build the underground of connections by developing the (TFG) related to this topic and /or continuing a postgraduate related studies. It contemplates the possibility of assuming this subject and the TFG simultaneously. "
    }
}

export const specializations: Record<id, specialization> = {
    'aa': {
        name: 'Intensive Course in Software Engineering',
        subjects: [
            subjects['102759'],
            subjects['102763'],
            subjects['102741'],
            subjects['102758'],
            subjects['102789'],
            subjects['102781'],
            subjects['102790'],
            subjects['102788'],
        ]
    },
    'bb': {
        name: 'Intensive Course in Computer Engineering',
        subjects: [
            subjects['102740'],
            subjects['102791'],
            subjects['102776'],
            subjects['102778'],
            subjects['102793'],
            subjects['102777'],
            subjects['102794'],
            subjects['102792'],
        ]
    },
    'cc': {
        name: 'Intensive Course in Computing',
        subjects: [
            subjects['102783'],
            subjects['102786'],
            subjects['102787'],
            subjects['102753'],
            subjects['102782'],
            subjects['102784'],
            subjects['102785'],
            subjects['102754'],
        ]
    },
    'dd': {
        name: 'Intensive Course in Information Technologies',
        subjects: [
            subjects['102773'],
            subjects['102752'],
            subjects['102740'],
            subjects['102759'],
            subjects['102751'],
            subjects['102749'],
            subjects['102750'],
            subjects['102757'],
            subjects['105073'],
            subjects['105072'],
            subjects['105074'],
        ]
    }
}