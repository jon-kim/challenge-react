export function addAccount(account) {
  return {
    type: 'addAccount',
    account
  }
}

export function deleteAccount(account) {
  return {
    type: 'deleteAccount',
    account
  }
}