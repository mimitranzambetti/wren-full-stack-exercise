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

const centerText = scale({
  textAlign: 'center',
});

const App = () => {
  return (
    <div css={globalStyles}>
      <Nav />
      <div css={mainContainer}>
        <div css={centerText}>
          <CardContainer>
            <CardContent>
              <h2>Your Impact</h2>
              <p>
                <span css={medium}>_Emissions here_ kg of carbon emitted this month</span> 
              </p>
              <p>
              <span css={medium}>_Calculated impact_ kg offset this month</span>  
              </p>
              <br />
              <div css={[maxWidth(200), marginAuto]}>
                <Button text="Offset _#_ purchases" />
              </div>
            </CardContent>
          </CardContainer>
        </div>
        <br />
        <br />
        <CardContainer>
          <CardContent>
          <div css={genericFlex}>
            <h2>Your Transactions</h2>
            <div css={maxWidth(200)}>
              <Button text="Offset _#_ purchases" />
            </div>
          </div>
          <Table
            headers={['Date', 'Vendor', 'Category', 'Amount ($)', 'Carbon Impact (g)', 'Neutralized']}
            data={[{
              "purchased_at": "2/20",
              "vendor": "Sample Vendor",
              "category": "Sample Category",
              "amount": "Sample Amount",
              "carbon_impact": "Edit me!",
              "isNeutralized": false,
            }, 
            {
              "purchased_at": "2/21",
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
