import React, { useState, useEffect } from 'react';
import { tokenService } from '../../services/TokenService';
import { BUSINESS_MODEL_CONFIG } from '../../config/BusinessModelConfig';
import Icon from '../../components/AppIcon';

const TokenRedemption = ({ culturalContext = 'default' }) => {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setBalance(tokenService.getBalance());
    setHistory(tokenService.getHistory());
  }, []);

  const handleRedeem = async (itemId) => {
    try {
      const newBalance = await tokenService.redeemTokens(itemId);
      setBalance(newBalance);
      setHistory(tokenService.getHistory());
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-primary to-primary/50 text-white p-6 rounded-xl">
          <h1 className="text-2xl font-bold mb-2">
            {culturalContext === 'hindi' ? 'फिनकॉइन्स बैलेंस' : 'FinCoins Balance'}
          </h1>
          <p className="text-4xl font-bold">{balance}</p>
        </div>

        {/* Redemption Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUSINESS_MODEL_CONFIG.REDEMPTION_ITEMS.map(item => (
            <div key={item.id} className="bg-card p-4 rounded-xl border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.cost} tokens</p>
                </div>
                <button
                  onClick={() => handleRedeem(item.id)}
                  disabled={balance < item.cost}
                  className={`px-4 py-2 rounded-lg ${
                    balance >= item.cost 
                      ? 'bg-primary text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {culturalContext === 'hindi' ? 'रिडीम करें' : 'Redeem'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transaction History */}
        <div className="bg-card p-6 rounded-xl border">
          <h2 className="text-lg font-semibold mb-4">
            {culturalContext === 'hindi' ? 'लेन-देन का इतिहास' : 'Transaction History'}
          </h2>
          <div className="space-y-4">
            {history.map((transaction, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{transaction.reason}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className={`font-medium ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenRedemption;
