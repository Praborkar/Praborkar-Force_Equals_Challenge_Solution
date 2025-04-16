console.log("🔧 LinkedIn Enhancer Loaded");

const data = {
  companyName: "TechCorp",
  matchScore: 86,
  accountStatus: "Target"
};

// Avoid double injection
if (!document.getElementById("profile-enhancer-widget")) {
  const widget = document.createElement("div");
  widget.id = "profile-enhancer-widget";
  widget.style.cssText = `
    width: 300px;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 9999;
    font-family: sans-serif;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 8px;
  `;

  widget.innerHTML = `
    <strong>${data.companyName}</strong><br/>
    <label>Match Score:</label><br/>
    <progress value="${data.matchScore}" max="100" style="width: 100%;"></progress> ${data.matchScore}<br/><br/>
    <span style="color: white; background: ${data.accountStatus === 'Target' ? 'green' : 'red'}; padding: 5px 10px; border-radius: 5px;">
      ${data.accountStatus}
    </span>
  `;

  document.body.appendChild(widget);
}
