document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  if (!form) return; // مهم: يمنع كسر باقي الصفحات

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // إخفاء الأخطاء بالبداية
  emailError.style.display = "none";
  passwordError.style.display = "none";
 // مراقبة الارسال 
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // هاي بتمنع الارسال التلقائي لحتى نفحص البيانات اولا
    let isValid = true;

    /* نتحقق من الايميل */
    if (email.value.trim() === "") { // اذا الايميل فارغ 
      email.classList.add("is-invalid");// نضيف كلاس بوت ستراب
      emailError.textContent = "Email is required"; // نعرض رسالة الخطا
      emailError.style.display = "block";
      isValid = false;// منع الارسال عشان في خطا

    } else if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      isValid = false;

    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      emailError.style.display = "none";
    }

    /* التحقق من الباسورد */
    if (password.value.trim() === "") {
      password.classList.add("is-invalid");
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;

    } else if (password.value.trim().length < 8) {
      password.classList.add("is-invalid");
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      isValid = false;

    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
      passwordError.style.display = "none";
    }

    /* ارسال الفورم ام لا */
    if (isValid) {
      form.submit();// اذا الايميل صح والباس صح يتم الارسال
    }
  });

  // UX: إزالة الخطأ أثناء الكتابة
  email.addEventListener("input", () => {
    email.classList.remove("is-invalid");
    emailError.style.display = "none";
  });

  password.addEventListener("input", () => {
    password.classList.remove("is-invalid");
    passwordError.style.display = "none";
  });

});
