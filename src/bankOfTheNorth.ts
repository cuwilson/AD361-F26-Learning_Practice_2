// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

const USER = "Rose Thecat";
// Location: Line 8
 // Issue: Balance is stored as an array.
 // Explanation: An array cannot be used directly for normal money calculations.
 // Suggested Fix: Use let BALANCE = 15983; if that is the intended balance.
const BALANCE = [15, 983]; //Issue: The account balance is stored as an array instead of a number.
const USER_PIN = 1234;

// Deposits money into a user's account.
// Location: Lines 12-16
 // Issue: Deposit amount is not validated.
 // Explanation: Negative or invalid amounts may be accepted.
 // Suggested Fix: Check that the amount is a valid positive number.
 export function deposit(pin: number, balance: number) {
   if (pin === USER_PIN) {
export function deposit(pin: number, balance: number) {
  if (pin === USER_PIN) {
    balance = BALANCE + balance;  // Issue: The balance is updated incorrectly; should update BALANCE instead of local variable.
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN"); // Suggested Fix: Update BALANCE directly.
  }
}

// Withdraws money from a user's account.
// Location: Lines 33-41
// Issue: Undefined variable.
     // Explanation: balance is not declared in this function.
     // Suggested Fix: Use BALANCE and amount.

     // Location: Line 43
     // Issue: Withdrawal does not subtract money.
     // Explanation: The code uses addition instead of subtraction.
     // Suggested Fix: Use BALANCE -= amount; after validation.
export function withdrawl(pin: number, amount: number) {
  if (pin === USER_PIN) {
    balance = BALANCE + balance; // Issue: The withdrawal is incorrectly adding instead of subtracting. Should be BALANCE -= amount;
    BALANCE -= amount; // Corrected line to subtract the withdrawal amount from the balance.  
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Returns the account balance.
// Location: Lines 51-55
// Issue: PIN verification is missing.
 // Explanation: Anyone can check the balance without a PIN.
 // Suggested Fix: Add and verify a PIN parameter.
export function balanceCheck() {
  return BALANCE;
  // location: Line 59
  // Issue: Unreachable code.
   // Explanation: Code after return never runs.
   // Suggested Fix: Move console.log before return.
  console.log(`Your balance is ${BALANCE}`);
}

// Transfers money to another user's account and withdraws it from the account.
// Location: Lines 67-71
// Issue: Receiver does not receive the money.
 // Explanation: The receiver's account is never updated.
 // Suggested Fix: Subtract from sender and add to receiver.
export function transfer(pin: number, amount: number, reciver: string) {
  // location: Line 72
  // Issue: Missing function argument.
   // Explanation: withdrawl requires both PIN and amount.
   // Suggested Fix: Use withdrawl(pin, amount).
  const transferAmount = withdrawl(amount);
  console.log(`Success! ${amount} was transferred to ${reciver}`);
  return balanceCheck;
  // location: Line 79
  // Issue: Incorrect return value.
   // Explanation: It returns the function instead of the balance.
   // Suggested Fix: Call balanceCheck(pin) after adding PIN verification.
}

// AI transparency: AI was used to clean up this code.
