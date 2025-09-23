import { BUSINESS_MODEL_CONFIG } from '../config/BusinessModelConfig';

class TokenService {
  constructor() {
    this.storageKey = 'finsense_tokens';
  }

  getBalance() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored).balance : 0;
  }

  addTokens(amount, reason) {
    const current = this.getBalance();
    const updated = {
      balance: current + amount,
      lastUpdated: new Date().toISOString(),
      history: this.getHistory().concat({
        amount,
        reason,
        timestamp: new Date().toISOString()
      })
    };
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    return updated.balance;
  }

  getHistory() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored).history || [] : [];
  }

  redeemTokens(itemId) {
    const item = BUSINESS_MODEL_CONFIG.REDEMPTION_ITEMS.find(i => i.id === itemId);
    if (!item) throw new Error('Invalid redemption item');

    const balance = this.getBalance();
    if (balance < item.cost) throw new Error('Insufficient tokens');

    const updated = {
      balance: balance - item.cost,
      lastUpdated: new Date().toISOString(),
      history: this.getHistory().concat({
        amount: -item.cost,
        reason: `Redeemed ${item.name}`,
        timestamp: new Date().toISOString()
      })
    };
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    return updated.balance;
  }
}

export const tokenService = new TokenService();
