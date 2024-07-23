import Image from "next/image"
import { Skill } from "../data/skills"

interface SkillListProps {
  skills: Skill[]
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="w-max flex items-center justify-center gap-3 py-2 px-4 rounded-md">
            <Image src={skill.image} alt={skill.name} width={32} height={32} />
            <h2 className="font-bold text-white">{skill.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default SkillList
