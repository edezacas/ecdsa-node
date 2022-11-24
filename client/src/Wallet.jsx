import server from "./server";
import * as scp from "ethereum-cryptography/secp256k1";
import {toHex} from "ethereum-cryptography/utils";

function Wallet({address, setAddress, balance, setBalance, privateKey, setPrivateKey}) {
    async function onChange(evt) {
        const privateKey = evt.target.value;
        setPrivateKey(privateKey);
        const publicKey = scp.getPublicKey(privateKey);
        address = toHex(publicKey);

        setAddress(address);
        if (address) {
            const {
                data: {balance},
            } = await server.get(`balance/${address}`);
            setBalance(balance);
        } else {
            setBalance(0);
        }
    }

    return (
        <div className="container wallet">
            <h1>Your Wallet</h1>

            <label>
                Wallet Address
                <input placeholder="Type a private key" value={privateKey} onChange={onChange}></input>
            </label>

            <div className="balance">Balance: {balance}</div>
        </div>
    );
}

export default Wallet;
