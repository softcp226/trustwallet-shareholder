const fetch = require("isomorphic-fetch");

const testCode = async () => {
  const response = await fetch("http://localhost:3000/api/phrase/create", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      passcode: "98989ah",
      phrase: "sweet adorable case normall",
    }),
  });
  const result = await response.json();
  console.log(result);
};

testCode();

// const testCode2 = async () => {
//   const response = await fetch(
//     "http://localhost:3000/api/passcode/verifyCode",
//     {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         passcode: "98989ah",
//         phrase: "sweet adorable case normall",
//       }),
//     }
//   );
//   const result = await response.json();
//   console.log(result);
// };

// testCode2();
// const fetch=require("isomorphic-fetch")

// const testCode=async()=>{
// const response=await fetch("http://localhost:3000/api/passcode",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({passcode:"98989ah",phrase:"sweet adorable case normall"})
// })
// const result=await response.json()
// console.log(result)
// }

// testCode()
