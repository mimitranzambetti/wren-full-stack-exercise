/** @jsx jsx */

import { jsx } from '@emotion/core';
import Button from './components/Button';
import Table from './components/Table';
import Footer from './components/Footer';
import Nav from './components/Nav';
import HorizontalSeparator from './components/UI/HorizontalSeparator';
import { scale, maxWidth, marginAuto } from './static/style';

const globalStyles = scale({
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  'h4, p': {
    margin: 0,
  }
})

const mainContainer = scale({
  marginTop: '100px',
  textAlign: 'center',
});

const App = () => {
  return (
    <div css={globalStyles}>
      <Nav />
      <div css={mainContainer}>
        <h2>Impact</h2>
        <p>
          _NUM OF PURCHASES_ purchases have not been offset
        </p>
        <p>
          Total carbon impact so far _CALCULATED IMPACT HERE_
        </p>
        <p>
          Impact neutralized _CALCULATED IMPACT HERE_
        </p>
        <br />
        <div css={[maxWidth(150), marginAuto]}>
          <Button text="Offset All" />
        </div>
        <br />
        <HorizontalSeparator />
        <h2>Your Transactions</h2>
        <Table
          headers={['Date', 'Vendor', 'Category', 'Amount', 'Carbon Impact', 'Neutralized']}
          data={[{
            "purchased_at": "2019-10-12 22:42:22.434",
            "vendor": "Sample Vendor",
            "category": "Sample Category",
            "amount": "Sample Amount",
            "carbon_impact": "Edit me!",
            "isNeutralized": false,
          }]}
        />
        </div>
      <Footer />
    </div>
  );
}

export default App;
