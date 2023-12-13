export const billListData = {
    pay: [
      {
        type: 'foods',
        name: 'foods',
        emoji: '🍔',
        list: [
          { type: 'food', name: 'food', emoji: '🍕' },
          { type: 'drinks', name: 'drinks', emoji: '🥤' },
          { type: 'dessert', name: 'dessert', emoji: '🍰' },
        ],
      },
      {
        type: 'taxi',
        name: 'taxi',
        emoji: '🚖',
        list: [
          { type: 'taxi', name: 'taxi', emoji: '🚕' },
          { type: 'longdistance', name: 'longdistance', emoji: '🚗' },
        ],
      },
      {
        type: 'recreation',
        name: 'recreation',
        emoji: '⚽',
        list: [
          { type: 'bodybuilding', name: 'bodybuilding', emoji: '🏋️‍♂️' },
          { type: 'game', name: 'game', emoji: '🎮' },
          { type: 'audio', name: 'audio', emoji: '🎧' },
          { type: 'travel', name: 'travel', emoji: '✈️' },
        ],
      },
      {
        type: 'daily',
        name: 'daily',
        emoji: '🛒',
        list: [
          { type: 'clothes', name: 'clothes', emoji: '👕' },
          { type: 'bag', name: 'bag', emoji: '👜' },
          { type: 'book', name: 'book', emoji: '📚' },
          { type: 'promote', name: 'promote', emoji: '🎁' },
          { type: 'home', name: 'home', emoji: '🏠' },
        ],
      },
      {
        type: 'other',
        name: 'other',
        emoji: '🌐',
        list: [{ type: 'community', name: 'community', emoji: '🏘️' }],
      },
    ],
    income: [
      {
        type: 'professional',
        name: 'professional',
        emoji: '💼',
        list: [
          { type: 'salary', name: 'salary', emoji: '💰' },
          { type: 'overtimepay', name: 'overtimepay', emoji: '⏰' },
          { type: 'bonus', name: 'bonus', emoji: '🎉' },
        ],
      },
      {
        type: 'other',
        name: 'other',
        emoji: '💸',
        list: [
          { type: 'financial', name: 'financial', emoji: '💳' },
          { type: 'cashgift', name: 'cashgift', emoji: '🎁' },
        ],
      },
    ],
  };
  
  export const billTypeToName = Object.keys(billListData).reduce((prev, key) => {
    billListData[key].forEach(bill => {
      bill.list.forEach(item => {
        prev[item.type] = item.name
      })
    })
    return prev
  }, {})