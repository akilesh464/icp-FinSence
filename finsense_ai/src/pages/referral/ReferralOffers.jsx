import React, { useState, useEffect } from 'react';
import { BUSINESS_MODEL_CONFIG, addTokens, getTokenBalance } from '../../utils/BusinessModelConfig';

const ReferralOffers = () => {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [referralCount, setReferralCount] = useState(0);

  useEffect(() => {
    setTokenBalance(getTokenBalance());
    // Generate or get existing referral code
    let code = localStorage.getItem('referral_code');
    if (!code) {
      code = 'FINS' + Math.random().toString(36).substr(2, 6).toUpperCase();
      localStorage.setItem('referral_code', code);
    }
    setReferralCode(code);
    
    // Get referral count
    const count = parseInt(localStorage.getItem('referral_count') || '0');
    setReferralCount(count);
  }, []);

  const handleReferralSuccess = () => {
    const newCount = referralCount + 1;
    setReferralCount(newCount);
    localStorage.setItem('referral_count', newCount.toString());
    
    const newBalance = addTokens(BUSINESS_MODEL_CONFIG.TOKEN_REWARDS.referralBonus, 'referral');
    setTokenBalance(newBalance);
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied to clipboard!');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Referral Program</h1>
      
      {/* Token Balance */}
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Your FinCoins Balance</h2>
        <p className="text-2xl font-bold text-blue-600">{tokenBalance} FinCoins</p>
      </div>

      {/* Referral Code Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Referral Code</h2>
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-lg flex-1">
            <code className="text-lg font-mono">{referralCode}</code>
          </div>
          <button
            onClick={copyReferralCode}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Copy Code
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Share this code with friends and earn {BUSINESS_MODEL_CONFIG.TOKEN_REWARDS.referralBonus} FinCoins for each successful referral!
        </p>
      </div>

      {/* Referral Stats */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Referral Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold">Successful Referrals</h3>
            <p className="text-2xl font-bold text-green-600">{referralCount}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold">Tokens Earned</h3>
            <p className="text-2xl font-bold text-purple-600">
              {referralCount * BUSINESS_MODEL_CONFIG.TOKEN_REWARDS.referralBonus}
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold">Max Referrals</h3>
            <p className="text-2xl font-bold text-blue-600">
              {BUSINESS_MODEL_CONFIG.REFERRAL_CONFIG.maxReferrals}
            </p>
          </div>
        </div>
      </div>

      {/* Partner Offers */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Partner Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUSINESS_MODEL_CONFIG.PARTNER_CATEGORIES.map((category, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{category}</h3>
              <p className="text-sm text-gray-600 mb-3">
                Exclusive offers and cashback opportunities
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600">
                View Offers
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">How Referrals Work</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Share your unique referral code with friends and family</li>
          <li>They sign up using your code and complete their profile</li>
          <li>You earn {BUSINESS_MODEL_CONFIG.TOKEN_REWARDS.referralBonus} FinCoins for each successful referral</li>
          <li>Use FinCoins to unlock premium features or redeem rewards</li>
          <li>Maximum {BUSINESS_MODEL_CONFIG.REFERRAL_CONFIG.maxReferrals} referrals allowed</li>
        </ol>
      </div>
    </div>
  );
};

export default ReferralOffers;
