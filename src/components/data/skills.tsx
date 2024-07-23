export interface Skill {
  image: string
  name: string
}

export const skills = (): Skill[] => {
  return [
    {
      image: "/img/skills/html.png",
      name: `HTML`,
    },
    {
      image: "/img/skills/css.png",
      name: `CSS`,
    },
    {
      image: "/img/skills/javascript.png",
      name: `JavaScript`,
    },
    {
      image: "/img/skills/reactjs.png",
      name: `ReactJS`,
    },
    {
      image: "/img/skills/nextjs.png",
      name: `NextJS`,
    },
    {
      image: "/img/skills/tailwindcss.png",
      name: `Tailwind CSS`,
    },
    {
      image: "/img/skills/bun.png",
      name: `Bun`,
    },
    {
      image: "/img/skills/typescript.png",
      name: `TypeScript`,
    },
  ]
}
