const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "040f7c3bb0f016e28904fe5b618db269505702dd9d95dabf08b43bd8b234a579913e99ce17c9d761bc63d4a11c740e0cf65c1e161cefb8f62a299212e71f35b716": 100,
  "04f618ad03e4bc718df3699436aa4b31bb29edb7df8df70ded0c18819e60ca75ac1a7d8b771a79d2dff52da485cd68b3dec56b2844289b963b9049d13d15f3b8a3": 50,
  "04d5762d510924b787b5f33ae96d31a58384af085a78d7aca828a16196f865eaa90264132f12aecbd48c058942326a4bb73eee85b8ec75b0ea703223f3d05d6800": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
