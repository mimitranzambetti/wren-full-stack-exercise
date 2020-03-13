/** @jsx jsx */

import { jsx } from '@emotion/core';
import Button from './components/Button';
import Table from './components/Table';
import Nav from './components/Nav';
import CardContainer from './components/UI/CardContainer';
import CardContent from './components/UI/CardContent';
import { scale, maxWidth, medium, genericFlex, marginAuto } from './static/style';

const globalStyles = scale({
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  minHeight: '90vh',
  position: 'relative',
  margin: 0,
  'h4, p': {
    margin: 0,
  },
  'h2': {
    marginTop: 0,
  },
  p: {
    lineHeight: '26px',
  }
})

const mainContainer = scale({
  maxWidth: '900px',
  margin: 'auto',
  marginTop: '100px',
  textAlign: 'left',
});

const App = () => {
  return (
    <div css={globalStyles}>
      <Nav />
      <div css={mainContainer}>
        <h1>Offset your purchases</h1>
        <br />
        <CardContainer>
          <CardContent>
            <h2>Your Impact</h2>
            <p>
              <span css={medium}>Purchases to offset:</span> _Num of purchases_ 
            </p>
            <p>
            <span css={medium}>Total carbon emissions:</span>  _Emissions here_
            </p>
            <p>
            <span css={medium}>Total amount offset:</span>  _Calculated impact_
            </p>
            <br />
            <div css={maxWidth(150)}>
              <Button text="Offset All" />
            </div>
          </CardContent>
        </CardContainer>
        <br />
        <br />
        <CardContainer>
          <CardContent>
          <div css={genericFlex}>
            <h2>Your Transactions</h2>
            <div css={maxWidth(150)}>
              <Button text="Offset All" />
            </div>
          </div>
          <Table
            headers={['Date', 'Vendor', 'Category', 'Amount', 'Carbon Impact', 'Neutralized']}
            data={[{
              "purchased_at": "2019-10-12 22:42:22.434",
              "vendor": "Sample Vendor",
              "category": "Sample Category",
              "amount": "Sample Amount",
              "carbon_impact": "Edit me!",
              "isNeutralized": false,
            }, 
            {
              "purchased_at": "2019-10-13 22:42:22.434",
              "vendor": "Sample 2",
              "category": "Sample 2",
              "amount": "Sample 2",
              "carbon_impact": "Edit me!",
              "isNeutralized": true,
            }]}
          />
          </CardContent>
        </CardContainer>
        </div>
    </div>
  );
}

export default App;
