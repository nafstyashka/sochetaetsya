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
    { id: "white", name: "Белый", hex: "#F1FAEE", category: "basic" },
    { id: "beige", name: "Бежевый", hex: "#F8EDEB", category: "basic" },
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
  ];

  // ============================================
  // 5. БАЗА ЦВЕТОВЫХ СОЧЕТАНИЙ
  // ============================================
  const colorCombinationsData = {
    blue: {
      name: "Синий",
      comp: ["#F4A261", "#E9C46A", "#FFFFFF", "#F8EDEB", "#8D99AE"],
      analog: ["#457B9D", "#A8DADC", "#9B5DE5"],
      triad: ["#E63946", "#E9C46A"],
      season: "Все сезоны",
    },
    red: {
      name: "Красный",
      comp: ["#2A9D8F", "#F1FAEE", "#8D99AE", "#1D3557"],
      analog: ["#E63946", "#F4A261", "#9B5DE5"],
      triad: ["#457B9D", "#E9C46A"],
      season: "Зима, Весна",
    },
    black: {
      name: "Чёрный",
      comp: ["#FFFFFF", "#F1FAEE", "#E9C46A", "#F4A261"],
      analog: ["#1D1D1D", "#333333", "#555555"],
      triad: ["#E63946", "#F1FAEE"],
      season: "Все сезоны",
    },
    white: {
      name: "Белый",
      comp: ["#1D3557", "#8B5A2B", "#E63946", "#2A9D8F"],
      analog: ["#F1FAEE", "#F8EDEB", "#E8E8E8"],
      triad: ["#E63946", "#457B9D"],
      season: "Весна, Лето",
    },
    beige: {
      name: "Бежевый",
      comp: ["#457B9D", "#1D3557", "#8B5A2B", "#E5989B"],
      analog: ["#F8EDEB", "#E8D5D0", "#FFFFFF"],
      triad: ["#2A9D8F", "#E63946"],
      season: "Осень, Зима",
    },
    grey: {
      name: "Серый",
      comp: ["#E9C46A", "#F4A261", "#E63946", "#457B9D"],
      analog: ["#8D99AE", "#B0B8C4", "#D4D9E0"],
      triad: ["#E63946", "#2A9D8F"],
      season: "Все сезоны",
    },
    green: {
      name: "Зелёный",
      comp: ["#E63946", "#F1FAEE", "#F4A261", "#9B5DE5"],
      analog: ["#2A9D8F", "#4ECDC4", "#A8DADC"],
      triad: ["#9B5DE5", "#F4A261"],
      season: "Весна, Лето",
    },
    yellow: {
      name: "Жёлтый",
      comp: ["#9B5DE5", "#1D3557", "#457B9D", "#8B5A2B"],
      analog: ["#E9C46A", "#F4A261", "#FAE8B5"],
      triad: ["#E63946", "#457B9D"],
      season: "Весна, Лето",
    },
    orange: {
      name: "Оранжевый",
      comp: ["#457B9D", "#1D3557", "#2A9D8F", "#9B5DE5"],
      analog: ["#F4A261", "#E63946", "#E9C46A"],
      triad: ["#2A9D8F", "#9B5DE5"],
      season: "Осень",
    },
    purple: {
      name: "Фиолетовый",
      comp: ["#E9C46A", "#F1FAEE", "#2A9D8F", "#F4A261"],
      analog: ["#9B5DE5", "#457B9D", "#E5989B"],
      triad: ["#2A9D8F", "#E63946"],
      season: "Осень, Зима",
    },
    pink: {
      name: "Розовый",
      comp: ["#2A9D8F", "#457B9D", "#8D99AE", "#1D3557"],
      analog: ["#E5989B", "#F2BCC0", "#9B5DE5"],
      triad: ["#457B9D", "#E9C46A"],
      season: "Весна, Лето",
    },
    burgundy: {
      name: "Бордовый",
      comp: ["#E9C46A", "#F8EDEB", "#8D99AE", "#457B9D"],
      analog: ["#800020", "#E63946", "#9B5DE5"],
      triad: ["#2A9D8F", "#F4A261"],
      season: "Осень, Зима",
    },
    brown: {
      name: "Коричневый",
      comp: ["#457B9D", "#F8EDEB", "#E9C46A", "#2A9D8F"],
      analog: ["#8B5A2B", "#A67B5B", "#C4A882"],
      triad: ["#2A9D8F", "#9B5DE5"],
      season: "Осень",
    },
    navy: {
      name: "Тёмно-синий",
      comp: ["#F4A261", "#F1FAEE", "#E9C46A", "#8D99AE"],
      analog: ["#1D3557", "#457B9D", "#A8DADC"],
      triad: ["#E63946", "#E9C46A"],
      season: "Осень, Зима",
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
  // 7. ПОКАЗ ДЕТАЛЬНОЙ ИНФОРМАЦИИ О ЦВЕТЕ
  // ============================================
  function showColorDetail(colorId) {
    const data = colorCombinationsData[colorId];
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

    document.getElementById("detailTitle").textContent = data.name + " цвет";
    document.getElementById("detailDesc").textContent =
      `Сезон: ${data.season || "Все сезоны"}. Сочетается с: ${data.comp.map((c) => getColorName(c)).join(", ")}.`;

    function renderDots(containerId, colors) {
      const container = document.getElementById(containerId);
      container.innerHTML = colors
        .map(
          (c) =>
            `<div class="dot" style="background:${c};" title="${getColorName(c)}"></div>`,
        )
        .join("");
    }

    renderDots("detailMono", data.analog || [data.hex]);
    renderDots("detailComp", data.comp.slice(0, 2));
    renderDots("detailAnalog", data.analog.slice(0, 3));
    renderDots("detailTriad", data.triad || []);

    colorDetail.classList.add("visible");
    basicGrid.style.display = "none";
    secondaryGrid.style.display = "none";
    document
      .querySelectorAll(".color-section-header")
      .forEach((h) => (h.style.display = "none"));
  }

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
  // 8. КОНСТРУКТОР — ОТРИСОВКА ЦВЕТОВ
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
  // 9. ФУНКЦИЯ ДЛЯ ПРАВИЛЬНОГО СОГЛАСОВАНИЯ
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
    };

    const gender = genderMap[clothingType] || "м";
    const forms = declension[colorName];
    return forms ? forms[gender] : colorName;
  }

  // ============================================
  // 10. ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ ЦВЕТНЫХ КРУЖОЧКОВ
  // ============================================
  function renderItemsWithColors(items) {
    return items
      .map(
        (item) => `
            <span style="display: inline-flex; align-items: center; gap: 6px; margin-right: 12px; margin-bottom: 4px; background: #f8f4f0; padding: 4px 10px 4px 6px; border-radius: 20px; font-size: 14px;">
                <span style="display: inline-block; width: 18px; height: 18px; border-radius: 50%; background: ${item.color}; border: 2px solid #e0d6cc; flex-shrink: 0;"></span>
                ${item.name}
            </span>
        `,
      )
      .join("");
  }

  // ============================================
  // 11. ГЕНЕРАЦИЯ УНИКАЛЬНОГО ОТВЕТА ДЛЯ ТИПА ОДЕЖДЫ
  // ============================================
  function generateUniqueLook(colorId, clothingType, colorName) {
    const colorData = colorCombinationsData[colorId];
    if (!colorData) {
      return [
        {
          icon: "✨",
          title: "Стильный образ",
          items: [{ name: `${colorName} ${clothingType}`, color: "#8D99AE" }],
          explanation: "Сочетай с белым, чёрным или бежевым",
        },
      ];
    }

    // Выбираем 2-3 случайных цвета-компаньона
    const compColors = colorData.comp;
    const shuffled = [...compColors].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // Получаем названия цветов по HEX
    const getColorNameByHex = (hex) => {
      const found = colorData.find(
        (c) => c.hex && c.hex.toLowerCase() === hex.toLowerCase(),
      );
      return found ? found.name : hex;
    };

    // Типы вещей для разных категорий одежды
    const clothingItems = {
      джинсы: {
        main: "джинсы",
        top: "топ",
        shoes: "обувь",
        accessory: "аксессуар",
      },
      брюки: {
        main: "брюки",
        top: "рубашка",
        shoes: "обувь",
        accessory: "ремень",
      },
      юбка: { main: "юбка", top: "блузка", shoes: "обувь", accessory: "сумка" },
      платье: {
        main: "платье",
        top: "жакет",
        shoes: "обувь",
        accessory: "украшение",
      },
      топ: {
        main: "топ",
        bottom: "низ",
        shoes: "обувь",
        accessory: "аксессуар",
      },
      пальто: {
        main: "пальто",
        bottom: "брюки",
        shoes: "обувь",
        accessory: "шарф",
      },
      обувь: {
        main: "обувь",
        bottom: "брюки",
        top: "верх",
        accessory: "сумка",
      },
    };

    const items = clothingItems[clothingType] || clothingItems.брюки;
    const colorAdjective = getColorAdjective(colorName, clothingType);

    // Генерируем 3 уникальных образа
    const looks = [];
    const colorNames = selected.map((c) => getColorNameByHex(c));

    // Образ 1: основной
    looks.push({
      icon: "👗",
      title: `${colorAdjective} ${items.main}`,
      items: [
        {
          name: `${colorAdjective} ${items.main}`,
          color: colorData.hex || "#8D99AE",
        },
        { name: `${colorNames[0]} ${items.top || "верх"}`, color: selected[0] },
        { name: `${colorNames[1]} ${items.shoes}`, color: selected[1] },
      ],
      explanation: `${colorData.name} с ${colorNames[0]} и ${colorNames[1]} — гармоничный и стильный образ.`,
    });

    // Образ 2: с акцентом
    looks.push({
      icon: "👗",
      title: `${colorAdjective} ${items.main} с акцентом`,
      items: [
        {
          name: `${colorAdjective} ${items.main}`,
          color: colorData.hex || "#8D99AE",
        },
        { name: `${colorNames[1]} ${items.top || "верх"}`, color: selected[1] },
        {
          name: `${colorNames[2] || colorNames[0]} ${items.accessory || "аксессуар"}`,
          color: selected[2] || selected[0],
        },
      ],
      explanation: `Добавь акцент с помощью ${colorNames[1]} — это придаст образу яркость.`,
    });

    // Образ 3: минималистичный
    looks.push({
      icon: "👗",
      title: `${colorAdjective} ${items.main} (минимализм)`,
      items: [
        {
          name: `${colorAdjective} ${items.main}`,
          color: colorData.hex || "#8D99AE",
        },
        { name: `${colorNames[0]} ${items.top || "верх"}`, color: selected[0] },
      ],
      explanation: `Лаконичное сочетание ${colorData.name} и ${colorNames[0]} для повседневного образа.`,
    });

    return looks;
  }

  // ============================================
  // 12. КНОПКА «СОЧЕТАЕТСЯ?» — УНИКАЛЬНАЯ ГЕНЕРАЦИЯ
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

      const colorId = selectedColor;
      const colorName =
        colorData.find((c) => c.id === colorId)?.name || selectedColor;
      const clothingType = selectedType;

      // Генерируем уникальные образы
      const looks = generateUniqueLook(colorId, clothingType, colorName);

      // Отображаем результат с цветными кружочками
      resultGrid.innerHTML = looks
        .map(
          (look) => `
                <div class="result-card">
                    <div class="icon">${look.icon}</div>
                    <h4>${look.title}</h4>
                    <div class="items" style="display: flex; flex-wrap: wrap; gap: 4px; margin: 8px 0;">
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
  // 13. ФОРМА ОБРАТНОЙ СВЯЗИ
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
