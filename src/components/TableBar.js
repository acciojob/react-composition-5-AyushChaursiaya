import React, { useState } from 'react'

const TableBar = () => {
    const [activeTab, setActiveTab] = useState('tab 1');
    const [activeTabA, setActiveTabA] = useState('tab A');

    const handleTab = (tab) => {
        setActiveTab(tab);
    }
    const handleTabString = (tabA) => {
        setActiveTabA(tabA);
    }

    return (
        <>
            <ul>
                <li onClick={() => handleTab('tab 1')}>Tab 1</li>
                <li onClick={() => handleTab('tab 2')}>Tab 2</li>
                <li onClick={() => handleTab('tab 3')}>Tab 3</li>
            </ul>
            {activeTab === 'tab 1' && <p>Content for {activeTab}</p>}
            {activeTab === 'tab 2' && <p>Content for {activeTab}</p>}
            {activeTab === 'tab 3' && <p>Content for {activeTab}</p>}

            <ul>
                <li onClick={() => handleTabString('tab A')}>Tab A</li>
                <li onClick={() => handleTabString('tab B')}>Tab B</li>
                <li onClick={() => handleTabString('tab C')}>Tab C</li>
            </ul>
            {activeTabA === 'tab A' && <p>Content for {activeTabA}</p>}
            {activeTabA === 'tab B' && <p>Content for {activeTabA}</p>}
            {activeTabA === 'tab C' && <p>Content for {activeTabA}</p>}
        </>
    )
}

export default TableBar;