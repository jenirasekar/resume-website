/**
 * Reads the Chinese introduction sentences aloud using the
 * Web Speech API (SpeechSynthesis).
 */
function speakIntro() {
  // Check for browser support
  if (!("speechSynthesis" in window)) {
    alert("抱歉，您的浏览器不支持语音朗读功能。");
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const text = "你好，我是林樱。我是24计算机的学生。";

  const utterance = new SpeechSynthesisUtterance(text);

  // Set language to Chinese (Mandarin)
  utterance.lang = "zh-CN";
  utterance.rate = 0.95; // Slightly slower for clarity
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  // Try to select a Chinese voice if available
  const voices = window.speechSynthesis.getVoices();
  const chineseVoice = voices.find((v) => v.lang === "zh-CN" || v.lang.startsWith("zh"));
  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Handles form submission.
 * Validates required fields and shows a success message.
 */
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const className = document.getElementById("class").value.trim();
  const studentId = document.getElementById("studentId").value.trim();

  if (!name || !className || !studentId) {
    alert("请填写姓名、班级和学号（必填项）。");
    return false;
  }

  alert(`提交成功！\n\n姓名：${name}\n班级：${className}\n学号：${studentId}`);
  return false;
}

// Preload voices (some browsers load them asynchronously)
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
