// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

const USER = "Rose Thecat";
let BALANCE = 15983; // FIX ISSUE 01
const USER_PIN = 1234;

// Deposits money into a user's account.
export function deposit(pin: number, amount: number) {
  // FIX ISSUE 02
  if (amount <= 0) {
    console.log("Deposit amount must be greater than zero.");
    return BALANCE;
  }
  if (pin === USER_PIN) {
    BALANCE += amount; // FIX ISSUE 03
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Withdraws money from a user's account.
export function withdrawl(pin: number, amount: number) {
  if (pin === USER_PIN) {
    if (amount > BALANCE || amount <= 0) { // FIX ISSUE 11
      console.log("Insufficient funds.");
      return undefined;
    }
    BALANCE -= amount; // FIX ISSUE 04 and 05
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Returns the account balance.
export function balanceCheck(pin: number) {
  // FIX ISSUE 06
  if (pin === USER_PIN) {
    // FIX ISSUE 07
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(pin: number, amount: number, reciver: string) {
  const transferAmount = withdrawl(pin, amount); // FIX ISSUE 09
  if (transferAmount === undefined) { // FIX ISSUE 12
    console.log('Issue with transfering funds.');
  }
  else {
    console.log(`Success! ${amount} was transferred to ${reciver}`);
    return balanceCheck(pin); // FIX ISSUE 10
  }

}

// AI transparency: AI was used to clean up this code.
