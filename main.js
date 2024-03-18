let ourBranches = document.getElementById("branches");
console.log(ourBranches);

// Function to get user's preferred language
function getUserLanguage() {
  const navigatorLang = navigator.language || navigator.userLanguage;
  return navigatorLang.substring(0, 2); // Extract first 2 characters (language code)
}

// Function to update content based on language
function updateContent(lang) {
  document.documentElement.lang = lang;

  console.log(lang);

  if (lang == "en") {
    ourBranches.innerHTML += `
    <div class="container">
    <div class="row mb-4">
      <!-- card 1 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">damascus</h1>
          <div class="content-card">
            <div class="mt-3">
              <h4 class="textUl">1- Al-Muhafaza</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>In front of Al-Sham Hotel</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103014</p>
                </li>
              </ul>
            </div>
            <!-- 2 -->
            <div class="mt-3">
              <h4 class="textUl">2- Al Shaalan</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>In front of Gemini Restaurant</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991106001</p>
                </li>
              </ul>
            </div>
            <!-- 3 -->
            <div class="mt-3">
              <h4 class="textUl">3- Kafersousa</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Cham City Center Floor 1</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991106002</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 2 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">Homs</h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl">1- Al-Hamra</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Al-Mala'ab Street</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103006</p>
                </li>
              </ul>
            </div>
            <!-- 2 -->
            <div class="my-5">
              <h4 class="textUl">2- Al-Dablan</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Street</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0944277489</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 3 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">Tartous</h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl">1- Hanano</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Street</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>034-214000</p>
                </li>
              </ul>
            </div>
            <!-- 2 -->
            <div class="my-5">
              <h4 class="textUl">2- Wakalat</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Street</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991113838</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- card 1 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">Hama</h1>
          <div class="content-card">
            <div class="mt-3">
              <h4 class="textUl"> Al-Qalaa</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Abi Al-Fidaa Street</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103009</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 2 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">Latakia</h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl"> American Street</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Awna Building</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103004</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 3 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">Aleppo</h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl"> Mogambo</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Etihad Center</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991106003</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  } else if (lang == "ar") {
    ourBranches.innerHTML += `
    <div class="container">
    <div class="row mb-4">
      <!-- card 1 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">دمشق</h1>
          <div class="content-card">
            <div class="mt-3">


              <h4 class="textUl d-flex flex-row-reverse">
              <span>-1</span>&nbsp
              <span> المحافظة </span>
              </h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>مقابل فندق الشام</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103014</p>
                </li>
              </ul>
            </div>
            <!-- 2 -->
            <div class="mt-3">


              <h4 class="textUl d-flex flex-row-reverse">
              <span>-2</span>&nbsp
              <span> الشعلان </span>
              </h4>

              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>قابل مطعم الجيمني</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991106001</p>
                </li>
              </ul>
            </div>
            <!-- 3 -->
            <div class="mt-3">

              <h4 class="textUl d-flex flex-row-reverse">
              <span>-3</span>&nbsp
              <span> كفرسوسة </span>
              </h4>

              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>مجمع الشام سيتي سنتر</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991106002</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 2 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">حمص  </h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl d-flex flex-row-reverse">
              <span>-1</span>&nbsp
              <span> الحمرا </span>
              </h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>شارع الملعب</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103006</p>
                </li>
              </ul>
            </div>
            <!-- 2 -->
            <div class="my-5">

              <h4 class="textUl d-flex flex-row-reverse">
              <span>-2</span>&nbsp
              <span> الدبلان </span>
              </h4>

              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>الشارع</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0944277489</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 3 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">طرطوس </h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl d-flex flex-row-reverse">
              <span>-1</span>&nbsp
              <span> هنانو </span>
              </h4>

              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>شارع هنانو</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>034-214000</p>
                </li>
              </ul>
            </div>
            <!-- 2 -->
            <div class="my-5">
              <h4 class="textUl d-flex flex-row-reverse">
              <span>-2</span>&nbsp
              <span> الوكالات </span>
              </h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>شارع الوكالات</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991113838</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- card 1 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">حماه </h1>
          <div class="content-card">
            <div class="mt-3">
              <h4 class="textUl"> القلعة </h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>شارع ابي الفداء </p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103009</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 2 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-left">اللاذقية </h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl"> شارع الأميركان</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>المتحف الوطني</p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991103004</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- card 3 -->
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-4">
        <div class="card">
          <h1 class="text-right">حلب </h1>
          <div class="content-card">
            <div class="my-3">
              <h4 class="textUl">موغامبو</h4>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>سنتر الاتحاد </p>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <p>0991106003</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

const userLang = getUserLanguage();
updateContent(userLang);
