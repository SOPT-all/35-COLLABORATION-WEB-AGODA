type SpacingProps = {
  width: number;
  height: number;
};

const Spacing = ({ width, height }: SpacingProps) => {
  const style: React.CSSProperties = {
    height: height, 
    width: width,
  };

  return <div style={style} />;
};

export default Spacing;
