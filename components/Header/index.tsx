import { BoxItemStyle, FlexItemStyle, HeaderStyle, LogoStyle } from './style';
import InflearnLogo from '@img/inflearn.png';

interface Props {
  onClickLogo?: () => void;
  rightElement?: React.ReactElement[];
}

const Header = ({ onClickLogo, rightElement }: Props) => {
  return (
    <HeaderStyle>
      <FlexItemStyle>
        <BoxItemStyle href="/" onClick={onClickLogo} aria-label="홈으로 이동">
          <LogoStyle src={InflearnLogo} alt="인프런 로고" placeholder="blur" />
        </BoxItemStyle>
      </FlexItemStyle>
      {rightElement && <FlexItemStyle>{rightElement}</FlexItemStyle>}
    </HeaderStyle>
  );
};

export default Header;
