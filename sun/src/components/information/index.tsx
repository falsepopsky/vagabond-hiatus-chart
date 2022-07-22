import { HeaderTwo, IconContainer, RowContainer } from '../styled';
import { WrapInfo } from './styles';
import { Info, Wave } from './svg';

const Information = () => {
  return (
    <div>
      <Wave />
      <WrapInfo>
        <RowContainer>
          <IconContainer>
            <Info />
          </IconContainer>
          <HeaderTwo>Information</HeaderTwo>
        </RowContainer>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, illo deleniti facilis optio neque quam minima
          unde aperiam, eos minus ea quae odit nam quas? Distinctio consequuntur necessitatibus explicabo aliquid.
        </p>
      </WrapInfo>
    </div>
  );
};

export default Information;
