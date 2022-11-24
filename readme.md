## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.


### Example

private key:  b49f27da296488c314f245cf30344495945e65c4c1413751c2f72184f6a9a6de
public key:  040f7c3bb0f016e28904fe5b618db269505702dd9d95dabf08b43bd8b234a579913e99ce17c9d761bc63d4a11c740e0cf65c1e161cefb8f62a299212e71f35b716

private key:  9155a77487ad5e229797816abf108e592a815c4b939f140ea2cbff0ff48deced
public key:  04f618ad03e4bc718df3699436aa4b31bb29edb7df8df70ded0c18819e60ca75ac1a7d8b771a79d2dff52da485cd68b3dec56b2844289b963b9049d13d15f3b8a3

private key:  f623fdd4c30d5abaf8b60a92982e4f0f836d9be8282b0405e695609f5e20c144
public key:  04d5762d510924b787b5f33ae96d31a58384af085a78d7aca828a16196f865eaa90264132f12aecbd48c058942326a4bb73eee85b8ec75b0ea703223f3d05d6800
