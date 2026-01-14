// Interactive form validation logic

document.addEventListener("DOMContentLoaded", function () { // انتظار تحميل الصفحة يعني بس تتحمل عناصر htmlالخاصة بالفورم يشتغل الجافا
 
  const form = document.querySelector("#loginForm"); // جلب الفورم من خلال ال id
  if (!form) return;// اذا الفورم  غير موجود نوقف الكود حماية من الاخطاء
   
  //جلب حقول الادخال
  const email = document.querySelector("#email"); 
  const password = document.querySelector("#password");
 //جلب عناصر رسائل الخطا
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
 //تظهر هاي الرسالة لما يتم تسجيل الدخول بنجاح 
  const formMessage = document.querySelector("#formMessage"); // رسالة النجاح
 //نمط للتحقق من الايميل الدوت الات وهكذا 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  //  يعني لما الصفحة تحمل ما بدي يظهرو اخفاء الرسائل بالبداية
  emailError.style.display = "none";
  passwordError.style.display = "none";
  formMessage.style.display = "none";
  
  //لما نرسل الفورم 
  form.addEventListener("submit", function (e) { //هاد بشتغل لما المستخدم يضغط على لوقان او ما شابهه
    e.preventDefault();//يمنع اعادة تحميل الصفحة وارسال الفورم لحتى اتحك بالتحقق بالبداية
    let isValid = true; //افتراض ان الفورم صحيح اذا صار خطا نخليه فولس

    // التحقق من الايميل
    if (email.value.trim() === "") { // لو الايميل فاضي بحط انه ان فاليد وبظهر رسالة الخطا ونوقف الارسال
      email.classList.remove("is-valid");
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) { // لو كتب الايميل و ما طابق ال النمط المعرف فوق نعرض رسالة انه غير صحيح
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      isValid = false;
    } else {
      email.classList.remove("is-invalid"); // هون لو صحيح الايميل نضيف كلاس نجاح اخضر من البوت
      email.classList.add("is-valid");
      emailError.style.display = "none";
    }

    // التحقق من كلمة المرور
    if (password.value.trim() === "") { //اذا فاضيه  فكلمة المرور غلط ملطوبة لانهاه 
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.value.trim().length < 8) { // اذا كانت اقل من 8 احرف خطا ضعيفة لازم اكبر او مساوية
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      isValid = false;
    } else { // صحيحه تمام نكمل ونظهر انها فاليد
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
      passwordError.style.display = "none";
    }

    // بعد التحقق من جميع الحقول يعني الايميل صحيح والباس يعرض رسالة نجاح
    if (isValid) {
      // عرض رسالة النجاح
      formMessage.textContent = "Login successful!";
      formMessage.style.display = "block";

      // مسح الحقول وتفريغها
      email.value = "";
      password.value = "";
      email.classList.remove("is-valid"); // ازالة للكلاسات 
      password.classList.remove("is-valid");

      // اخفاء الرسالة بعد 3 ثواني
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 3000);
    }
  });

  //  ازالة الأخطاء أثناء الكتابةاول ما المستخدم يبدا يكتب نزيل الرسالة الخطا والكلاس الاحمر
  email.addEventListener("input", () => {
    email.classList.remove("is-invalid");
    emailError.style.display = "none";
  });
// برضو نفس الايميل
  password.addEventListener("input", () => {
    password.classList.remove("is-invalid");
    passwordError.style.display = "none";
  });

  //  التحقق عند الخروج من الحقل
  email.addEventListener("blur", () => {// ا لما المستخدم يطلع منه 
    if (email.value.trim() === "") return;// ذا الايميل مش فاضي
    if (!emailPattern.test(email.value.trim())) { // بس الايميل غلط 
      email.classList.add("is-invalid");
      emailError.textContent = "Please enter a valid email (example@domain.com)"; // نعرضله الخطا
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
