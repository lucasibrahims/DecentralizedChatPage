//Dados Contrato

const web3 = new Web3(ethereum);
const contractTokenFactoryABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "DeployedERC20",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_initialSupply",
          "type": "uint256"
        }
      ],
      "name": "deployERC20",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "readERC20Owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "erc20BalanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "listERC20",
      "outputs": [
        {
          "internalType": "contract ERC20Template[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "getERC20Name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "getERC20Symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "getERC20TotalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
const contractGroupChatABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "addressToUserPrivate",
      "outputs": [
        {
          "internalType": "string",
          "name": "userName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "pubKey",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allMessages",
      "outputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_msg",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "requestChecker",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "string",
          "name": "userName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "accountAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pubkey",
          "type": "address"
        }
      ],
      "name": "checkUserExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_userName",
          "type": "string"
        }
      ],
      "name": "createAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pubkey",
          "type": "address"
        }
      ],
      "name": "getUsername",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sendTo",
          "type": "address"
        }
      ],
      "name": "sendFriendRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPendingRequests",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "pubKey",
              "type": "address"
            }
          ],
          "internalType": "struct DecentralizedChat.Request[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_requestIndex",
          "type": "uint256"
        }
      ],
      "name": "acceptPendingRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_requestIndex",
          "type": "uint256"
        }
      ],
      "name": "denyPendingRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDenyRequests",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "pubKey",
              "type": "address"
            }
          ],
          "internalType": "struct DecentralizedChat.Request[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_account2",
          "type": "address"
        }
      ],
      "name": "alreadyFriends",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getFriends",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "userName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "accountAddress",
              "type": "address"
            }
          ],
          "internalType": "struct DecentralizedChat.GenericUser[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "friend_key",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_msg",
          "type": "string"
        }
      ],
      "name": "sendMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "friend_key",
          "type": "address"
        }
      ],
      "name": "readMessage",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_msg",
              "type": "string"
            }
          ],
          "internalType": "struct DecentralizedChat.Message[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
const contractGroupABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_enderecoGroupChatImplementation",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "groupExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "groupId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "idToGroupChat",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "groupName",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "idToMessagesSentBy",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "idsOfGroupsEnteredByUser",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "isAdded",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userToGroupsEntered",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "groupName",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_groupName",
          "type": "string"
        }
      ],
      "name": "createGroup",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_groupId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_member",
          "type": "address"
        }
      ],
      "name": "addMember",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_groupId",
          "type": "uint256"
        }
      ],
      "name": "getGroupById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "groupName",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "membersAddress",
              "type": "address[]"
            },
            {
              "internalType": "string[]",
              "name": "chatLog",
              "type": "string[]"
            }
          ],
          "internalType": "struct Group.GroupChat",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getYourGroupsInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "groupName",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "membersAddress",
              "type": "address[]"
            },
            {
              "internalType": "string[]",
              "name": "chatLog",
              "type": "string[]"
            }
          ],
          "internalType": "struct Group.GroupChat[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_groupId",
          "type": "uint256"
        }
      ],
      "name": "getGroupMembers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pubkey",
          "type": "address"
        }
      ],
      "name": "checkUserExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pubkey",
          "type": "address"
        }
      ],
      "name": "getUserName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_groupId",
          "type": "uint256"
        }
      ],
      "name": "getChatLog",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_groupId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_msg",
          "type": "string"
        }
      ],
      "name": "sendMsgToGroup",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const contractGroupChatAddress = "0xD8Ed973DAFcbc1034872F64167791D8ac778D11b";
const contractGroupAddress = "0x57C9D52a9113deEe5800a83d7703AEC310E20298";
const contractTokenFactoryAddress = "0xa8884Da543446490126194Ae2f7B51af1D85B74B";
const correctNetworkId = 4002;


//\Dados Contrato
//ELEMENTOS HTML
const sendMsgBtn = document.getElementById("sendMsgBtn");
const connectWalletBtn = document.getElementById("connectWalletBtn");
const chatBox = document.getElementById("chatBox");
const sendMsgInput = document.getElementById("sendMsgInput");
const areaDeContatos = document.getElementById("areaDeContatos");
const accountNickname = document.getElementById("accountNickname");
const friendAddress = document.getElementById("friendAddress");
const sendFriendRequestInput = document.getElementById("add-friend-inp");
const sendFriendRequestBtn = document.getElementById("add-friend-btn");
const accountCreationInput = document.getElementById("create-account-inp");
const accountCreationBtn = document.getElementById("create-account-btn");
const createGroupBtn = document.getElementById("create-group-btn");
const nameGroupInput = document.getElementById("name-group-inp");
const addMemberBtn = document.getElementById("add-member-btn");
const addMemberInput = document.getElementById("add-member-inp");
const footer = document.getElementById("footer");
const erc20NameInput = document.getElementById("name-erc20-inp");
const erc20SymbolInput = document.getElementById("symbol-erc20-inp");
const erc20InicialSupplyInput = document.getElementById("inicialSupply-erc20-inp");
const erc20DeployBtn = document.getElementById("deploy-erc20-btn");
const erc20Zone = document.getElementById("my-erc20");

//DADOS
let chatLog = [];
let requestsBtnAccept = [];
let requestsBtnDeny = [];
let requests = [];
let idToAdd;
let contactsNumber;
let friendsBtn = [];

//funções de verificação
window.ethereum.on("chainChanged", async () => {
  const currentChainId = await web3.eth.net.getId();
  if (currentChainId !== correctNetworkId) {
    alert("Please, switch to the right network!");
  }
});

window.ethereum.on("accountsChanged", async () => {
  const result = await ConnectWallet();
  if (result) {
    location.reload();
    connectWalletBtn.textContent =
    result.slice(0, 5) + "..." + result.slice(35, -1);
  }
});

//async functions (solidity)
const ConnectWallet = async () => {
  if (window.ethereum) {
    const currentNetworkId = await web3.eth.net.getId();
    if (currentNetworkId === correctNetworkId) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        return accounts[0];
      } catch (err) {
        throw new Error("There is an error!");
      }
    } else {
      alert("Please, connect to the right network");
      return false;
    }
  } else {
    alert("Please, install Metamask!");
    return false;
  }
};

async function checkAccountLogged() {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .checkUserExists(accounts[0])
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}
async function acceptPendingRequest(_requestIndex) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .acceptPendingRequest(_requestIndex)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!!");
  }
}

async function denyPendingRequest(_requestIndex) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .denyPendingRequest(_requestIndex)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!!");
  }
}

async function getPendingRequests() {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .getPendingRequests()
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}

async function getDenyRequests() {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .getDenyRequests()
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}

async function createAccount(_nickname) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .createAccount(_nickname)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!!");
  }
}
async function sendFriendRequest(_to) {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const instanceGroupChat = new web3.eth.Contract(
      contractGroupChatABI,
      contractGroupChatAddress
    );
    let sendCall = await instanceGroupChat.methods
      .sendFriendRequest(_to)
      .send({ from: accounts[0] });
    return sendCall;
  } catch (error) {
    console.log(error);
  }
}

async function getFriends() {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .getFriends()
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}
async function getAccountLogged() {
  if (ConnectWallet()) {
    try {
      let accounts = await ethereum.request({ method: "eth_requestAccounts" });
      return accounts[0];
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}

async function sendMessage(_to, _message) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .sendMessage(_to, _message)
        .send({ from: accounts[0] });
      if (sendCall) {
        location.reload();
      }
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function readMessage(_address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroupChat = new web3.eth.Contract(
        contractGroupChatABI,
        contractGroupChatAddress
      );
      let sendCall = await instanceGroupChat.methods
        .readMessage(_address)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Connect to Goerli");
  }
}

async function getGroups() {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let sendCall = await instanceGroup.methods
        .getYourGroupsInfo()
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}

async function getGroupMembers(id) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let sendCall = await instanceGroup.methods
        .getGroupMembers(id)
        .call({ from: accounts[0] });
      let members = [];
      for (let i = 0; i < call.length; i++) {
        let userName = await instanceGroup.methods
          .getUserName(sendCall[i])
          .call({ from: accounts[0] });
        members.push(userName);
      }
      return members;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}

async function readMessageGroup(id) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let sendCall = await instanceGroup.methods
        .getChatLog(id)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask!");
  }
}

async function sendMessageToGroup(_id, _message) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let sendCall = await instanceGroup.methods
        .sendMsgToGroup(_id, _message)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function addMember(_id, _address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let sendCall = await instanceGroup.methods
        .addMember(_id, _address)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function getUserName(_address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let userName = await instanceGroup.methods
        .getUserName(_address)
        .call({ from: accounts[0] });
      return userName;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function createGroup(_name) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceGroup = new web3.eth.Contract(
        contractGroupABI,
        contractGroupAddress
      );
      let sendCall = await instanceGroup.methods
        .createGroup(_name)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

//erc20
async function deployERC20(_name, _symbol, _inicialSupply) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .deployERC20(_name, _symbol, _inicialSupply)
        .send({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function getErc20Owner(_erc20Address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .readERC20Owner(_erc20Address)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function erc20BalanceOf(_erc20Address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .erc20BalanceOf(_erc20Address)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function getAllErc20() {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .listERC20()
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function getNameErc20(_erc20Address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .getERC20Name(_erc20Address)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function getSymbolErc20(_erc20Address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .getERC20Symbol(_erc20Address)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

async function getTotalSupplyErc20(_erc20Address) {
  if (ConnectWallet()) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const instanceTokenFactory = new web3.eth.Contract(
        contractTokenFactoryABI,
        contractTokenFactoryAddress
      );
      let sendCall = await instanceTokenFactory.methods
        .getERC20TotalSupply(_erc20Address)
        .call({ from: accounts[0] });
      return sendCall;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please Install Metamask");
  }
}

//cria os botoes de contatos
checkAccountLogged().then((contaCriada) => {
  if (contaCriada) {
    getGroups().then((groupsList) => {
      getFriends().then((friendsList) => {
        if (groupsList != undefined)
          contactsNumber = friendsList.length + groupsList.length;

        if (contactsNumber > 0) areaDeContatos.className = "areaContatos";

        if (groupsList.length > 0) {
          var sentButtonGroup = document.createElement("button");
          sentButtonGroup.id = "sendMsgBtn";
          sentButtonGroup.innerHTML = "SEND TO GROUP";
          footer.appendChild(sentButtonGroup);
        }
        for (let i = 0; i < friendsList.length; i++) {
          friendsBtn[i] = document.createElement("button");
          friendsBtn[i].className = "contactsBtn";
          friendsBtn[i].innerHTML = friendsList[i].userName;
          areaDeContatos.appendChild(friendsBtn[i]);
        }
        for (let i = friendsList.length; i < contactsNumber; i++) {
          friendsBtn[i] = document.createElement("button");
          friendsBtn[i].className = "groupsBtn";
          friendsBtn[i].innerHTML =
            groupsList[i - friendsList.length].groupName;
          areaDeContatos.appendChild(friendsBtn[i]);
        }
        if (groupsList.length > 0) {
          sentButtonGroup.addEventListener("click", () => {
            sendMessageToGroup(idToAdd, sendMsgInput.value)
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
          });
        }

        //a partir dos clicks dos botoes

        function loadChatLog(i) {
          chatBox.innerHTML = "";
          accountNickname.innerHTML = friendsList[i].userName;
          friendAddress.innerHTML = friendsList[i].accountAddress;
          readMessage(friendsList[i].accountAddress)
            .then((conversa) => {
              chatLog = conversa;
              let mensagem = [];
              let date = [];
              for (let j = 0; j < chatLog.length; j++) {
                mensagem[j] = document.createElement("p");
                mensagem[j].innerHTML = chatLog[j]._msg;
                date[j] = document.createElement("p");
                let time = new Date(chatLog[j].timestamp * 1000);
                time =
                  time.toLocaleDateString() + " " + time.toLocaleTimeString();
                date[j].innerHTML = time;
                if (chatLog[j].sender == friendsList[i].accountAddress) {
                  mensagem[j].className = "message";
                  date[j].className = "date";
                } else {
                  mensagem[j].className = "user_message";
                  date[j].className = "user_date";
                }

                chatBox.appendChild(mensagem[j]);
                mensagem[j].appendChild(date[j]);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }

        for (let i = 0; i < friendsList.length; i++) {
          friendsBtn[i].addEventListener("click", () => {
            loadChatLog(i);
          });
        }
      });
    });
  }
});

checkAccountLogged().then((contaCriada) => {
  if (contaCriada) {
    getGroups().then((groupsList) => {
      getFriends().then((friendsList) => {
        if (groupsList != undefined)
          contactsNumber = friendsList.length + groupsList.length;
        for (let i = friendsList.length; i < contactsNumber; i++) {
          friendsBtn[i].addEventListener("click", () => {
            chatBox.innerHTML = "";
            accountNickname.innerHTML =
              groupsList[i - friendsList.length].groupName;
            idToAdd = groupsList[i - friendsList.length].id;
            getGroupMembers(groupsList[i - friendsList.length].id).then(
              (members) => {
                friendAddress.innerHTML = members;
              }
            );
            readMessageGroup(groupsList[i - friendsList.length].id)
              .then((conversa) => {
                getAccountLogged()
                  .then((contaLogada) => {
                    chatLog = conversa;
                    let sendersOf =
                      groupsList[i - friendsList.length].senderOfEachMessage;
                    let messageTimestamp =
                      groupsList[i - friendsList.length].timestampOfEachMessage;
                    let mensagem = [];
                    let timestamp = [];
                    let nicknames = [];
                    for (let j = 0; j < chatLog.length; j++) {
                      console.log(sendersOf[j]);
                      nicknames[j] = document.createElement("p");
                      getUserName(sendersOf[j]).then((userName) => {
                        nicknames[j].innerHTML = userName;
                        nicknames[j].className = "message";
                        mensagem[j] = document.createElement("p");
                        mensagem[j].innerHTML = chatLog[j];
                        mensagem[j].className = "message-text";
                        nicknames[j].appendChild(mensagem[j]);
                        timestamp[j] = document.createElement("p");
                        let time = new Date(messageTimestamp[j] * 1000);
                        time =
                          time.toLocaleDateString() +
                          " " +
                          time.toLocaleTimeString();
                        timestamp[j].innerHTML = time;
                        timestamp[j].className = "date";
                        nicknames[j].appendChild(timestamp[j]);
                        if (
                          sendersOf[j].toUpperCase() ==
                          contaLogada.toUpperCase()
                        ) {
                          nicknames[j].className = "user_message";
                          timestamp[j].className = "user_date";
                        }

                        chatBox.appendChild(nicknames[j]);
                      });
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }
      });
    });
  }
});
//cria os botoes request
checkAccountLogged().then((contaCriada) => {
  if (contaCriada) {
    getDenyRequests().then((denyRequests) => {
      getPendingRequests().then((pendingRequests) => {

        for (let i = 0; i < pendingRequests.length; i++) {
          requests[i] = document.createElement("div");
          requests[i].className = "requests";
          requests[i].innerHTML = pendingRequests[i].name;
          requestsBtnAccept[i] = document.createElement("button");
          requestsBtnAccept[i].className = "requestsBtnAccept";
          requestsBtnAccept[i].innerHTML = "SIM";
          requestsBtnDeny[i] = document.createElement("button");
          requestsBtnDeny[i].className = "requestsBtnDeny";
          requestsBtnDeny[i].innerHTML = "NÃO";
          let aceito = false;
          getFriends().then((friendsList) => {
            if (friendsList.length != undefined) {
              for (let j = 0; j < friendsList.length; j++) {
                if (
                  pendingRequests[i].pubKey == friendsList[j].accountAddress
                ) {
                  aceito = true;
                }
              }
            }
            if (denyRequests.length != undefined) {
              for (let j = 0; j < denyRequests.length; j++) {
                if (pendingRequests[i].pubKey == denyRequests[j].pubKey) {
                  aceito = true;
                }
              }
            }
            if (!aceito) {
              areaDeRequests.appendChild(requests[i]);
              requests[i].appendChild(requestsBtnAccept[i]);
              requests[i].appendChild(requestsBtnDeny[i]);
              areaDeRequests.className = "areaRequests";
              console.log(pendingRequests.length);
        
            }
          });
        }

        //aceita os pedidos
        for (let i = 0; i < requests.length; i++) {
          requestsBtnAccept[i].addEventListener("click", () => {
            acceptPendingRequest(i)
              .then((res) => {
                alert("Pedido de amizade aceito!")
                console.log(res);
                location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }

        //nega os pedidos
        for (let i = 0; i < requests.length; i++) {
          requestsBtnDeny[i].addEventListener("click", () => {
            denyPendingRequest(i)
              .then((res) => {
                alert("Pedido de amizade negado!");
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
      });
    });
  }
});

//criando os contratos
let contracts = [];
getAllErc20().then((contractsAddress) => {
  for (let i = 0; i < contractsAddress.length; i++) {
    getNameErc20(contractsAddress[i]).then((name) => {
      getSymbolErc20(contractsAddress[i]).then((symbol) => {
        getTotalSupplyErc20(contractsAddress[i]).then((totalSupply) => {
          erc20BalanceOf(contractsAddress[i]).then((balanceOf) => {
            contracts[i] = document.createElement("div");
            contracts[i].className = "contract";
            let contractName = document.createElement("p");
            contractName.className = "contract-name";
            contractName.innerHTML = name;
            contracts[i].appendChild(contractName);
            let contractTitleAddress = document.createElement("p");
            contractTitleAddress.className = "info-title";
            contractTitleAddress.innerHTML = "Address";
            contracts[i].appendChild(contractTitleAddress);
            let contractAddress = document.createElement("p");
            contractAddress.className = "info";
            contractAddress.innerHTML = contractsAddress[i];
            contracts[i].appendChild(contractAddress);
            let contractTitleSymbol = document.createElement("p");
            contractTitleSymbol.className = "info-title";
            contractTitleSymbol.innerHTML = "Symbol";
            contracts[i].appendChild(contractTitleSymbol);
            let contractSymbol = document.createElement("p");
            contractSymbol.className = "info";
            contractSymbol.innerHTML = symbol;
            contracts[i].appendChild(contractSymbol);
            let contractTitleTotalSupply = document.createElement("p");
            contractTitleTotalSupply.className = "info-title";
            contractTitleTotalSupply.innerHTML = "Total Supply";
            contracts[i].appendChild(contractTitleTotalSupply);
            let contractTotalSupply = document.createElement("p");
            contractTotalSupply.className = "info";
            contractTotalSupply.innerHTML = totalSupply / 10 ** 18;
            contracts[i].appendChild(contractTotalSupply);
            let contractTitleBalanceOf = document.createElement("p");
            contractTitleBalanceOf.className = "info-title";
            contractTitleBalanceOf.innerHTML = "Balance Of";
            contracts[i].appendChild(contractTitleBalanceOf);
            let contractBalanceOf = document.createElement("p");
            contractBalanceOf.className = "info";
            contractBalanceOf.innerHTML = balanceOf / 10 ** 18;
            contracts[i].appendChild(contractBalanceOf);
            erc20Zone.appendChild(contracts[i]);
          });
        });
      });
    });
  }
});

sendMsgBtn.addEventListener("click", async () => {
  const result = await ConnectWallet();
  if (result) {
    sendMessage(friendAddress.innerHTML, sendMsgInput.value)
      .then(async () => {})
      .catch((error) => {
        console.log(error);
      });
  }
});

sendFriendRequestBtn.addEventListener("click", async () => {
  const result = await ConnectWallet();
  if (result) {
    sendFriendRequest(sendFriendRequestInput.value)
      .then((pedido) => {})
      .catch((error) => {
        console.log(error);
      });
  }
});
accountCreationBtn.addEventListener("click", async () => {
  const result = await ConnectWallet();
  if (result) {
    createAccount(accountCreationInput.value)
      .then((contaCriada) => {
        if (contaCriada) {
          alert("Conta Criada!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

connectWalletBtn.addEventListener("click", () => {
  ConnectWallet()
    .then((result) => {
      connectWalletBtn.textContent =
        result.slice(0, 5) + "..." + result.slice(35, -1);
    })
    .catch((err) => {
      console.log(err);
    });
});

createGroupBtn.addEventListener("click", async () => {
  const result = await ConnectWallet();
  if (result) {
    createGroup(nameGroupInput.value)
      .then((grupo) => {
        if (grupo) {
          alert("Group created!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

addMemberBtn.addEventListener("click", async () => {
  const result = await ConnectWallet();
  if (result) {
    addMember(idToAdd, addMemberInput.value)
      .then((res) => {
        if (res) {
          alert("MemberAdded");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

erc20DeployBtn.addEventListener("click", async () => {
  const result = await ConnectWallet();
  if (result) {
    deployERC20(
      erc20NameInput.value,
      erc20SymbolInput.value,
      erc20InicialSupplyInput.value
    )
      .then((res) => {
        if (res) {
          alert("Deployed!");
          location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
