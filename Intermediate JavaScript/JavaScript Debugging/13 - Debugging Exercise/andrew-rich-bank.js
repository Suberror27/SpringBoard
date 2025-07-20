const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id == id)
		{
			return account;
		}
	}
}

function validateCreateAccountArgs(newAccountId, newAccountOwner) {
  // check if newAccountId is number
  if (!Number.isInteger(newAccountId))  {
    throw new Error("Account id must be an integer");
  }
  
  if (typeof newAccountOwner !== 'string') {
    throw new Error("Account owner argument must be a string");
  }
  
  if(newAccountId < 0) {
    throw new Error("Id must be a positive number")
  }
  
  if (newAccountOwner.trim().length === 0) {
    throw new Error("Account owner must be a valid string");
  }
  
  for(const user of accounts) {
		if(user.id === newAccountId) {
			throw new Error("User already exists in DataBase");
		}
	};
  
  return true;
}

// separation of concerns
function createAccount (newAccountId, newAccountOwner)
{
  validateCreateAccountArgs(newAccountId, newAccountOwner);
  accounts.push(
    {
      id: newAccountIdChecked,
      owner: newAccountOwnerChecked,
      balance: 0
    }
  );
}

function depositMoney (accountId, amount)
{
	let amountChecked = parseInt(amount);
	
	if(Number.isNaN(amountChecked + 1) || amountChecked <= 0) throw new Error("Deposits amount must be greater than 0 and must be 'integers'")
	else {
		const account = getAccountById(accountId);

		if (!account)
		{
			throw new Error("Account not found");
		}

		account.balance += amountChecked;
	}
	
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount))
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}

	if (amount <= 0) {
		throw new Error("Amount to withdraw must be greater than 0.")
	}

	if (account.balance - amount < 0) throw new Error("Amount to withdraw cannot exceed the balance amount")

	account.balance -= amount;
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount)
	{
		throw new Error("Source account not found.");
	}

	if (!toAccount) {
		throw new Error("To account not found");
	}

	if (!Number.isFinite(amount) || amount < 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

	if (fromAccount.balance - amount < 0) throw new Error("Amount to withdraw cannot exceed the balance amount")

	toAccount.balance += amount;
	fromAccount.balance -= amount;
}

/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/