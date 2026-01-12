


document.addEventListener("DOMContentLoaded", function () { // انتظار تحميل الصفحة يعني بس تتحمل عناصر htmlالخاصة بالفورم يشتغل الجافا
 
  const form = document.querySelector("#loginForm"); // جلب الفورم من خلال ال id
  if (!form) return;// اذا الفورم  غير موجود نوقف الكود حماية من الاخطاء
   
  //تعريف حقول الادخال
  const email = document.querySelector("#email"); 
  const password = document.querySelector("#password");
 //تعريف لرسائل الخطا
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");

  const formMessage = document.querySelector("#formMessage"); // رسالة النجاح
 //نمط للتحقق من الايميل الدوت الات وهكذا 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  // اخفاء الرسائل بالبداية
  emailError.style.display = "none";
  passwordError.style.display = "none";
  formMessage.style.display = "none";
  
  //لما نرسل الفورم 
  form.addEventListener("submit", function (e) {
    e.preventDefault();//يمنع ارسال الفورم الحقيقي التحكم بالارسال يدويا بعد التحقق
    let isValid = true; //افتراض ان الفورم صحيح اذا صار خطا نخليه فولس

    // التحقق من الايميل
    if (email.value.trim() === "") { // لو الايميل فاضي بحط انه ان فاليد وبظهر رسالة الخطا ونوقف الارسال
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) { // لو الايميل ما طابق ال النمط المعرف فوق نعرض رسالة انه غير صحيح
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      emailError.style.display = "none";
    }

    // التحقق من كلمة المرور
    if (password.value.trim() === "") {
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.value.trim().length < 8) {
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
      passwordError.style.display = "none";
    }

    // بعد التحقق من جميع الحقول
    if (isValid) {
      // عرض رسالة النجاح
      formMessage.textContent = "Login successful!";
      formMessage.style.display = "block";

      // مسح الحقول
      email.value = "";
      password.value = "";
      email.classList.remove("is-valid");
      password.classList.remove("is-valid");

      // اخفاء الرسالة بعد 3 ثواني
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 3000);
    }
  });

  // ازالة الأخطاء أثناء الكتابة
  email.addEventListener("input", () => {
    email.classList.remove("is-invalid");
    emailError.style.display = "none";
  });

  password.addEventListener("input", () => {
    password.classList.remove("is-invalid");
    passwordError.style.display = "none";
  });

  // التحقق عند الخروج من الحقل
  email.addEventListener("blur", () => {
    if (email.value.trim() === "") return;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      emailError.textContent = "Please enter a valid email (example@domain.com)";
      emailError.style.display = "block";
    }
  });
// التحقق عند الخروج من الحقول
  password.addEventListener("blur", () => { // 
    if (password.value.trim() === "") return;
    if (password.value.trim().length < 8) {
      password.classList.add("is-invalid");
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
    }
  });

});
