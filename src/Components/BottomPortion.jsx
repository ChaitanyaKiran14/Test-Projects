import './Bottom.css';
import { useState } from 'react';
import TeamInfo from './TeamInfo';
import UserPanel from './UserPanel';
import MiningPool from './MiningPool';

const Bottom = () => {
    const [activeTab, setActiveTab] = useState('mining');

    const clickedTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="main">
                <button onClick={() => clickedTab('mining')} className={`min ${activeTab === 'mining' ? 'active' : ''}`}>
                    Mining Pool
                </button>
                <button onClick={() => clickedTab('account')} className={`heads ${activeTab === 'account' ? 'active' : ''}`}>
                    Account
                </button>
                <button onClick={() => clickedTab('team')} className={`heads ${activeTab === 'team' ? 'active' : ''}`}>
                    Team
                </button>
            </div>
            <div>
                {activeTab === 'mining' && <MiningPool />}
                {activeTab === 'account' && <UserPanel />}
                {activeTab === 'team' && <TeamInfo />}
            </div>
        </div>
    );
};

export default Bottom;
