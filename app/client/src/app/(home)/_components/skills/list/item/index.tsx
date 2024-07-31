import { addZeroToNum } from "@ut";
import { Paragraph } from "@u";

type ItemProps = {
  skillIndex: number;
  skill: string;
};

const Item = ({ skillIndex, skill }: ItemProps) => {
  return (
    <li className="skills__item">
      <Paragraph size="large">
        {addZeroToNum(skillIndex)}. {skill}
      </Paragraph>
    </li>
  );
};

export { Item };
