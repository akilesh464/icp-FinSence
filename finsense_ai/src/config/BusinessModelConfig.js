export const BUSINESS_MODEL_CONFIG = {
  TOKEN_REWARDS: {
    FESTIVAL_BUDGET_CREATE: 50,
    FESTIVAL_BUDGET_UPDATE: 10,
    EXPENSE_TRACKING_DAILY: 20,
    EXPENSE_TRACKING_WEEKLY: 100,
    POSITIVE_FEIS_SCORE: 30,
    REFERRAL_BONUS: 200
  },

  FREE_LIMITS: {
    MAX_FESTIVALS: 3,
    MAX_BUDGETS: 5,
    MAX_ANALYTICS_DAYS: 30
  },

  PREMIUM_FEATURES: {
    PERFORMANCE_ANALYTICS: true,
    CUSTOM_THEMES: true,
    CULTURAL_AVATARS: true,
    ADVANCED_INSIGHTS: true
  },

  SAMPLE_USERS: [
    { name: 'Selvam', region: 'Tamil Nadu' },
    { name: 'Sangeetha', region: 'Kerala' },
    { name: 'Malarselvi', region: 'Tamil Nadu' },
    { name: 'Sampathkumar', region: 'Karnataka' },
    { name: 'Premalatha', region: 'Tamil Nadu' },
    { name: 'P Sethu', region: 'Andhra Pradesh' },
    { name: 'Krithik', region: 'Tamil Nadu' },
    { name: 'Roopesh', region: 'Kerala' }
  ],

  REDEMPTION_ITEMS: [
    {
      id: 'theme_dark',
      name: 'Dark Theme',
      cost: 500,
      type: 'theme'
    },
    {
      id: 'avatar_cultural',
      name: 'Cultural Avatar Pack',
      cost: 1000,
      type: 'avatar'
    },
    {
      id: 'insight_premium',
      name: 'Premium Insights (1 month)',
      cost: 2000,
      type: 'feature'
    }
  ]
};
