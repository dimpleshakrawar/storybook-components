import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const TwinConf = createGlobalStyle({
  body: {
    ...tw`antialiased`,
  },
});

const CustomStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

function GlobalStyles(): JSX.Element {
  return (
    <>
      <CustomStyles />
      <TwinConf />
    </>
  );
}

export default GlobalStyles;
