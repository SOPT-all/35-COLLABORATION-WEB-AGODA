import { CATEGORY_DATA } from '@utils/constants/home/categoryConstants';
import { CHIP_DATA } from '@utils/constants/home/chipConstants';
import CategoryButton from '@pages/HomePage/components/CategoryButton/CategoryButton';
import Chip from '@pages/HomePage/components/HomeChip/HomeChip';
import { 
        backgroundContainer, 
        categoryButtonContainer,
        text,
        chipContainer
      } from './HomeHeder.style';
import Spacing from '../Spacing';
import BarTravel from '../BarTravel/BarTravel';
import { IcVipchip } from '@assets/svg';
import { iconStyle } from '@styles/iconStyles';

const HomeHeader = () => {
  return (
      <div css={backgroundContainer}>
        <IcVipchip css={iconStyle(10,2)}/>
        <Spacing width={0} height={16} />
        <div css={categoryButtonContainer}>
          {CATEGORY_DATA.map((category) => (
            <CategoryButton
              key={category.id}
              label={category.label}
              icon={category.icon}
              isActive={category.isActive}
            />
          ))}
        </div>
        <Spacing width={0} height={16} />

        <BarTravel/>

        <Spacing width={0} height={40} />
        <h3 css={text}>다른 교통편도 확인해 보세요</h3>
        <Spacing width={0} height={8} />

        <div css={chipContainer}>
          <Spacing width={12} height={0} />
          {CHIP_DATA.map((chip) => (
            <Chip 
              key={chip.id} 
              label={chip.label} 
              icon={chip.icon} 
            />
          ))}
          <Spacing width={12} height={0} />

        </div>

      </div>

  );
};

export default HomeHeader;
