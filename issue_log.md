# Learning Practice 2 - Static Testing Issue Log

**Project:** AD361 Learning Practice 2  
**Role:** Scribe  
**File Reviewed:** `src/bankOfTheNorth.ts`  
**Total Issues:** 12

## Defect Log

| ID | Location | Issue | Explanation | Suggested Fix | Status |
|---|---|---|---|---|---|
| 01 | Line 8 | Balance stored as an array | The balance is stored as an array instead of a number. This causes problems when trying to add or subtract money. | Change the balance to a number using `let BALANCE = 15983;` if that is the correct amount. | Closed |
| 02 | `deposit()` | Missing amount validation | The deposit function doesn't check whether the amount is valid. Someone could enter a negative number or zero. | Add a check to make sure the amount is a valid positive number. | Closed |
| 03 | `deposit()` | Balance not updated correctly | The function changes a local variable instead of updating the actual account balance. | Update the account balance after checking the PIN and deposit amount. | Closed |
| 04 | `withdrawl()` | Undefined variable | The function uses `balance`, but that variable hasn't been declared in the function. | Use the correct account balance variable instead. | Closed |
| 05 | `withdrawl()` | Incorrect calculation | The withdrawal function adds money instead of subtracting it. | Subtract the withdrawal amount from the account balance. | Closed |
| 06 | `balanceCheck()` | Missing PIN check | The function allows someone to check the balance without entering a PIN. | Require a PIN and verify it before showing the balance. | Closed |
| 07 | `balanceCheck()` | Unreachable code | The message showing the balance is placed after `return`, so it never runs. | Move `console.log()` before the return statement. | Closed |
| 08 | `transfer()` | Recipient doesn't receive money | The function attempts to withdraw money but doesn't add it to the receiver's account. | Add a way to update the receiver's balance after a successful transfer. | Closed |
| 09 | `transfer()` | Missing function argument | The transfer function calls `withdrawl(amount)` even though the withdrawal function needs both a PIN and an amount. | Change it to `withdrawl(pin, amount)`. | Closed |
| 10 | `transfer()` | Incorrect return value | The function returns `balanceCheck` instead of calling it, so it returns the function rather than the balance. | Call the balance check function with the required PIN or return the updated balance. | Closed |
| 11 | `withdrawl()` | No insufficient funds check | The function doesn't check whether the user has enough money before making a withdrawal. This could cause a negative balance. | Check the available balance before allowing the withdrawal. | Closed |
| 12 | `transfer()` | Incorrect success message | The function displays a success message even if the withdrawal fails or the PIN is incorrect. | Only display the success message after confirming the transfer was completed. | Closed |

## Review Notes

During the code review, we found 12 issues involving the account balance, deposits, withdrawals, PIN verification, and transfers.

The first 10 issues came from the original review comments. Two additional issues were identified involving insufficient funds and incorrect transfer success messages.

All issues are currently marked as Open because the corrected code still needs to be checked.

## Issue Status

- **Open:** The issue has been identified but hasn't been fixed or verified yet.
- **In Progress:** The Author is working on fixing the issue.
- **Resolved:** The issue has been fixed and verified.
- **Closed:** The team has finished reviewing the issue and no further changes are needed.

## Next Steps

1. Review the issue log with the team.
2. Make sure the Author knows which issues need to be fixed.
3. Check the updated code once the Author finishes.
4. Update the issue statuses based on the corrections.
5. Push the completed issue log to GitHub.
