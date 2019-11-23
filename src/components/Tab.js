import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import React from 'react';
import TabDoor from './tabs_nav/TabDoor';
import TabDevice from './tabs_nav/TabDevice';
import TabPrice from './tabs_nav/TabPrice';
import styled from 'styled-components';
import TabContentOne from './tabs_content/TabContentOne';
import TabContentTwo from './tabs_content/TabContentTwo';
import TabContentTree from './tabs_content/TabContentTree';

class TabComponent extends React.Component {
    state = {
        tabIndex: 0
    };

    render() {

        return (
            <TabsWrapper>
                <Tabs className="tabs"
                      selectedIndex={this.state.tabIndex}
                      onSelect={tabIndex => this.setState({tabIndex})}
                >
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'active' : ''}`}>
                            <TabDoor/>
                            <p>
                                <strong>
                                    No commitments<br/>
                                    Cancel online at anytime.
                                </strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active' : ''}`}>
                            <TabDevice/>
                            <p>
                                <strong>
                                    Watch anywhere
                                </strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active' : ''}`}>
                            <TabPrice/>
                            <p>
                                <strong>
                                    Pick you price
                                </strong>
                            </p>
                        </Tab>

                    </TabList>

                    <TabPanel>
                        <TabContentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTree/>
                    </TabPanel>

                </Tabs>
            </TabsWrapper>
        );
    }
}

const TabsWrapper = styled.div`
  .tabs{
    padding-top: 1rem;
  }
  .tab-nav-container {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    list-style: none;
    margin: 0 12%;
    color: var(--main-gray);
  }
  
  ul li:hover{
    color: #fff;
    cursor: pointer;
  }
  
  ul li:hover svg path {
    fill: #fff;
  }
  
  .active{
    border-bottom: 4px solid var(--main-red);
  }
  
  .tab-selected {
    color: #fff;
  }
  .tab-selected svg path {
    fill: #fff;
  }
  
`;

export default TabComponent;
