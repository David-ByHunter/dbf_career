// Interfaces
interface f_d {
    field:string,
    description:string
}
interface skill {
    skill: string,
    description?: string,
    priority?: number,
}
interface position {
    position: string,
    dateStart?: Date,
    dateEnd?: Date | "present"
    description?: string
}
interface events {
    name: string,
    rol: "participant" | "organiser",
    place: string
    description?: string
    dateStart?: Date,
    dateEnd?: Date
}
// Variables
export const aboutMeHome:f_d[] = [
    {
        field: "Who am I?",
        description: "I consider myself someone willing to create a positive impact on my environment. In my opinion, when someone shows their best, people around will be influenced by it. That is how I intend to live my life."
    },
    {
        field: "Studies",
        description: " I started the university back in 2019. Due to different recommendations, I found myself pursuing a degree in engineering. Industrial Engineering grew in me as this journey went by, becoming my passion."
    },
    {
        field: "Hobbies",
        description: "Engineering isn't everything in my life. I also invest my time in various topics, such as medieval things and travelling."
    }
];
// Carrer
export const carrerName: string= "Industrial Engineering"
export const carrerSkills : skill[] = [
    {
        skill: "Electronic Engineering"
    },
    {
        skill:"Power electronics"
    },
    {
        skill:"MATLAB"
    },
    {
        skill: "Microcontrollers"
    }
]
// ESTIEM
export const meaningESTIEM : f_d = {
    field: "ESTIEM",
    description: "ESTIEM is a non-profit organization for Industrial Engineering and Management (IEM) students who combine technological understanding with management skills. Founded in 1990, our goal is to foster relations between IEM students and support their professional and personal development."
}
export const positionsESTIEM : position[] = [
    {
        position: "Public Relations Responsible",
    },
    {
        position: "IT Committe Leader",
    }
]
export const eventsESTIEM : events[] = [
    {
        name: "Council Meeting LXIII",
        rol: "organiser",
        place: "Seville"
    },
    {
        name: "Vision IoT",
        rol: "participant",
        place: "Sofia"
    }
]