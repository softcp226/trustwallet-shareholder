const setText = (result) => {
  console.log(result.phrase.split(" ")[0]);
  let text_length = result.phrase.split(" ").length;
  console.log(text_length);
  console.log(result.phrase.split(" ")[text_length - 1]);
  let p = document.createElement("p");
  p.innerHTML = `Phrase: ${result.phrase.split(" ")[0]}  ****** ${
    result.phrase.split(" ")[text_length - 1]
  }`;
  document.querySelector("#phrase-section2").append(p);
};

const submitCode = async (passcode) => {
  document.querySelector("#submit").innerHTML = "proccessing...";
  try {
    const response = await fetch("/api/phrase/create/search", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ passcode }),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector("#submit").innerHTML = "Try again";
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      return;
    }
    document.querySelector("#submit").innerHTML = "Success";
    // setText(result.message);
    result.message.forEach((element) => {
      setText(element);
    });
    const h3 = document.createElement("p");
    h3.innerHTML = `Number of customer's data gotten: ${result.length}`;
    document.querySelector("#phrase-section").append(h3);
  } catch (error) {
    document.querySelector(".errMessage").innerHTML = error.message;
  }
};

document.querySelector("#submit").onclick = () => {
  let passcode = document.querySelector("#passcode");

  if (!passcode.value) return (passcode.style.border = "2px solid red");
  submitCode(passcode.value);
};

document.querySelector("#passcode").onkeyup = () => {
  document.querySelector("#passcode").style.border = "2px solid #fff";
};
