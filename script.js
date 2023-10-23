data = {
  acc: [
    {
      savol: "How many team members can I invite?",
      javob:
        "You can invite up to 2 additional users on the Free plan. There isno limit on team members for the Premium plan.",
    },
    {
      savol: " What is the maximum file upload size?",
      javob:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      savol: " How do I reset my password?",
      javob:
        "Click “Forgot password” from the login page or “Change password”from your profile page. A reset link will be emailed to you.",
    },
    {
      savol: "Can I cancel my subscription?",
      javob:
        "Yes! Send us a message and we’ll process your request no questionsasked.",
    },
    {
      savol: "Do you provide additional support?",
      javob:
        " Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ],
};

let text_2 = document.querySelectorAll(".text_2");

let icon = document.querySelectorAll(".text_2 .icon");
let p = document.querySelectorAll("p");
let icons = document.querySelectorAll(".fa-arrow-down");
let icons2 = document.querySelectorAll(".fa-arrow-up");

for (let i = 0; i < data.acc.length; i++) {
  icon[i].textContent = data.acc[i].savol;
}

for (let i = 0; i < data.acc.length; i++) {
  p[i].textContent = data.acc[i].javob;
  p[i].style.display = "none";
  icons2[i].style.display = "none";
}

let son;
for (let i = 0; i < data.acc.length; i++) {
  icons[i].onclick = function () {
    p[i].style.display = "inline-block";
    icons[i].style.display = "none";
    icons2[i].style.display = "inline-block";
    son = i;
    icon[i].style.fontSize = "16px";
    icon[i].style.color = "#000";
    icon[i].style.fontWeight = "700";
    for (let i = 0; i < data.acc.length; i++) {
      if (son != i) {
        p[i].style.display = "none";
        icons2[i].style.display = "none";
        icons[i].style.display = "inline-block";
      }
    }
  };
}

for (let i = 0; i < data.acc.length; i++) {
  icons2[i].onclick = function () {
    p[i].style.display = "none";
    icons2[i].style.display = "none";
    icons[i].style.display = "inline-block";
    icon[i].style.fontSize = "16px";
    icon[i].style.color = "#47474c";
    icon[i].style.fontWeight = "500";
  };
}
