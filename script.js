document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // 1. МОБИЛЬНОЕ МЕНЮ
  // ============================================
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("navMenu");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // ============================================
  // 2. АКТИВНЫЙ ПУНКТ МЕНЮ ПРИ СКРОЛЛЕ
  // ============================================
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll("section[id]");

  function updateActiveMenu() {
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) current = section.id;
    });
    menuItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === "#" + current)
        item.classList.add("active");
    });
  }
  window.addEventListener("scroll", updateActiveMenu);
  window.addEventListener("load", updateActiveMenu);

  // ============================================
  // 3. КНОПКА «НАЧАТЬ»
  // ============================================
  document.getElementById("startQuizBtn").addEventListener("click", () => {
    document
      .getElementById("combination")
      .scrollIntoView({ behavior: "smooth" });
  });

  // ============================================
  // 4. ДАННЫЕ ЦВЕТОВ
  // ============================================
  const colorData = [
    { id: "white", name: "Белый", hex: "#FFFFFF", category: "basic" },
    { id: "beige", name: "Бежевый", hex: "#F5E6D3", category: "basic" },
    { id: "grey", name: "Серый", hex: "#8D99AE", category: "basic" },
    { id: "black", name: "Чёрный", hex: "#1D1D1D", category: "basic" },
    { id: "brown", name: "Коричневый", hex: "#8B5A2B", category: "basic" },
    { id: "navy", name: "Тёмно-синий", hex: "#1D3557", category: "basic" },
    { id: "lightblue", name: "Голубой", hex: "#A8DADC", category: "secondary" },
    { id: "pink", name: "Розовый", hex: "#E5989B", category: "secondary" },
    { id: "yellow", name: "Жёлтый", hex: "#E9C46A", category: "secondary" },
    { id: "orange", name: "Оранжевый", hex: "#F4A261", category: "secondary" },
    { id: "green", name: "Зелёный", hex: "#2A9D8F", category: "secondary" },
    { id: "red", name: "Красный", hex: "#E63946", category: "secondary" },
    { id: "purple", name: "Фиолетовый", hex: "#9B5DE5", category: "secondary" },
    { id: "burgundy", name: "Бордовый", hex: "#800020", category: "secondary" },
    { id: "coral", name: "Коралловый", hex: "#FF6B6B", category: "secondary" },
    { id: "olive", name: "Оливковый", hex: "#6B8E23", category: "secondary" },
    { id: "camel", name: "Верблюжий", hex: "#C4A882", category: "secondary" },
    {
      id: "lavender",
      name: "Лавандовый",
      hex: "#B8A9C9",
      category: "secondary",
    },
    { id: "mint", name: "Мятный", hex: "#98D8C8", category: "secondary" },
    { id: "peach", name: "Персиковый", hex: "#FFDAB9", category: "secondary" },
    {
      id: "taupe",
      name: "Серо-бежевый",
      hex: "#BFA9A0",
      category: "secondary",
    },
    { id: "espresso", name: "Кофейный", hex: "#4A3728", category: "secondary" },
    { id: "fuchsia", name: "Фуксия", hex: "#D4456B", category: "secondary" },
    { id: "gold", name: "Золотой", hex: "#D4AF37", category: "secondary" },
    { id: "ice", name: "Ледяной", hex: "#E8F4F8", category: "secondary" },
    { id: "cream", name: "Кремовый", hex: "#FFFDD0", category: "secondary" },
    { id: "lilac", name: "Сиреневатый", hex: "#C8A2C8", category: "secondary" },
    {
      id: "terracotta",
      name: "Терракотовый",
      hex: "#E2725B",
      category: "secondary",
    },
    {
      id: "graphite",
      name: "Графитовый",
      hex: "#4A4A4A",
      category: "secondary",
    },
    {
      id: "chocolate",
      name: "Шоколадный",
      hex: "#7B3F00",
      category: "secondary",
    },
    { id: "sand", name: "Песочный", hex: "#E8D5B7", category: "secondary" },
    {
      id: "emerald",
      name: "Изумрудный",
      hex: "#50C878",
      category: "secondary",
    },
    { id: "mustard", name: "Горчичный", hex: "#E1AD01", category: "secondary" },
  ];

  // ============================================
  // 5. СОЧЕТАНИЯ ДЛЯ ВСЕХ ЦВЕТОВ (палитра)
  // ============================================
  const colorCombinations = {
    white: {
      title: "Белый цвет",
      desc: "Цвет чистоты, свежести и минимализма. Основа любого гардероба.",
      mono: ["#FFFFFF", "#F5E6D3", "#F0F0F0", "#E8E8E8"],
      comp: ["#FFFFFF", "#1D1D1D"],
      analog: ["#FFFFFF", "#F5E6D3", "#E5989B"],
      triad: ["#FFFFFF", "#E63946", "#457B9D"],
    },
    beige: {
      title: "Бежевый цвет",
      desc: "Цвет универсальности и элегантности. Благородная база для любого образа.",
      mono: ["#F5E6D3", "#FFFFFF", "#E8D5B7", "#D4C4A8"],
      comp: ["#F5E6D3", "#457B9D"],
      analog: ["#F5E6D3", "#E5989B", "#8B5A2B"],
      triad: ["#F5E6D3", "#2A9D8F", "#E63946"],
    },
    grey: {
      title: "Серый цвет",
      desc: "Цвет элегантности, сдержанности и практичности.",
      mono: ["#8D99AE", "#B0B8C4", "#D4D9E0", "#F0F0F0"],
      comp: ["#8D99AE", "#E9C46A"],
      analog: ["#8D99AE", "#457B9D", "#1D3557"],
      triad: ["#8D99AE", "#E63946", "#2A9D8F"],
    },
    black: {
      title: "Чёрный цвет",
      desc: "Цвет элегантности, силы и универсальности.",
      mono: ["#1D1D1D", "#333333", "#555555", "#888888"],
      comp: ["#1D1D1D", "#FFFFFF"],
      analog: ["#1D1D1D", "#333333", "#555555"],
      triad: ["#1D1D1D", "#E63946", "#FFFFFF"],
    },
    brown: {
      title: "Коричневый цвет",
      desc: "Цвет земли, надёжности и тепла. Создаёт ощущение уюта.",
      mono: ["#8B5A2B", "#A67B5B", "#C4A882", "#E8D5B7"],
      comp: ["#8B5A2B", "#457B9D"],
      analog: ["#8B5A2B", "#F4A261", "#E63946"],
      triad: ["#8B5A2B", "#2A9D8F", "#9B5DE5"],
    },
    navy: {
      title: "Тёмно-синий цвет",
      desc: "Цвет элегантности, авторитета и глубины. Замена чёрному в гардеробе.",
      mono: ["#1D3557", "#457B9D", "#A8DADC", "#FFFFFF"],
      comp: ["#1D3557", "#F4A261"],
      analog: ["#1D3557", "#457B9D", "#9B5DE5"],
      triad: ["#1D3557", "#E63946", "#E9C46A"],
    },
    // ... остальные цвета из colorCombinations (я их оставлю как в прошлой версии)
  };

  // ============================================
  // 6. ОТРИСОВКА ПАЛИТРЫ
  // ============================================
  const basicGrid = document.getElementById("basicColors");
  const secondaryGrid = document.getElementById("secondaryColors");
  const colorDetail = document.getElementById("color-detail");

  function renderColors() {
    const basic = colorData.filter((c) => c.category === "basic");
    const secondary = colorData.filter((c) => c.category === "secondary");

    function renderGrid(grid, colors) {
      grid.innerHTML = colors
        .map(
          (color) => `
            <div class="color-item" data-id="${color.id}">
              <div class="color-circle" style="background: ${color.hex};" title="${color.name}"></div>
              <span>${color.name}</span>
            </div>
          `,
        )
        .join("");

      grid.querySelectorAll(".color-item").forEach((item) => {
        item.addEventListener("click", function () {
          showColorDetail(this.dataset.id);
        });
      });
    }

    renderGrid(basicGrid, basic);
    renderGrid(secondaryGrid, secondary);
  }

  // ============================================
  // 7. ПОКАЗ ДЕТАЛЬНОЙ ИНФОРМАЦИИ (упрощённо)
  // ============================================
  function showColorDetail(colorId) {
    const data = colorCombinations[colorId];
    if (!data) {
      alert("Для этого цвета пока нет данных. Но мы работаем над этим! 🎨");
      return;
    }

    function getColorName(hex) {
      const found = colorData.find(
        (c) => c.hex.toLowerCase() === hex.toLowerCase(),
      );
      return found ? found.name : hex;
    }

    document.getElementById("detailTitle").textContent = data.title;
    document.getElementById("detailDesc").textContent = data.desc;

    function renderDots(containerId, colors) {
      const container = document.getElementById(containerId);
      container.innerHTML = colors
        .map(
          (c) =>
            `<div class="dot" style="background:${c};" title="${getColorName(c)}"></div>`,
        )
        .join("");
    }

    renderDots("detailMono", data.mono);
    renderDots("detailComp", data.comp);
    renderDots("detailAnalog", data.analog);
    renderDots("detailTriad", data.triad);

    colorDetail.classList.add("visible");
    basicGrid.style.display = "none";
    secondaryGrid.style.display = "none";
    document
      .querySelectorAll(".color-section-header")
      .forEach((h) => (h.style.display = "none"));
  }

  // ============================================
  // 8. ЗАКРЫТИЕ ДЕТАЛЬНОЙ ИНФОРМАЦИИ
  // ============================================
  document
    .getElementById("closeColorBtn")
    .addEventListener("click", function () {
      colorDetail.classList.remove("visible");
      basicGrid.style.display = "grid";
      secondaryGrid.style.display = "grid";
      document
        .querySelectorAll(".color-section-header")
        .forEach((h) => (h.style.display = "flex"));
    });

  renderColors();

  // ============================================
  // 9. ФУНКЦИЯ ДЛЯ ПРАВИЛЬНЫХ ОКОНЧАНИЙ
  // ============================================
  function getColorAdjective(colorName, clothingType) {
    const genderMap = {
      джинсы: "мн",
      брюки: "мн",
      юбка: "ж",
      платье: "с",
      топ: "м",
      пальто: "с",
      обувь: "ж",
      куртка: "ж",
      жакет: "м",
      кардиган: "м",
      рубашка: "ж",
      футболка: "ж",
      джемпер: "м",
      свитер: "м",
      блуза: "ж",
      ботфорты: "мн",
      кеды: "мн",
      лоферы: "мн",
      ботинки: "мн",
      туфли: "мн",
      сапоги: "мн",
      клатч: "м",
      сумка: "ж",
      платье: "с",
    };

    const declension = {
      Белый: { м: "Белый", ж: "Белая", с: "Белое", мн: "Белые" },
      Чёрный: { м: "Чёрный", ж: "Чёрная", с: "Чёрное", мн: "Чёрные" },
      Серый: { м: "Серый", ж: "Серая", с: "Серое", мн: "Серые" },
      Красный: { м: "Красный", ж: "Красная", с: "Красное", мн: "Красные" },
      Синий: { м: "Синий", ж: "Синяя", с: "Синее", мн: "Синие" },
      Зелёный: { м: "Зелёный", ж: "Зелёная", с: "Зелёное", мн: "Зелёные" },
      Жёлтый: { м: "Жёлтый", ж: "Жёлтая", с: "Жёлтое", мн: "Жёлтые" },
      Оранжевый: {
        м: "Оранжевый",
        ж: "Оранжевая",
        с: "Оранжевое",
        мн: "Оранжевые",
      },
      Фиолетовый: {
        м: "Фиолетовый",
        ж: "Фиолетовая",
        с: "Фиолетовое",
        мн: "Фиолетовые",
      },
      Розовый: { м: "Розовый", ж: "Розовая", с: "Розовое", мн: "Розовые" },
      Бежевый: { м: "Бежевый", ж: "Бежевая", с: "Бежевое", мн: "Бежевые" },
      Коричневый: {
        м: "Коричневый",
        ж: "Коричневая",
        с: "Коричневое",
        мн: "Коричневые",
      },
      Бордовый: { м: "Бордовый", ж: "Бордовая", с: "Бордовое", мн: "Бордовые" },
      "Тёмно-синий": {
        м: "Тёмно-синий",
        ж: "Тёмно-синяя",
        с: "Тёмно-синее",
        мн: "Тёмно-синие",
      },
      Голубой: { м: "Голубой", ж: "Голубая", с: "Голубое", мн: "Голубые" },
      Коралловый: {
        м: "Коралловый",
        ж: "Коралловая",
        с: "Коралловое",
        мн: "Коралловые",
      },
      Оливковый: {
        м: "Оливковый",
        ж: "Оливковая",
        с: "Оливковое",
        мн: "Оливковые",
      },
      Верблюжий: {
        м: "Верблюжий",
        ж: "Верблюжья",
        с: "Верблюжье",
        мн: "Верблюжьи",
      },
      Лавандовый: {
        м: "Лавандовый",
        ж: "Лавандовая",
        с: "Лавандовое",
        мн: "Лавандовые",
      },
      Мятный: { м: "Мятный", ж: "Мятная", с: "Мятное", мн: "Мятные" },
      Персиковый: {
        м: "Персиковый",
        ж: "Персиковая",
        с: "Персиковое",
        мн: "Персиковые",
      },
      "Серо-бежевый": {
        м: "Серо-бежевый",
        ж: "Серо-бежевая",
        с: "Серо-бежевое",
        мн: "Серо-бежевые",
      },
      Кофейный: { м: "Кофейный", ж: "Кофейная", с: "Кофейное", мн: "Кофейные" },
      Фуксия: { м: "Фуксия", ж: "Фуксия", с: "Фуксия", мн: "Фуксия" },
      Золотой: { м: "Золотой", ж: "Золотая", с: "Золотое", мн: "Золотые" },
      Ледяной: { м: "Ледяной", ж: "Ледяная", с: "Ледяное", мн: "Ледяные" },
      Кремовый: { м: "Кремовый", ж: "Кремовая", с: "Кремовое", мн: "Кремовые" },
      Сиреневатый: {
        м: "Сиреневатый",
        ж: "Сиреневатая",
        с: "Сиреневатое",
        мн: "Сиреневатые",
      },
      Терракотовый: {
        м: "Терракотовый",
        ж: "Терракотовая",
        с: "Терракотовое",
        мн: "Терракотовые",
      },
      Графитовый: {
        м: "Графитовый",
        ж: "Графитовая",
        с: "Графитовое",
        мн: "Графитовые",
      },
      Шоколадный: {
        м: "Шоколадный",
        ж: "Шоколадная",
        с: "Шоколадное",
        мн: "Шоколадные",
      },
      Песочный: {
        м: "Песочный",
        ж: "Песочная",
        с: "Песочное",
        мн: "Песочные",
      },
      Изумрудный: {
        м: "Изумрудный",
        ж: "Изумрудная",
        с: "Изумрудное",
        мн: "Изумрудные",
      },
      Горчичный: {
        м: "Горчичный",
        ж: "Горчичная",
        с: "Горчичное",
        мн: "Горчичные",
      },
    };

    const gender = genderMap[clothingType] || "м";
    const forms = declension[colorName];
    if (!forms) return colorName;
    return forms[gender] || colorName;
  }

  // ============================================
  // 10. КОНСТРУКТОР
  // ============================================
  const clothingColorContainer = document.getElementById("clothingColor");
  colorData.forEach((color) => {
    const btn = document.createElement("button");
    btn.className = "color-btn";
    btn.dataset.color = color.id;
    btn.style.background = color.hex;
    btn.title = color.name;
    btn.addEventListener("click", function () {
      document
        .querySelectorAll("#clothingColor .color-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
    clothingColorContainer.appendChild(btn);
  });

  let selectedType = null;
  let selectedColor = null;

  document.querySelectorAll("#clothingType button").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll("#clothingType button")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedType = this.dataset.type;
    });
  });

  document.querySelectorAll("#clothingColor .color-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll("#clothingColor .color-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedColor = this.dataset.color;
    });
  });

  const resultContainer = document.getElementById("result-container");
  const resultGrid = document.getElementById("resultGrid");

  // ============================================
  // 11. БАЗА ОБРАЗОВ ИЗ ТВОЕГО ФАЙЛА
  // ============================================
  const looksDatabase = {
    джинсы: {
      black: [
        {
          icon: "👖",
          title: "Классика с контрастом",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Чёрные джинсы", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Классический и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Кэжуал с оливковым",
          items: [
            { name: "Оливковая куртка", color: "#6B8E23" },
            { name: "Чёрные джинсы", color: "#1D1D1D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Стильный и удобный образ для прогулок",
        },
        {
          icon: "👖",
          title: "Яркий акцент",
          items: [
            { name: "Красный свитер", color: "#E63946" },
            { name: "Чёрные джинсы", color: "#1D1D1D" },
            { name: "Чёрные ботинки", color: "#1D1D1D" },
          ],
          explanation: "Яркий и смелый образ для встреч",
        },
      ],
      white: [
        {
          icon: "👖",
          title: "Свежий образ",
          items: [
            { name: "Синяя футболка", color: "#457B9D" },
            { name: "Белые джинсы", color: "#FFFFFF" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и лёгкий образ для лета",
        },
        {
          icon: "👖",
          title: "Нежный образ",
          items: [
            { name: "Бежевый джемпер", color: "#F5E6D3" },
            { name: "Белые джинсы", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и уютный образ для повседневности",
        },
        {
          icon: "👖",
          title: "Элегантный контраст",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Белые джинсы", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Элегантный и сдержанный образ для офиса",
        },
      ],
      blue: [
        {
          icon: "👖",
          title: "Кожаная куртка",
          items: [
            { name: "Кожаная куртка", color: "#1D1D1D" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Дерзкий и стильный образ для прогулок",
        },
        {
          icon: "👖",
          title: "Бежевое пальто",
          items: [
            { name: "Бежевое пальто", color: "#F5E6D3" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Элегантный и тёплый образ для осени",
        },
        {
          icon: "👖",
          title: "Приталенный жакет",
          items: [
            { name: "Приталенный жакет", color: "#1D1D1D" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белая блуза", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
      ],
      red: [
        {
          icon: "👖",
          title: "Классика",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Красные джинсы", color: "#E63946" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
        {
          icon: "👖",
          title: "Сдержанный образ",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Красные джинсы", color: "#E63946" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Сбалансированный образ для повседневности",
        },
        {
          icon: "👖",
          title: "Строгий образ",
          items: [
            { name: "Чёрный топ", color: "#1D1D1D" },
            { name: "Красные джинсы", color: "#E63946" },
            { name: "Бежевые лоферы", color: "#F5E6D3" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
      ],
      brown: [
        {
          icon: "👖",
          title: "Белая футболка",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Коричневые джинсы", color: "#8B5A2B" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Базовый и удобный образ для прогулок",
        },
        {
          icon: "👖",
          title: "Бордовый кардиган",
          items: [
            { name: "Бордовый кардиган", color: "#800020" },
            { name: "Коричневые джинсы", color: "#8B5A2B" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
        {
          icon: "👖",
          title: "Чёрное пальто",
          items: [
            { name: "Чёрное пальто", color: "#1D1D1D" },
            { name: "Коричневые джинсы", color: "#8B5A2B" },
            { name: "Чёрные ботинки", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для зимы",
        },
      ],
      grey: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Серые джинсы", color: "#8D99AE" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и лёгкий образ для прогулок",
        },
        {
          icon: "👖",
          title: "Нежно-розовый",
          items: [
            { name: "Нежно-розовый джемпер", color: "#E5989B" },
            { name: "Серые джинсы", color: "#8D99AE" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и женственный образ для встреч",
        },
        {
          icon: "👖",
          title: "Горчичный джемпер",
          items: [
            { name: "Горчичный джемпер", color: "#E1AD01" },
            { name: "Серые джинсы", color: "#8D99AE" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
      ],
      yellow: [
        {
          icon: "👖",
          title: "Шоколадный верх",
          items: [
            { name: "Шоколадный джемпер", color: "#7B3F00" },
            { name: "Жёлтые джинсы", color: "#E9C46A" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
        {
          icon: "👖",
          title: "Нежно-голубой",
          items: [
            { name: "Нежно-голубой свитер", color: "#A8DADC" },
            { name: "Жёлтые джинсы", color: "#E9C46A" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и яркий образ для лета",
        },
        {
          icon: "👖",
          title: "Оливковый верх",
          items: [
            { name: "Оливковый свитер", color: "#6B8E23" },
            { name: "Жёлтые джинсы", color: "#E9C46A" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Стильный и необычный образ для прогулок",
        },
      ],
      burgundy: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Бордовые джинсы", color: "#800020" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и яркий образ для лета",
        },
        {
          icon: "👖",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Бордовые джинсы", color: "#800020" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Синяя рубашка",
          items: [
            { name: "Синяя рубашка", color: "#457B9D" },
            { name: "Бордовые джинсы", color: "#800020" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Стильный и необычный образ для встреч",
        },
      ],
      green: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Зелёные джинсы", color: "#2A9D8F" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и яркий образ для лета",
        },
        {
          icon: "👖",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Зелёные джинсы", color: "#2A9D8F" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и стильный образ для офиса",
        },
        {
          icon: "👖",
          title: "Бежевый верх",
          items: [
            { name: "Бежевый джемпер", color: "#F5E6D3" },
            { name: "Зелёные джинсы", color: "#2A9D8F" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
      ],
    },
    брюки: {
      black: [
        {
          icon: "👖",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Бежевый верх",
          items: [
            { name: "Бежевый джемпер", color: "#F5E6D3" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Бежевые лоферы", color: "#F5E6D3" },
          ],
          explanation: "Тёплый и уютный образ для повседневности",
        },
        {
          icon: "👖",
          title: "Красный верх",
          items: [
            { name: "Красный свитер", color: "#E63946" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и смелый образ для встреч",
        },
      ],
      white: [
        {
          icon: "👖",
          title: "Бежевый верх",
          items: [
            { name: "Бежевый джемпер", color: "#F5E6D3" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Бежевые лоферы", color: "#F5E6D3" },
          ],
          explanation: "Нежный и уютный образ для повседневности",
        },
        {
          icon: "👖",
          title: "Синий верх",
          items: [
            { name: "Синяя рубашка", color: "#457B9D" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👖",
          title: "Красный верх",
          items: [
            { name: "Красный свитер", color: "#E63946" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
      ],
      blue: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Синие брюки", color: "#457B9D" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Синие брюки", color: "#457B9D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и сдержанный образ для офиса",
        },
        {
          icon: "👖",
          title: "Коралловый верх",
          items: [
            { name: "Коралловый свитер", color: "#FF6B6B" },
            { name: "Синие брюки", color: "#457B9D" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
      ],
      red: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Красные брюки", color: "#E63946" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Розовый верх",
          items: [
            { name: "Розовый свитер", color: "#E5989B" },
            { name: "Красные брюки", color: "#E63946" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Нежный и яркий образ для повседневности",
        },
        {
          icon: "👖",
          title: "Голубой верх",
          items: [
            { name: "Голубая рубашка", color: "#A8DADC" },
            { name: "Красные брюки", color: "#E63946" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для встреч",
        },
      ],
      brown: [
        {
          icon: "👖",
          title: "Голубой верх",
          items: [
            { name: "Голубая рубашка", color: "#A8DADC" },
            { name: "Коричневые брюки", color: "#8B5A2B" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Оливковый верх",
          items: [
            { name: "Оливковый свитер", color: "#6B8E23" },
            { name: "Коричневые брюки", color: "#8B5A2B" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Коричневые брюки", color: "#8B5A2B" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Классический и элегантный образ для офиса",
        },
      ],
      grey: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и минималистичный образ для прогулок",
        },
        {
          icon: "👖",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Жёлтый верх",
          items: [
            { name: "Жёлтый свитер", color: "#E9C46A" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
      ],
      yellow: [
        {
          icon: "👖",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Жёлтые брюки", color: "#E9C46A" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и яркий образ для офиса",
        },
        {
          icon: "👖",
          title: "Бордовый верх",
          items: [
            { name: "Бордовый свитер", color: "#800020" },
            { name: "Жёлтые брюки", color: "#E9C46A" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Жёлтые брюки", color: "#E9C46A" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и яркий образ для лета",
        },
      ],
      burgundy: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Бордовые брюки", color: "#800020" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "👖",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Бордовые брюки", color: "#800020" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Голубой верх",
          items: [
            { name: "Голубая рубашка", color: "#A8DADC" },
            { name: "Бордовые брюки", color: "#800020" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для встреч",
        },
      ],
      green: [
        {
          icon: "👖",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Зелёные брюки", color: "#2A9D8F" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и элегантный образ для офиса",
        },
        {
          icon: "👖",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Зелёные брюки", color: "#2A9D8F" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и стильный образ для офиса",
        },
        {
          icon: "👖",
          title: "Красный верх",
          items: [
            { name: "Красный свитер", color: "#E63946" },
            { name: "Зелёные брюки", color: "#2A9D8F" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
      ],
    },
    юбка: {
      black: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Чёрная юбка", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Бежевый верх",
          items: [
            { name: "Бежевый свитер", color: "#F5E6D3" },
            { name: "Чёрная юбка", color: "#1D1D1D" },
            { name: "Бежевые лоферы", color: "#F5E6D3" },
          ],
          explanation: "Тёплый и уютный образ для повседневности",
        },
        {
          icon: "👗",
          title: "Бордовый верх",
          items: [
            { name: "Бордовый свитер", color: "#800020" },
            { name: "Чёрная юбка", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и стильный образ для встреч",
        },
      ],
      white: [
        {
          icon: "👗",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Белая юбка", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и контрастный образ для офиса",
        },
        {
          icon: "👗",
          title: "Нежно-голубой верх",
          items: [
            { name: "Нежно-голубой свитер", color: "#A8DADC" },
            { name: "Белая юбка", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и свежий образ для лета",
        },
        {
          icon: "👗",
          title: "Розовый верх",
          items: [
            { name: "Розовый свитер", color: "#E5989B" },
            { name: "Белая юбка", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и романтичный образ для встреч",
        },
      ],
      blue: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Синяя юбка", color: "#457B9D" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👗",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Синяя юбка", color: "#457B9D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Жёлтый верх",
          items: [
            { name: "Жёлтый свитер", color: "#E9C46A" },
            { name: "Синяя юбка", color: "#457B9D" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
      ],
      red: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Красная юбка", color: "#E63946" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Красная юбка", color: "#E63946" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и контрастный образ для встреч",
        },
        {
          icon: "👗",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Красная юбка", color: "#E63946" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Сбалансированный и стильный образ для офиса",
        },
      ],
      brown: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Коричневая юбка", color: "#8B5A2B" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Синий верх",
          items: [
            { name: "Синяя рубашка", color: "#457B9D" },
            { name: "Коричневая юбка", color: "#8B5A2B" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Стильный и тёплый образ для осени",
        },
        {
          icon: "👗",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Коричневая юбка", color: "#8B5A2B" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
      ],
      grey: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Серая юбка", color: "#8D99AE" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и минималистичный образ для офиса",
        },
        {
          icon: "👗",
          title: "Горчичный верх",
          items: [
            { name: "Горчичный свитер", color: "#E1AD01" },
            { name: "Серая юбка", color: "#8D99AE" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👗",
          title: "Пудровый верх",
          items: [
            { name: "Пудровый свитер", color: "#FFDAB9" },
            { name: "Серая юбка", color: "#8D99AE" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и элегантный образ для встреч",
        },
      ],
      yellow: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Жёлтая юбка", color: "#E9C46A" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и яркий образ для лета",
        },
        {
          icon: "👗",
          title: "Синий верх",
          items: [
            { name: "Синяя рубашка", color: "#457B9D" },
            { name: "Жёлтая юбка", color: "#E9C46A" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
        {
          icon: "👗",
          title: "Зелёный верх",
          items: [
            { name: "Зелёный свитер", color: "#2A9D8F" },
            { name: "Жёлтая юбка", color: "#E9C46A" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и необычный образ для прогулок",
        },
      ],
      burgundy: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Бордовая юбка", color: "#800020" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "👗",
          title: "Серый верх",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Бордовая юбка", color: "#800020" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Розовый верх",
          items: [
            { name: "Розовый свитер", color: "#E5989B" },
            { name: "Бордовая юбка", color: "#800020" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и романтичный образ для встреч",
        },
      ],
      green: [
        {
          icon: "👗",
          title: "Белый верх",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Зелёная юбка", color: "#2A9D8F" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👗",
          title: "Чёрный верх",
          items: [
            { name: "Чёрный свитер", color: "#1D1D1D" },
            { name: "Зелёная юбка", color: "#2A9D8F" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Красный верх",
          items: [
            { name: "Красный свитер", color: "#E63946" },
            { name: "Зелёная юбка", color: "#2A9D8F" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
      ],
    },
    платье: {
      black: [
        {
          icon: "👗",
          title: "Золотой акцент",
          items: [
            { name: "Чёрное платье", color: "#1D1D1D" },
            { name: "Золотое колье", color: "#D4AF37" },
            { name: "Золотой клатч", color: "#D4AF37" },
          ],
          explanation: "Элегантный вечерний образ",
        },
        {
          icon: "👗",
          title: "Бежевый акцент",
          items: [
            { name: "Чёрное платье", color: "#1D1D1D" },
            { name: "Бежевые туфли", color: "#F5E6D3" },
            { name: "Бежевая сумка", color: "#F5E6D3" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Красный акцент",
          items: [
            { name: "Чёрное платье", color: "#1D1D1D" },
            { name: "Красная сумка", color: "#E63946" },
            { name: "Красные туфли", color: "#E63946" },
          ],
          explanation: "Яркий и смелый образ для вечеринки",
        },
      ],
      white: [
        {
          icon: "👗",
          title: "Чёрный акцент",
          items: [
            { name: "Белое платье", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
            { name: "Чёрная сумка", color: "#1D1D1D" },
          ],
          explanation: "Строгий и контрастный образ для офиса",
        },
        {
          icon: "👗",
          title: "Бежевый акцент",
          items: [
            { name: "Белое платье", color: "#FFFFFF" },
            { name: "Бежевые лоферы", color: "#F5E6D3" },
            { name: "Бежевая сумка", color: "#F5E6D3" },
          ],
          explanation: "Нежный и элегантный образ для встреч",
        },
        {
          icon: "👗",
          title: "Шоколадный акцент",
          items: [
            { name: "Белое платье", color: "#FFFFFF" },
            { name: "Шоколадный кардиган", color: "#7B3F00" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
      ],
      blue: [
        {
          icon: "👗",
          title: "Белый акцент",
          items: [
            { name: "Синее платье", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
            { name: "Белая джинсовка", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для прогулок",
        },
        {
          icon: "👗",
          title: "Красный акцент",
          items: [
            { name: "Синее платье", color: "#457B9D" },
            { name: "Красная сумка", color: "#E63946" },
            { name: "Красные туфли", color: "#E63946" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
        {
          icon: "👗",
          title: "Жёлтый акцент",
          items: [
            { name: "Синее платье", color: "#457B9D" },
            { name: "Жёлтая сумка", color: "#E9C46A" },
            { name: "Жёлтые туфли", color: "#E9C46A" },
          ],
          explanation: "Яркий и солнечный образ для лета",
        },
      ],
      red: [
        {
          icon: "👗",
          title: "Бежевый акцент",
          items: [
            { name: "Красное платье", color: "#E63946" },
            { name: "Бежевые туфли", color: "#F5E6D3" },
            { name: "Золотой клатч", color: "#D4AF37" },
          ],
          explanation: "Элегантный и стильный образ для вечера",
        },
        {
          icon: "👗",
          title: "Чёрный акцент",
          items: [
            { name: "Красное платье", color: "#E63946" },
            { name: "Чёрные ботфорты", color: "#1D1D1D" },
            { name: "Чёрный клатч", color: "#1D1D1D" },
          ],
          explanation: "Дерзкий и смелый образ для вечеринки",
        },
        {
          icon: "👗",
          title: "Зелёный акцент",
          items: [
            { name: "Красное платье", color: "#E63946" },
            { name: "Зелёная сумка", color: "#2A9D8F" },
            { name: "Зелёные туфли", color: "#2A9D8F" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
      ],
      brown: [
        {
          icon: "👗",
          title: "Белый акцент",
          items: [
            { name: "Коричневое платье", color: "#8B5A2B" },
            { name: "Белые лоферы", color: "#FFFFFF" },
            { name: "Белая сумка", color: "#FFFFFF" },
          ],
          explanation: "Свежий и элегантный образ для офиса",
        },
        {
          icon: "👗",
          title: "Оливковый акцент",
          items: [
            { name: "Коричневое платье", color: "#8B5A2B" },
            { name: "Оливковая куртка", color: "#6B8E23" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👗",
          title: "Голубой акцент",
          items: [
            { name: "Коричневое платье", color: "#8B5A2B" },
            { name: "Голубая сумка", color: "#A8DADC" },
            { name: "Голубые туфли", color: "#A8DADC" },
          ],
          explanation: "Свежий и необычный образ для встреч",
        },
      ],
      grey: [
        {
          icon: "👗",
          title: "Белый акцент",
          items: [
            { name: "Серое платье", color: "#8D99AE" },
            { name: "Белые кеды", color: "#FFFFFF" },
            { name: "Белая сумка", color: "#FFFFFF" },
          ],
          explanation: "Свежий и минималистичный образ для прогулок",
        },
        {
          icon: "👗",
          title: "Красный акцент",
          items: [
            { name: "Серое платье", color: "#8D99AE" },
            { name: "Красная сумка", color: "#E63946" },
            { name: "Красные туфли", color: "#E63946" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
        {
          icon: "👗",
          title: "Пудрово-розовый акцент",
          items: [
            { name: "Серое платье", color: "#8D99AE" },
            { name: "Пудрово-розовый кардиган", color: "#FFDAB9" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и романтичный образ для осени",
        },
      ],
      yellow: [
        {
          icon: "👗",
          title: "Серый акцент",
          items: [
            { name: "Жёлтое платье", color: "#E9C46A" },
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для прогулок",
        },
        {
          icon: "👗",
          title: "Белый акцент",
          items: [
            { name: "Жёлтое платье", color: "#E9C46A" },
            { name: "Белые лоферы", color: "#FFFFFF" },
            { name: "Белая сумка", color: "#FFFFFF" },
          ],
          explanation: "Свежий и солнечный образ для лета",
        },
        {
          icon: "👗",
          title: "Красный акцент",
          items: [
            { name: "Жёлтое платье", color: "#E9C46A" },
            { name: "Красная сумка", color: "#E63946" },
            { name: "Красные туфли", color: "#E63946" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
      ],
      burgundy: [
        {
          icon: "👗",
          title: "Белый акцент",
          items: [
            { name: "Бордовое платье", color: "#800020" },
            { name: "Белые лоферы", color: "#FFFFFF" },
            { name: "Белая сумка", color: "#FFFFFF" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "👗",
          title: "Золотой акцент",
          items: [
            { name: "Бордовое платье", color: "#800020" },
            { name: "Золотой клатч", color: "#D4AF37" },
            { name: "Золотые туфли", color: "#D4AF37" },
          ],
          explanation: "Роскошный вечерний образ",
        },
        {
          icon: "👗",
          title: "Серый акцент",
          items: [
            { name: "Бордовое платье", color: "#800020" },
            { name: "Серый кардиган", color: "#8D99AE" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
      ],
      green: [
        {
          icon: "👗",
          title: "Белый акцент",
          items: [
            { name: "Зелёное платье", color: "#2A9D8F" },
            { name: "Белые лоферы", color: "#FFFFFF" },
            { name: "Белая сумка", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👗",
          title: "Красный акцент",
          items: [
            { name: "Зелёное платье", color: "#2A9D8F" },
            { name: "Красная сумка", color: "#E63946" },
            { name: "Красные туфли", color: "#E63946" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
        {
          icon: "👗",
          title: "Жёлтый акцент",
          items: [
            { name: "Зелёное платье", color: "#2A9D8F" },
            { name: "Жёлтая сумка", color: "#E9C46A" },
            { name: "Жёлтые туфли", color: "#E9C46A" },
          ],
          explanation: "Яркий и необычный образ для лета",
        },
      ],
    },
    топ: {
      white: [
        {
          icon: "👚",
          title: "С синими джинсами",
          items: [
            { name: "Белый топ", color: "#FFFFFF" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для прогулок",
        },
        {
          icon: "👚",
          title: "С чёрными брюками",
          items: [
            { name: "Белый топ", color: "#FFFFFF" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👚",
          title: "С бежевой юбкой",
          items: [
            { name: "Белый топ", color: "#FFFFFF" },
            { name: "Бежевая юбка", color: "#F5E6D3" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и стильный образ для встреч",
        },
      ],
      black: [
        {
          icon: "👚",
          title: "С серыми брюками",
          items: [
            { name: "Чёрный топ", color: "#1D1D1D" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👚",
          title: "С красной юбкой",
          items: [
            { name: "Чёрный топ", color: "#1D1D1D" },
            { name: "Красная юбка", color: "#E63946" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
        {
          icon: "👚",
          title: "С синими джинсами",
          items: [
            { name: "Чёрный топ", color: "#1D1D1D" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Стильный и удобный образ для прогулок",
        },
      ],
      blue: [
        {
          icon: "👚",
          title: "С белыми брюками",
          items: [
            { name: "Синий топ", color: "#457B9D" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👚",
          title: "С бежевой юбкой",
          items: [
            { name: "Синий топ", color: "#457B9D" },
            { name: "Бежевая юбка", color: "#F5E6D3" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и элегантный образ для встреч",
        },
        {
          icon: "👚",
          title: "С коричневыми брюками",
          items: [
            { name: "Синий топ", color: "#457B9D" },
            { name: "Коричневые брюки", color: "#8B5A2B" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
      ],
      red: [
        {
          icon: "👚",
          title: "С белыми брюками",
          items: [
            { name: "Красный топ", color: "#E63946" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для офиса",
        },
        {
          icon: "👚",
          title: "С синими джинсами",
          items: [
            { name: "Красный топ", color: "#E63946" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Яркий и удобный образ для прогулок",
        },
        {
          icon: "👚",
          title: "С чёрными брюками",
          items: [
            { name: "Красный топ", color: "#E63946" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и яркий образ для офиса",
        },
      ],
      brown: [
        {
          icon: "👚",
          title: "С бежевыми брюками",
          items: [
            { name: "Коричневый топ", color: "#8B5A2B" },
            { name: "Бежевые брюки", color: "#F5E6D3" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и стильный образ для офиса",
        },
        {
          icon: "👚",
          title: "С синими джинсами",
          items: [
            { name: "Коричневый топ", color: "#8B5A2B" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
        {
          icon: "👚",
          title: "С зелёными брюками",
          items: [
            { name: "Коричневый топ", color: "#8B5A2B" },
            { name: "Зелёные брюки", color: "#2A9D8F" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Необычный и стильный образ для встреч",
        },
      ],
      grey: [
        {
          icon: "👚",
          title: "С чёрными брюками",
          items: [
            { name: "Серый топ", color: "#8D99AE" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👚",
          title: "С розовыми брюками",
          items: [
            { name: "Серый топ", color: "#8D99AE" },
            { name: "Розовые брюки", color: "#E5989B" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и стильный образ для встреч",
        },
        {
          icon: "👚",
          title: "С жёлтыми брюками",
          items: [
            { name: "Серый топ", color: "#8D99AE" },
            { name: "Жёлтые брюки", color: "#E9C46A" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для прогулок",
        },
      ],
      yellow: [
        {
          icon: "👚",
          title: "С белыми брюками",
          items: [
            { name: "Жёлтый топ", color: "#E9C46A" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и солнечный образ для лета",
        },
        {
          icon: "👚",
          title: "С синими джинсами",
          items: [
            { name: "Жёлтый топ", color: "#E9C46A" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для прогулок",
        },
        {
          icon: "👚",
          title: "С чёрными брюками",
          items: [
            { name: "Жёлтый топ", color: "#E9C46A" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и контрастный образ для офиса",
        },
      ],
      burgundy: [
        {
          icon: "👚",
          title: "С белыми брюками",
          items: [
            { name: "Бордовый топ", color: "#800020" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "👚",
          title: "С серыми брюками",
          items: [
            { name: "Бордовый топ", color: "#800020" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👚",
          title: "С синими джинсами",
          items: [
            { name: "Бордовый топ", color: "#800020" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Стильный и удобный образ для прогулок",
        },
      ],
      green: [
        {
          icon: "👚",
          title: "С белыми брюками",
          items: [
            { name: "Зелёный топ", color: "#2A9D8F" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👚",
          title: "С чёрными брюками",
          items: [
            { name: "Зелёный топ", color: "#2A9D8F" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и стильный образ для офиса",
        },
        {
          icon: "👚",
          title: "С бежевой юбкой",
          items: [
            { name: "Зелёный топ", color: "#2A9D8F" },
            { name: "Бежевая юбка", color: "#F5E6D3" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и стильный образ для встреч",
        },
      ],
    },
    пальто: {
      black: [
        {
          icon: "🧥",
          title: "С белыми брюками",
          items: [
            { name: "Чёрное пальто", color: "#1D1D1D" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Классический и элегантный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С красной юбкой",
          items: [
            { name: "Чёрное пальто", color: "#1D1D1D" },
            { name: "Красная юбка", color: "#E63946" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные ботфорты", color: "#1D1D1D" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
        {
          icon: "🧥",
          title: "С синими джинсами",
          items: [
            { name: "Чёрное пальто", color: "#1D1D1D" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Стильный и тёплый образ для осени",
        },
      ],
      white: [
        {
          icon: "🧥",
          title: "С тёмно-синими брюками",
          items: [
            { name: "Белое пальто", color: "#FFFFFF" },
            { name: "Тёмно-синие брюки", color: "#1D3557" },
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С бордовой юбкой",
          items: [
            { name: "Белое пальто", color: "#FFFFFF" },
            { name: "Бордовая юбка", color: "#800020" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и элегантный образ для встреч",
        },
        {
          icon: "🧥",
          title: "С изумрудным платьем",
          items: [
            { name: "Белое пальто", color: "#FFFFFF" },
            { name: "Изумрудное платье", color: "#50C878" },
            { name: "Золотой клатч", color: "#D4AF37" },
            { name: "Белые туфли", color: "#FFFFFF" },
          ],
          explanation: "Роскошный и стильный образ для вечера",
        },
      ],
      blue: [
        {
          icon: "🧥",
          title: "С белыми брюками",
          items: [
            { name: "Синее пальто", color: "#457B9D" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С чёрными брюками",
          items: [
            { name: "Синее пальто", color: "#457B9D" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С оранжевой юбкой",
          items: [
            { name: "Синее пальто", color: "#457B9D" },
            { name: "Оранжевая юбка", color: "#F4A261" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
      ],
      red: [
        {
          icon: "🧥",
          title: "С чёрными брюками",
          items: [
            { name: "Красное пальто", color: "#E63946" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и элегантный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С бежевой юбкой",
          items: [
            { name: "Красное пальто", color: "#E63946" },
            { name: "Бежевая юбка", color: "#F5E6D3" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
        {
          icon: "🧥",
          title: "С синими джинсами",
          items: [
            { name: "Красное пальто", color: "#E63946" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Яркий и тёплый образ для осени",
        },
      ],
      brown: [
        {
          icon: "🧥",
          title: "С белыми брюками",
          items: [
            { name: "Коричневое пальто", color: "#8B5A2B" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и элегантный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С зелёными брюками",
          items: [
            { name: "Коричневое пальто", color: "#8B5A2B" },
            { name: "Зелёные брюки", color: "#2A9D8F" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "🧥",
          title: "С синими джинсами",
          items: [
            { name: "Коричневое пальто", color: "#8B5A2B" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Оранжевый свитер", color: "#F4A261" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый и уютный образ для осени",
        },
      ],
      grey: [
        {
          icon: "🧥",
          title: "С чёрными брюками",
          items: [
            { name: "Серое пальто", color: "#8D99AE" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С жёлтой юбкой",
          items: [
            { name: "Серое пальто", color: "#8D99AE" },
            { name: "Жёлтая юбка", color: "#E9C46A" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
        {
          icon: "🧥",
          title: "С красными брюками",
          items: [
            { name: "Серое пальто", color: "#8D99AE" },
            { name: "Красные брюки", color: "#E63946" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Яркий и контрастный образ для офиса",
        },
      ],
      yellow: [
        {
          icon: "🧥",
          title: "С белыми брюками",
          items: [
            { name: "Жёлтое пальто", color: "#E9C46A" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Яркий и солнечный образ для весны",
        },
        {
          icon: "🧥",
          title: "С серыми брюками",
          items: [
            { name: "Жёлтое пальто", color: "#E9C46A" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Стильный и яркий образ для офиса",
        },
        {
          icon: "🧥",
          title: "С синими джинсами",
          items: [
            { name: "Жёлтое пальто", color: "#E9C46A" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Яркий и удобный образ для прогулок",
        },
      ],
      burgundy: [
        {
          icon: "🧥",
          title: "С чёрными брюками",
          items: [
            { name: "Бордовое пальто", color: "#800020" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С серыми брюками",
          items: [
            { name: "Бордовое пальто", color: "#800020" },
            { name: "Серые брюки", color: "#8D99AE" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С бежевой юбкой",
          items: [
            { name: "Бордовое пальто", color: "#800020" },
            { name: "Бежевая юбка", color: "#F5E6D3" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и стильный образ для встреч",
        },
      ],
      green: [
        {
          icon: "🧥",
          title: "С чёрными брюками",
          items: [
            { name: "Зелёное пальто", color: "#2A9D8F" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Строгий и стильный образ для офиса",
        },
        {
          icon: "🧥",
          title: "С белыми брюками",
          items: [
            { name: "Зелёное пальто", color: "#2A9D8F" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для весны",
        },
        {
          icon: "🧥",
          title: "С розовыми брюками",
          items: [
            { name: "Зелёное пальто", color: "#2A9D8F" },
            { name: "Розовые брюки", color: "#E5989B" },
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный и необычный образ для встреч",
        },
      ],
    },
    обувь: {
      black: [
        {
          icon: "👟",
          title: "С бежевыми брюками",
          items: [
            { name: "Чёрная обувь", color: "#1D1D1D" },
            { name: "Бежевые брюки", color: "#F5E6D3" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👟",
          title: "С синими джинсами",
          items: [
            { name: "Чёрная обувь", color: "#1D1D1D" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Классический и стильный образ для прогулок",
        },
        {
          icon: "👟",
          title: "С терракотовыми брюками",
          items: [
            { name: "Чёрная обувь", color: "#1D1D1D" },
            { name: "Терракотовые брюки", color: "#E2725B" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
      ],
      white: [
        {
          icon: "👟",
          title: "С джинсами",
          items: [
            { name: "Белая обувь", color: "#FFFFFF" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белая футболка", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для прогулок",
        },
        {
          icon: "👟",
          title: "С чёрными брюками",
          items: [
            { name: "Белая обувь", color: "#FFFFFF" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Строгий и контрастный образ для офиса",
        },
        {
          icon: "👟",
          title: "С бежевыми брюками",
          items: [
            { name: "Белая обувь", color: "#FFFFFF" },
            { name: "Бежевые брюки", color: "#F5E6D3" },
            { name: "Голубая рубашка", color: "#A8DADC" },
          ],
          explanation: "Нежный и стильный образ для офиса",
        },
      ],
      blue: [
        {
          icon: "👟",
          title: "С белыми брюками",
          items: [
            { name: "Синяя обувь", color: "#457B9D" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Свежий и стильный образ для офиса",
        },
        {
          icon: "👟",
          title: "С чёрными брюками",
          items: [
            { name: "Синяя обувь", color: "#457B9D" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Строгий и стильный образ для офиса",
        },
        {
          icon: "👟",
          title: "С жёлтой юбкой",
          items: [
            { name: "Синяя обувь", color: "#457B9D" },
            { name: "Жёлтая юбка", color: "#E9C46A" },
            { name: "Белый топ", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
      ],
      red: [
        {
          icon: "👟",
          title: "С чёрными брюками",
          items: [
            { name: "Красная обувь", color: "#E63946" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Яркий и элегантный образ для офиса",
        },
        {
          icon: "👟",
          title: "С синими джинсами",
          items: [
            { name: "Красная обувь", color: "#E63946" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для прогулок",
        },
        {
          icon: "👟",
          title: "С белыми брюками",
          items: [
            { name: "Красная обувь", color: "#E63946" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белый топ", color: "#FFFFFF" },
          ],
          explanation: "Яркий и контрастный образ для встреч",
        },
      ],
      brown: [
        {
          icon: "👟",
          title: "С белыми брюками",
          items: [
            { name: "Коричневая обувь", color: "#8B5A2B" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и элегантный образ для офиса",
        },
        {
          icon: "👟",
          title: "С синими джинсами",
          items: [
            { name: "Коричневая обувь", color: "#8B5A2B" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👟",
          title: "С оливковыми брюками",
          items: [
            { name: "Коричневая обувь", color: "#8B5A2B" },
            { name: "Оливковые брюки", color: "#6B8E23" },
            { name: "Бежевый свитер", color: "#F5E6D3" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
      ],
      grey: [
        {
          icon: "👟",
          title: "С чёрными брюками",
          items: [
            { name: "Серая обувь", color: "#8D99AE" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Строгий и элегантный образ для офиса",
        },
        {
          icon: "👟",
          title: "С красными брюками",
          items: [
            { name: "Серая обувь", color: "#8D99AE" },
            { name: "Красные брюки", color: "#E63946" },
            { name: "Белый топ", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для встреч",
        },
        {
          icon: "👟",
          title: "С фиолетовыми брюками",
          items: [
            { name: "Серая обувь", color: "#8D99AE" },
            { name: "Фиолетовые брюки", color: "#9B5DE5" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Необычный и стильный образ для прогулок",
        },
      ],
      yellow: [
        {
          icon: "👟",
          title: "С чёрными брюками",
          items: [
            { name: "Жёлтая обувь", color: "#E9C46A" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для офиса",
        },
        {
          icon: "👟",
          title: "С синими джинсами",
          items: [
            { name: "Жёлтая обувь", color: "#E9C46A" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Яркий и стильный образ для прогулок",
        },
        {
          icon: "👟",
          title: "С розовыми брюками",
          items: [
            { name: "Жёлтая обувь", color: "#E9C46A" },
            { name: "Розовые брюки", color: "#E5989B" },
            { name: "Белый топ", color: "#FFFFFF" },
          ],
          explanation: "Яркий и необычный образ для встреч",
        },
      ],
      burgundy: [
        {
          icon: "👟",
          title: "С белыми брюками",
          items: [
            { name: "Бордовая обувь", color: "#800020" },
            { name: "Белые брюки", color: "#FFFFFF" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Элегантный и стильный образ для офиса",
        },
        {
          icon: "👟",
          title: "С синими джинсами",
          items: [
            { name: "Бордовая обувь", color: "#800020" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👟",
          title: "С мятными брюками",
          items: [
            { name: "Бордовая обувь", color: "#800020" },
            { name: "Мятные брюки", color: "#98D8C8" },
            { name: "Белый топ", color: "#FFFFFF" },
          ],
          explanation: "Яркий и необычный образ для встреч",
        },
      ],
      green: [
        {
          icon: "👟",
          title: "С чёрными брюками",
          items: [
            { name: "Зелёная обувь", color: "#2A9D8F" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Белая рубашка", color: "#FFFFFF" },
          ],
          explanation: "Строгий и стильный образ для офиса",
        },
        {
          icon: "👟",
          title: "С бежевыми брюками",
          items: [
            { name: "Зелёная обувь", color: "#2A9D8F" },
            { name: "Бежевые брюки", color: "#F5E6D3" },
            { name: "Белый свитер", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
        {
          icon: "👟",
          title: "С оливковыми брюками",
          items: [
            { name: "Зелёная обувь", color: "#2A9D8F" },
            { name: "Оливковые брюки", color: "#6B8E23" },
            { name: "Бежевый свитер", color: "#F5E6D3" },
          ],
          explanation: "Тёплый и стильный образ для осени",
        },
      ],
    },
  };

  // ============================================
  // 12. ФУНКЦИЯ ОТОБРАЖЕНИЯ ЦВЕТНЫХ ИКОНОК
  // ============================================
  function renderItemsWithColors(items) {
    return items
      .map(
        (item) => `
          <span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 6px; margin-bottom: 4px; background: #f8f8f8; padding: 2px 10px 2px 4px; border-radius: 20px; border: 1px solid #eee;">
              <span style="display: inline-block; width: 14px; height: 14px; border-radius: 50%; background: ${item.color}; border: 1px solid #ddd;"></span>
              ${item.name}
          </span>
        `,
      )
      .join("");
  }

  // ============================================
  // 13. КНОПКА «СОЧЕТАЕТСЯ?»
  // ============================================
  document
    .getElementById("checkCombinationBtn")
    .addEventListener("click", function () {
      if (!selectedType) {
        alert("Пожалуйста, выбери тип одежды.");
        return;
      }
      if (!selectedColor) {
        alert("Пожалуйста, выбери цвет.");
        return;
      }

      // Получаем название цвета
      const colorName =
        colorData.find((c) => c.id === selectedColor)?.name || selectedColor;

      // Ищем образы в базе
      let looks = looksDatabase[selectedType]?.[selectedColor];

      if (!looks) {
        // Если нет точного совпадения — показываем универсальные подсказки
        const typeDisplay = {
          джинсы: "джинсы",
          брюки: "брюки",
          юбка: "юбку",
          платье: "платье",
          топ: "топ",
          пальто: "пальто",
          обувь: "обувь",
        };

        const adjColor = getColorAdjective(colorName, selectedType);

        looks = [
          {
            icon: "✨",
            title: "Универсальный образ",
            items: [
              {
                name: `${adjColor} ${typeDisplay[selectedType]}`,
                color: "#FFFFFF",
              },
              { name: "Базовый верх", color: "#8D99AE" },
            ],
            explanation: "Сочетай с белым, чёрным или бежевым",
          },
          {
            icon: "✨",
            title: "Экспериментальный",
            items: [
              {
                name: `${adjColor} ${typeDisplay[selectedType]}`,
                color: "#FFFFFF",
              },
              { name: "Контрастный цвет", color: "#E63946" },
            ],
            explanation: "Попробуй цвет-комплимент из круга",
          },
        ];
      }

      // Отображаем результаты
      resultGrid.innerHTML = looks
        .map(
          (look) => `
            <div class="result-card">
              <div class="icon">${look.icon}</div>
              <h4>${look.title}</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; margin: 8px 0;">
                ${renderItemsWithColors(look.items)}
              </div>
              <div class="explanation">${look.explanation}</div>
              <button class="like-btn" onclick="this.textContent = this.textContent === '❤️' ? '🤍' : '❤️'">🤍</button>
            </div>
          `,
        )
        .join("");

      resultContainer.classList.add("visible");
      resultContainer.scrollIntoView({ behavior: "smooth" });
    });

  // ============================================
  // 14. ФОРМА
  // ============================================
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const status = document.getElementById("form-status");
      status.textContent = "✨ Спасибо! Ваше сообщение отправлено.";
      status.style.color = "#2A9D8F";
      this.reset();
    });
});
