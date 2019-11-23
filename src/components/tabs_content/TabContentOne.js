import React from 'react';
import Img from '../../images/tab-1-pic.png';
import styled from 'styled-components';
import {Button} from '../Button';

const TabContentOne = () => (
    <TabContentContainer>
        <div className="container">
            <div className="tab-content">
                <div>
                    <span>
                        If you decide Netflix isn`t for you - no problem. No commitment. Cancel online anytime.
                    </span>
                    <br/>
                    <Button>try ti now</Button>
                    <img src={Img} alt="Img"/>
                </div>
            </div>

        </div>
    </TabContentContainer>
);
const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  img {
    width: 31.875rem;
  } 
  .container {
    margin: 0 10%;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
    
  }

`;
export default TabContentOne;