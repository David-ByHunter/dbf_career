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
// Carrer
export const carrerName: string= "Industrial Engineering"
export const carrerSkills : skill[] = [
    {
        skill: "Electronics"
    },
    {
        skill: "Vue.js"
    },
    {
        skill:"MS Office"
    },
    {
        skill:"Leadership"
    },
    {
        skill:"Teamwork"
    },
]
// ESTIEM
export const linksESTIEM :f_d[] = [
    {
        field:"ESTIEM",
        description: "https://estiem.org/"
    },
    {
        field: "ESTIEM LG Seville",
        description: "https://estiemlgseville.org/"
    }
]
export const meaningESTIEM : f_d = {
    field: "ESTIEM",
    description: "ESTIEM is a non-profit organization for Industrial Engineering and Management (IEM) students who combine technological understanding with management skills. Founded in 1990, our goal is to foster relations between IEM students and support their professional and personal development."
}
export const positionsESTIEM : position[] = [
    {
        position: "Public Relations Responsible"
    },
    {
        position: "IT Committe Leader" 
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