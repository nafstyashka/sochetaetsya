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
    // БАЗОВЫЕ
    { id: "white", name: "Белый", hex: "#F1FAEE", category: "basic" },
    { id: "beige", name: "Бежевый", hex: "#F8EDEB", category: "basic" },
    { id: "grey", name: "Серый", hex: "#8D99AE", category: "basic" },
    { id: "black", name: "Чёрный", hex: "#1D1D1D", category: "basic" },
    { id: "brown", name: "Коричневый", hex: "#8B5A2B", category: "basic" },
    { id: "navy", name: "Тёмно-синий", hex: "#1D3557", category: "basic" },

    // ВТОРИЧНЫЕ
    { id: "lightblue", name: "Голубой", hex: "#A8DADC", category: "secondary" },
    { id: "pink", name: "Розовый", hex: "#E5989B", category: "secondary" },
    { id: "yellow", name: "Жёлтый", hex: "#E9C46A", category: "secondary" },
    { id: "orange", name: "Оранжевый", hex: "#F4A261", category: "secondary" },
    { id: "green", name: "Зелёный", hex: "#2A9D8F", category: "secondary" },
    { id: "red", name: "Красный", hex: "#E63946", category: "secondary" },
    { id: "purple", name: "Фиолетовый", hex: "#9B5DE5", category: "secondary" },
    { id: "burgundy", name: "Бордовый", hex: "#800020", category: "secondary" },

    // НОВЫЕ ЦВЕТА
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
  ];

  // ============================================
  // 5. СОЧЕТАНИЯ ДЛЯ ВСЕХ ЦВЕТОВ (палитра)
  // ============================================
  const colorCombinations = {
    white: {
      title: "Белый цвет",
      desc: "Цвет чистоты, свежести и минимализма. Основа любого гардероба.",
      mono: ["#F1FAEE", "#FFFFFF", "#F8EDEB", "#E8E8E8"],
      comp: ["#F1FAEE", "#1D3557"],
      analog: ["#F1FAEE", "#F8EDEB", "#E5989B"],
      triad: ["#F1FAEE", "#E63946", "#457B9D"],
    },
    beige: {
      title: "Бежевый цвет",
      desc: "Цвет универсальности и элегантности. Благородная база для любого образа.",
      mono: ["#F8EDEB", "#F1FAEE", "#E8D5D0", "#FFFFFF"],
      comp: ["#F8EDEB", "#457B9D"],
      analog: ["#F8EDEB", "#E5989B", "#8B5A2B"],
      triad: ["#F8EDEB", "#2A9D8F", "#E63946"],
    },
    grey: {
      title: "Серый цвет",
      desc: "Цвет элегантности, сдержанности и практичности. Идеальный нейтральный фон.",
      mono: ["#8D99AE", "#B0B8C4", "#D4D9E0", "#F1FAEE"],
      comp: ["#8D99AE", "#E9C46A"],
      analog: ["#8D99AE", "#457B9D", "#1D3557"],
      triad: ["#8D99AE", "#E63946", "#2A9D8F"],
    },
    black: {
      title: "Чёрный цвет",
      desc: "Цвет элегантности, силы и универсальности. Основа любого стильного гардероба.",
      mono: ["#1D1D1D", "#333333", "#555555", "#888888"],
      comp: ["#1D1D1D", "#F1FAEE"],
      analog: ["#1D1D1D", "#333333", "#555555"],
      triad: ["#1D1D1D", "#E63946", "#F1FAEE"],
    },
    brown: {
      title: "Коричневый цвет",
      desc: "Цвет земли, надёжности и тепла. Создаёт ощущение уюта и стабильности.",
      mono: ["#8B5A2B", "#A67B5B", "#C4A882", "#F8EDEB"],
      comp: ["#8B5A2B", "#457B9D"],
      analog: ["#8B5A2B", "#F4A261", "#E63946"],
      triad: ["#8B5A2B", "#2A9D8F", "#9B5DE5"],
    },
    navy: {
      title: "Тёмно-синий цвет",
      desc: "Цвет элегантности, авторитета и глубины. Замена чёрному в гардеробе.",
      mono: ["#1D3557", "#457B9D", "#A8DADC", "#F1FAEE"],
      comp: ["#1D3557", "#F4A261"],
      analog: ["#1D3557", "#457B9D", "#9B5DE5"],
      triad: ["#1D3557", "#E63946", "#E9C46A"],
    },
    lightblue: {
      title: "Голубой цвет",
      desc: "Цвет неба, свежести и лёгкости. Создаёт воздушные и романтичные образы.",
      mono: ["#A8DADC", "#C4E3E8", "#E0F0F2", "#F1FAEE"],
      comp: ["#A8DADC", "#F4A261"],
      analog: ["#A8DADC", "#457B9D", "#2A9D8F"],
      triad: ["#A8DADC", "#E63946", "#E9C46A"],
    },
    pink: {
      title: "Розовый цвет",
      desc: "Цвет нежности, романтики и женственности. Смягчает любой образ и добавляет тепла.",
      mono: ["#E5989B", "#F2BCC0", "#F8E0E2", "#F1FAEE"],
      comp: ["#E5989B", "#2A9D8F"],
      analog: ["#E5989B", "#E63946", "#9B5DE5"],
      triad: ["#E5989B", "#457B9D", "#E9C46A"],
    },
    yellow: {
      title: "Жёлтый цвет",
      desc: "Цвет солнца, радости и счастья. Поднимает настроение и привлекает внимание.",
      mono: ["#E9C46A", "#F4D98C", "#FAE8B5", "#F1FAEE"],
      comp: ["#E9C46A", "#9B5DE5"],
      analog: ["#E9C46A", "#F4A261", "#8B5A2B"],
      triad: ["#E9C46A", "#E63946", "#457B9D"],
    },
    orange: {
      title: "Оранжевый цвет",
      desc: "Цвет тепла, оптимизма и творчества. Добавляет энергии и яркости в образ.",
      mono: ["#F4A261", "#F7BD7A", "#FAD69A", "#F1FAEE"],
      comp: ["#F4A261", "#457B9D"],
      analog: ["#F4A261", "#E63946", "#E9C46A"],
      triad: ["#F4A261", "#2A9D8F", "#9B5DE5"],
    },
    green: {
      title: "Зелёный цвет",
      desc: "Цвет природы, гармонии и обновления. Успокаивает и расслабляет.",
      mono: ["#2A9D8F", "#4ECDC4", "#80DED6", "#A8E6CF"],
      comp: ["#2A9D8F", "#E63946"],
      analog: ["#2A9D8F", "#457B9D", "#E9C46A"],
      triad: ["#2A9D8F", "#9B5DE5", "#F4A261"],
    },
    red: {
      title: "Красный цвет",
      desc: "Цвет страсти, энергии и силы. Привлекает внимание и добавляет уверенности.",
      mono: ["#E63946", "#F2676F", "#F79A9E", "#F8EDEB"],
      comp: ["#E63946", "#2A9D8F"],
      analog: ["#E63946", "#F4A261", "#9B5DE5"],
      triad: ["#E63946", "#457B9D", "#E9C46A"],
    },
    purple: {
      title: "Фиолетовый цвет",
      desc: "Цвет творчества, роскоши и тайны. Добавляет глубины и загадочности.",
      mono: ["#9B5DE5", "#B87FE8", "#D5A8F0", "#F1FAEE"],
      comp: ["#9B5DE5", "#E9C46A"],
      analog: ["#9B5DE5", "#457B9D", "#E5989B"],
      triad: ["#9B5DE5", "#2A9D8F", "#E63946"],
    },
    burgundy: {
      title: "Бордовый цвет",
      desc: "Цвет роскоши, глубины и элегантности. Идеален для осени и зимы.",
      mono: ["#800020", "#A52A2A", "#C94C4C", "#E8C0C0"],
      comp: ["#800020", "#E9C46A"],
      analog: ["#800020", "#E63946", "#9B5DE5"],
      triad: ["#800020", "#2A9D8F", "#F4A261"],
    },
    coral: {
      title: "Коралловый цвет",
      desc: "Яркий, жизнерадостный цвет, который добавляет энергии и свежести в любой образ.",
      mono: ["#FF6B6B", "#FF8E8E", "#FFB3B3", "#FFD9D9"],
      comp: ["#FF6B6B", "#2A9D8F"],
      analog: ["#FF6B6B", "#E63946", "#F4A261"],
      triad: ["#FF6B6B", "#457B9D", "#E9C46A"],
    },
    olive: {
      title: "Оливковый цвет",
      desc: "Цвет спокойствия, природной элегантности и сдержанности.",
      mono: ["#6B8E23", "#8FBC5A", "#B5D68C", "#D9E8C4"],
      comp: ["#6B8E23", "#9B5DE5"],
      analog: ["#6B8E23", "#2A9D8F", "#E9C46A"],
      triad: ["#6B8E23", "#E63946", "#457B9D"],
    },
    camel: {
      title: "Верблюжий цвет",
      desc: "Тёплый, естественный оттенок, который создаёт ощущение уюта и комфорта.",
      mono: ["#C4A882", "#D6BF9E", "#E8D5BA", "#F5EAD6"],
      comp: ["#C4A882", "#457B9D"],
      analog: ["#C4A882", "#8B5A2B", "#F8EDEB"],
      triad: ["#C4A882", "#2A9D8F", "#E63946"],
    },
    lavender: {
      title: "Лавандовый цвет",
      desc: "Нежный, романтичный цвет, который добавляет образу мягкости и воздушности.",
      mono: ["#B8A9C9", "#D1C6D9", "#E6DDE9", "#F3EEF5"],
      comp: ["#B8A9C9", "#E9C46A"],
      analog: ["#B8A9C9", "#9B5DE5", "#E5989B"],
      triad: ["#B8A9C9", "#2A9D8F", "#F4A261"],
    },
    mint: {
      title: "Мятный цвет",
      desc: "Свежий, освежающий цвет, который ассоциируется с лёгкостью и чистотой.",
      mono: ["#98D8C8", "#B8E6D8", "#D8F2E8", "#F0FAF5"],
      comp: ["#98D8C8", "#E63946"],
      analog: ["#98D8C8", "#2A9D8F", "#A8DADC"],
      triad: ["#98D8C8", "#9B5DE5", "#F4A261"],
    },
    peach: {
      title: "Персиковый цвет",
      desc: "Нежный, тёплый и уютный цвет, который создаёт романтичное настроение.",
      mono: ["#FFDAB9", "#FFE4CC", "#FFEDDF", "#FFF6EF"],
      comp: ["#FFDAB9", "#457B9D"],
      analog: ["#FFDAB9", "#F4A261", "#E5989B"],
      triad: ["#FFDAB9", "#2A9D8F", "#9B5DE5"],
    },
    taupe: {
      title: "Серо-бежевый цвет",
      desc: "Элегантный, универсальный цвет, который подходит к любому гардеробу.",
      mono: ["#BFA9A0", "#D1BFB8", "#E3D5D0", "#F5EBE8"],
      comp: ["#BFA9A0", "#E9C46A"],
      analog: ["#BFA9A0", "#8D99AE", "#F8EDEB"],
      triad: ["#BFA9A0", "#E63946", "#457B9D"],
    },
    espresso: {
      title: "Кофейный цвет",
      desc: "Глубокий, насыщенный оттенок, который добавляет образу основательности и стиля.",
      mono: ["#4A3728", "#6B4F3A", "#8D6B4F", "#B08B6B"],
      comp: ["#4A3728", "#A8DADC"],
      analog: ["#4A3728", "#8B5A2B", "#C4A882"],
      triad: ["#4A3728", "#E63946", "#F1FAEE"],
    },
    fuchsia: {
      title: "Фуксия",
      desc: "Яркий, смелый и дерзкий цвет, который привлекает внимание и поднимает настроение.",
      mono: ["#D4456B", "#E06E8A", "#EC97AF", "#F5C0D3"],
      comp: ["#D4456B", "#2A9D8F"],
      analog: ["#D4456B", "#E63946", "#9B5DE5"],
      triad: ["#D4456B", "#E9C46A", "#457B9D"],
    },
    gold: {
      title: "Золотой цвет",
      desc: "Цвет роскоши, богатства и элегантности. Добавляет сияния в любой образ.",
      mono: ["#D4AF37", "#E0C25E", "#ECD685", "#F5EAB0"],
      comp: ["#D4AF37", "#457B9D"],
      analog: ["#D4AF37", "#E9C46A", "#8B5A2B"],
      triad: ["#D4AF37", "#E63946", "#2A9D8F"],
    },
    ice: {
      title: "Ледяной цвет",
      desc: "Цвет свежести, чистоты и прохлады. Создаёт лёгкие, воздушные образы.",
      mono: ["#E8F4F8", "#F0F8FA", "#F5FCFD", "#FFFFFF"],
      comp: ["#E8F4F8", "#F4A261"],
      analog: ["#E8F4F8", "#A8DADC", "#F1FAEE"],
      triad: ["#E8F4F8", "#E63946", "#2A9D8F"],
    },
    cream: {
      title: "Кремовый цвет",
      desc: "Мягкий, тёплый и уютный цвет, который создаёт ощущение комфорта и нежности.",
      mono: ["#FFFDD0", "#FFFEE5", "#FFFFF0", "#FFFFFF"],
      comp: ["#FFFDD0", "#457B9D"],
      analog: ["#FFFDD0", "#F8EDEB", "#E5989B"],
      triad: ["#FFFDD0", "#2A9D8F", "#E63946"],
    },
    lilac: {
      title: "Сиреневатый цвет",
      desc: "Нежный, романтичный и мечтательный цвет, который добавляет образу лёгкости.",
      mono: ["#C8A2C8", "#D8B8D8", "#E8D0E8", "#F5EAF5"],
      comp: ["#C8A2C8", "#E9C46A"],
      analog: ["#C8A2C8", "#9B5DE5", "#E5989B"],
      triad: ["#C8A2C8", "#2A9D8F", "#F4A261"],
    },
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
  // 7. ПОКАЗ ДЕТАЛЬНОЙ ИНФОРМАЦИИ
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
    };

    const gender = genderMap[clothingType] || "м";
    const forms = declension[colorName];
    if (!forms) return colorName;
    return forms[gender] || colorName;
  }

  // ============================================
  // 10. КОНСТРУКТОР С ЦВЕТНЫМИ ИКОНКАМИ
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
  // 11. БАЗА ОБРАЗОВ С ЦВЕТАМИ ДЛЯ КАЖДОЙ ВЕЩИ
  // ============================================
  const looksDatabase = {
    джинсы: {
      blue: [
        {
          icon: "👕",
          title: "Классика",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Вечный образ для прогулок",
        },
        {
          icon: "🧶",
          title: "Уют",
          items: [
            { name: "Серый свитер", color: "#8D99AE" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Тёплый осенний образ",
        },
      ],
      white: [
        {
          icon: "👕",
          title: "Монохром",
          items: [
            { name: "Чёрный топ", color: "#1D1D1D" },
            { name: "Белые джинсы", color: "#F1FAEE" },
            { name: "Чёрные кеды", color: "#1D1D1D" },
          ],
          explanation: "Стильный контраст",
        },
      ],
      black: [
        {
          icon: "👕",
          title: "Кэжуал",
          items: [
            { name: "Белая футболка", color: "#FFFFFF" },
            { name: "Чёрные джинсы", color: "#1D1D1D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Базовый образ на каждый день",
        },
      ],
      burgundy: [
        {
          icon: "👕",
          title: "Осенний",
          items: [
            { name: "Бежевый свитер", color: "#F8EDEB" },
            { name: "Бордовые джинсы", color: "#800020" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Уютный и стильный образ для осени",
        },
      ],
      beige: [
        {
          icon: "👕",
          title: "Элегантный",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Бежевые джинсы", color: "#F8EDEB" },
            { name: "Чёрные лоферы", color: "#1D1D1D" },
          ],
          explanation: "Идеально для офиса и встреч",
        },
      ],
    },
    платье: {
      red: [
        {
          icon: "👗",
          title: "Вечерний",
          items: [
            { name: "Красное платье", color: "#E63946" },
            { name: "Чёрные ботфорты", color: "#1D1D1D" },
            { name: "Золотой клатч", color: "#D4AF37" },
          ],
          explanation: "Идеально для свидания и вечеринок",
        },
      ],
      blue: [
        {
          icon: "👗",
          title: "Кэжуал",
          items: [
            { name: "Синее платье", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
            { name: "Джинсовая куртка", color: "#457B9D" },
          ],
          explanation: "Стильно и удобно для прогулок",
        },
      ],
      black: [
        {
          icon: "👗",
          title: "Коктейльный",
          items: [
            { name: "Чёрное платье", color: "#1D1D1D" },
            { name: "Бежевые туфли", color: "#F8EDEB" },
            { name: "Серебряная сумка", color: "#D4D4D4" },
          ],
          explanation: "Элегантный образ для особого случая",
        },
      ],
    },
    юбка: {
      beige: [
        {
          icon: "👚",
          title: "Элегантный",
          items: [
            { name: "Голубая рубашка", color: "#A8DADC" },
            { name: "Бежевая юбка", color: "#F8EDEB" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Нежный образ для офиса и встреч",
        },
      ],
      black: [
        {
          icon: "👚",
          title: "Строгий",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Чёрная юбка", color: "#1D1D1D" },
            { name: "Бежевые лодочки", color: "#F8EDEB" },
          ],
          explanation: "Классика для деловых встреч",
        },
      ],
    },
    брюки: {
      black: [
        {
          icon: "👔",
          title: "Офисный",
          items: [
            { name: "Белая рубашка", color: "#FFFFFF" },
            { name: "Чёрные брюки", color: "#1D1D1D" },
            { name: "Бежевые лоферы", color: "#F8EDEB" },
          ],
          explanation: "Строгий и элегантный образ",
        },
      ],
      beige: [
        {
          icon: "👔",
          title: "Стильный",
          items: [
            { name: "Голубая рубашка", color: "#A8DADC" },
            { name: "Бежевые брюки", color: "#F8EDEB" },
            { name: "Белые лоферы", color: "#FFFFFF" },
          ],
          explanation: "Свежий и элегантный образ",
        },
      ],
    },
    пальто: {
      navy: [
        {
          icon: "🧥",
          title: "Классический",
          items: [
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Тёмно-синее пальто", color: "#1D3557" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Коричневые ботинки", color: "#8B5A2B" },
          ],
          explanation: "Элегантный образ для осени",
        },
      ],
      beige: [
        {
          icon: "🧥",
          title: "Уютный",
          items: [
            { name: "Белый свитер", color: "#FFFFFF" },
            { name: "Бежевое пальто", color: "#F8EDEB" },
            { name: "Синие джинсы", color: "#457B9D" },
            { name: "Белые кеды", color: "#FFFFFF" },
          ],
          explanation: "Тёплый и стильный лук",
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
              <span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 6px; margin-bottom: 4px; background: #f8f8f8; padding: 2px 8px 2px 4px; border-radius: 20px; border: 1px solid #eee;">
                  <span style="display: inline-block; width: 16px; height: 16px; border-radius: 50%; background: ${item.color}; border: 1px solid #ddd;"></span>
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

      const colorName =
        colorData.find((c) => c.id === selectedColor)?.name || selectedColor;
      const colorAdjective = getColorAdjective(colorName, selectedType);

      let looks = looksDatabase[selectedType]?.[selectedColor];

      if (!looks) {
        const typeDisplay = {
          джинсы: "джинсы",
          брюки: "брюки",
          юбка: "юбку",
          платье: "платье",
          топ: "топ",
          пальто: "пальто",
          обувь: "обувь",
        };

        looks = [
          {
            icon: "✨",
            title: "Универсальный",
            items: [
              {
                name: `${colorAdjective} ${typeDisplay[selectedType]}`,
                color: "#FFFFFF",
              },
              { name: "Базовый верх", color: "#8D99AE" },
            ],
            explanation: "Сочетай с белым, чёрным или бежевым",
          },
          {
            icon: "✨",
            title: "Эксперимент",
            items: [
              {
                name: `${colorAdjective} ${typeDisplay[selectedType]}`,
                color: "#FFFFFF",
              },
              { name: "Контрастный цвет", color: "#E63946" },
            ],
            explanation: "Попробуй цвет-комплимент",
          },
        ];
      }

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
