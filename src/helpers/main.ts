interface f_d {
    field:string,
    description:string
}
interface skill {
    priority?: number,
    skill: string,
    description?: string,
}
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
export const carrerName: string= "Degree in Industrial Engineering"
export const carrerSkills : skill[] = [
    {
        skill:"MATLAB"
    },
    {
        skill:"Power electronics"
    },
    {
        skill: "Microcontrollers"
    },
    {
        skill: "Electronic Engineering"
    }
]