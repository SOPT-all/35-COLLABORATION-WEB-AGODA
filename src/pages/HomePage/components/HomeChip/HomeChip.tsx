import { ChipContainer} from './HomeChip.style';

interface ChipProps {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const Chip = ({ label, icon: Icon }: ChipProps) => {
  return (
    <div css={ChipContainer}>
      <Icon width={20} />      
      {label}
    </div>
  );
};

export default Chip;