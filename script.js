const fontsData = [
    { name: "Calligraphia_One.ttf", fontFamily: "CalligraphiaOne", defaultText: "Aa" },
    { name: "Allegretto_Script_Two_Regular.ttf", fontFamily: "AllegrettoScriptTwo", defaultText: "Aa" },
    { name: "Allegretto_Script_One_Regular.ttf", fontFamily: "AllegrettoScriptOne", defaultText: "Aa" },
    { name: "AllegroScript_Italic.otf", fontFamily: "AllegroScriptItalic", defaultText: "Aa" },
    { name: "Segoe_Script.ttf", fontFamily: "SegoeScript", defaultText: "Aa" },
    { name: "Brock_Script_D.ttf", fontFamily: "BrockScriptD", defaultText: "Aa" },
    { name: "Discipuli_Britannica.ttf", fontFamily: "DiscipuliBritannica", defaultText: "Aa" },
    { name: "PresentScript.ttf", fontFamily: "PresentScript", defaultText: "Aa" },
    { name: "Euroscript_Pro.otf", fontFamily: "EuroscriptPro", defaultText: "Aa" },
    { name: "Lovely_Grace_BG.ttf", fontFamily: "LovelyGrace", defaultText: "Aa" },
    { name: "A_Day_Without_Sun.otf", fontFamily: "ADayWithoutSun", defaultText: "Aa" },
    
    // Добавленные новые шрифты
    { name: "Ancient_Kyiv.ttf", fontFamily: "AncientKyiv", defaultText: "Aa" },
    { name: "AA-Higherup.ttf", fontFamily: "AAHigherup", defaultText: "Aa" },
    { name: "Ahellya_Italic.ttf", fontFamily: "AhellyaItalic", defaultText: "Aa" },
    { name: "Ambassadore_Type_Shura.ttf", fontFamily: "AmbassadoreTypeShura", defaultText: "Aa" },
    { name: "AmbassadoreType_Italic.ttf", fontFamily: "AmbassadoreTypeItalic", defaultText: "Aa" },
    { name: "Antique_Olive_Italic.ttf", fontFamily: "AntiqueOliveItalic", defaultText: "Aa" },
    { name: "Ubuntu_Mono_Bold.ttf", fontFamily: "UbuntuMonoBold", defaultText: "Aa" },
    { name: "VDS_Bold.ttf", fontFamily: "VDSBold", defaultText: "Aa" },
    { name: "Vera_Humana_95_BoldItalic.ttf", fontFamily: "VeraHumana95BoldItalic", defaultText: "Aa" },
    { name: "VDS_Italic.ttf", fontFamily: "VDSItalic", defaultText: "Aa" },
    { name: "VDS_Italic_New.ttf", fontFamily: "VDSItalicNew", defaultText: "Aa" },
    { name: "VDS_New.ttf", fontFamily: "VDSNew", defaultText: "Aa" },
    { name: "VDS_Thin.ttf", fontFamily: "VDSThin", defaultText: "Aa" },
    { name: "VDS_Thin_Italic.ttf", fontFamily: "VDSThinItalic", defaultText: "Aa" },
    { name: "Vodafone_ExB.ttf", fontFamily: "VodafoneExB", defaultText: "Aa" },
    { name: "Vodafone_Rg_Bold.ttf", fontFamily: "VodafoneRgBold", defaultText: "Aa" },
    { name: "Watc.TTF", fontFamily: "Watc", defaultText: "Aa" },
    { name: "Aroania.otf", fontFamily: "Aroania", defaultText: "Aa" },
    { name: "Autoradiographic_Rg_Italic.ttf", fontFamily: "AutoradiographicRgItalic", defaultText: "Aa" },
    { name: "Avdira.otf", fontFamily: "Avdira", defaultText: "Aa" },
    { name: "Aver_Bold_Italic.ttf", fontFamily: "AverBoldItalic", defaultText: "Aa" },
    { name: "Azbuka02_Italic.ttf", fontFamily: "Azbuka02Italic", defaultText: "Aa" },
    { name: "BodoniCyrillicFWF_Bold_Italic.ttf", fontFamily: "BodoniCyrillicFWFBoldItalic", defaultText: "Aa" },
    { name: "Blogger_Sans_Medium_Regular.otf", fontFamily: "BloggerSansMediumRegular", defaultText: "Aa" },
    { name: "Book_Antiqua_Italic.ttf", fontFamily: "BookAntiquaItalic", defaultText: "Aa" },
    { name: "Brill_Roman.otf", fontFamily: "BrillRoman", defaultText: "Aa" },
    { name: "Bravo_Regular.otf", fontFamily: "BravoRegular", defaultText: "Aa" },
    { name: "Candara_Italic.ttf", fontFamily: "CandaraItalic", defaultText: "Aa" },
    { name: "Century_Gothic_Italic.ttf", fontFamily: "CenturyGothicItalic", defaultText: "Aa" },
    { name: "Century_Schoolbook_Italic.otf", fontFamily: "CenturySchoolbookItalic", defaultText: "Aa" },
    { name: "Century_Schoolbook_Bold.otf", fontFamily: "CenturySchoolbookBold", defaultText: "Aa" },
    { name: "Champagne_&_Limousines.ttf", fontFamily: "ChampagneLimousines", defaultText: "Aa" },
    { name: "Courier_New_Bold.ttf", fontFamily: "CourierNewBold", defaultText: "Aa" },
    { name: "CourierMCY_Bold.ttf", fontFamily: "CourierMCYBold", defaultText: "Aa" },
    { name: "CourierTM_Bold_Italic.ttf", fontFamily: "CourierTMBoldItalic", defaultText: "Aa" },
    { name: "CyrillicGaramond_Italic.ttf", fontFamily: "CyrillicGaramondItalic", defaultText: "Aa" },
    { name: "DejaVu_Sans_Mono_Oblique.ttf", fontFamily: "DejaVuSansMonoOblique", defaultText: "Aa" },
    { name: "Driver_Gothic_Pro_Regular.otf", fontFamily: "DriverGothicProRegular", defaultText: "Aa" },
    { name: "Droid_Sans_Bold.ttf", fontFamily: "DroidSansBold", defaultText: "Aa" },
    { name: "ElementaCyr-Bold.otf", fontFamily: "ElementaCyrBold", defaultText: "Aa" },
    { name: "ElementaCyr-BoldItalicSC.otf", fontFamily: "ElementaCyrBoldItalicSC", defaultText: "Aa" },
    { name: "ER_Kurier_1251_Bold_Italic.ttf", fontFamily: "ERKurier1251BoldItalic", defaultText: "Aa" },
    { name: "Eurofurence_Italic.ttf", fontFamily: "EurofurenceItalic", defaultText: "Aa" },
    { name: "Excelsior_LT_Std_Italic.otf", fontFamily: "ExcelsiorLTStdItalic", defaultText: "Aa" },
    { name: "Exo_2_Extra_Light_Italic.otf", fontFamily: "Exo2ExtraLightItalic", defaultText: "Aa" },
    { name: "Exo_2_Medium_Italic.otf", fontFamily: "Exo2MediumItalic", defaultText: "Aa" },
    { name: "FagotCondensed.ttf", fontFamily: "FagotCondensed", defaultText: "Aa" },
    { name: "FagotCondensed_Italic.ttf", fontFamily: "FagotCondensedItalic", defaultText: "Aa" },
    { name: "Gabriela_Regular.ttf", fontFamily: "GabrielaRegular", defaultText: "Aa" },
    { name: "Humnst777_TL_Bold_Italic.ttf", fontFamily: "Humnst777TLBoldItalic", defaultText: "Aa" },
    { name: "Kovanovic_Cirilica_Stampana.ttf", fontFamily: "KovanovicCirilicaStampana", defaultText: "Aa" },
    { name: "League_Gothic_Cyrillic.ttf", fontFamily: "LeagueGothicCyrillic", defaultText: "Aa" },
    { name: "Ropa_Sans_SC_Italic.otf", fontFamily: "RopaSansSCItalic", defaultText: "Aa" },
    { name: "Yiggivoo_Unicode.ttf", fontFamily: "YiggivooUnicode", defaultText: "Aa" },
    { name: "Yiggivoo_Unicode__Italic.ttf", fontFamily: "YiggivooUnicodeItalic", defaultText: "Aa" }
];

let currentIndex = 0;
let currentHue = 0;
let currentBrightness = 100;
let currentAlignment = 'center';
let generatedDataUrl = null; 

const fontPreview = document.getElementById('fontPreview');
const fontName = document.getElementById('fontName');
const textInput = document.getElementById('textInput');
const sizeSlider = document.getElementById('sizeSlider');
const sizeLabel = document.getElementById('sizeLabel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const applyBtn = document.getElementById('applyBtn');
const alignButtons = document.querySelectorAll('.align-btn');

const paletteBtn = document.getElementById('paletteBtn');
const colorPanel = document.getElementById('colorPanel');
const colorSlider = document.getElementById('colorSlider');
const brightnessSlider = document.getElementById('brightnessSlider');
const brightLabel = document.getElementById('brightLabel');
const indicator = document.getElementById('indicator');

const searchBtn = document.getElementById('searchBtn');
const searchPanel = document.getElementById('searchPanel');
const fontSearchInput = document.getElementById('fontSearchInput');
const searchResults = document.getElementById('searchResults');

const downloadModal = document.getElementById('downloadModal');
const confirmDownloadBtn = document.getElementById('confirmDownloadBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function updateSlider(index) {
    const currentFont = fontsData[index];
    fontName.textContent = currentFont.name;
    fontPreview.style.fontFamily = currentFont.fontFamily;
    
    if (textInput.value.trim() === "") {
        fontPreview.textContent = currentFont.defaultText;
    } else {
        fontPreview.textContent = textInput.value;
    }
}

function updateTextColor() {
    const hslColor = `hsl(${currentHue}, 100%, ${currentBrightness}%)`;
    fontPreview.style.color = hslColor;
    indicator.style.backgroundColor = hslColor;
    brightnessSlider.style.background = `linear-gradient(to right, #000000, hsl(${currentHue}, 100%, 50%), #ffffff)`;
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('active');
    searchPanel.classList.toggle('open');
    if (searchPanel.classList.contains('open')) {
        fontSearchInput.value = '';
        renderSearchResults('');
        fontSearchInput.focus();
    }
});

fontSearchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
});

function renderSearchResults(query) {
    searchResults.innerHTML = '';
    const filtered = fontsData.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
    
    if (filtered.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'search-item';
        noResult.style.color = '#636370';
        noResult.textContent = 'Ничего не найдено';
        searchResults.appendChild(noResult);
        return;
    }

    filtered.forEach(font => {
        const item = document.createElement('div');
        item.className = 'search-item';
        item.textContent = font.name;
        item.addEventListener('click', () => {
            currentIndex = fontsData.indexOf(font);
            updateSlider(currentIndex);
            searchBtn.classList.remove('active');
            searchPanel.classList.remove('open');
        });
        searchResults.appendChild(item);
    });
}

paletteBtn.addEventListener('click', () => {
    paletteBtn.classList.toggle('active');
    colorPanel.classList.toggle('open');
});

colorSlider.addEventListener('input', (e) => {
    currentHue = e.target.value;
    updateTextColor();
});

brightnessSlider.addEventListener('input', (e) => {
    currentBrightness = e.target.value;
    brightLabel.textContent = `${currentBrightness}%`;
    updateTextColor();
});

sizeSlider.addEventListener('input', (e) => {
    const currentSize = e.target.value;
    fontPreview.style.fontSize = `${currentSize}px`;
    sizeLabel.textContent = `${currentSize}px`;
});

textInput.addEventListener('input', () => {
    updateSlider(currentIndex);
});

alignButtons.forEach(button => {
    button.addEventListener('click', () => {
        alignButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); 
        currentAlignment = button.getAttribute('data-align');
        fontPreview.style.textAlign = currentAlignment;
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? fontsData.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === fontsData.length - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
});

// ТОЧНАЯ ГЕНЕРАЦИЯ И АБСОЛЮТНО РАБОЧЕЕ ОКНО СКАЧИВАНИЯ
applyBtn.addEventListener('click', () => {
    const textToRender = fontPreview.textContent;
    const activeFont = fontsData[currentIndex];
    const userSize = parseInt(sizeSlider.value);
    
    const scaleFactor = 5; 
    const basePadding = 40; 
    const canvasPadding = basePadding * scaleFactor; 

    const previewRect = fontPreview.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(fontPreview);
    
    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
    const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
    const previewTextWidth = previewRect.width - paddingLeft - paddingRight;

    document.fonts.ready.then(() => {
        const testCanvas = document.createElement('canvas');
        const testCtx = testCanvas.getContext('2d');
        const fontSize = userSize * scaleFactor;
        testCtx.font = `${fontSize}px "${activeFont.fontFamily}"`;

        const maxCanvasTextWidth = previewTextWidth * scaleFactor;

        const lines = [];
        const paragraphs = textToRender.split('\n');

        paragraphs.forEach(paragraph => {
            const words = paragraph.split(' ');
            let currentLine = '';

            words.forEach(word => {
                let testLine = currentLine + (currentLine ? ' ' : '') + word;
                let metrics = testCtx.measureText(testLine);

                if (metrics.width <= maxCanvasTextWidth) {
                    currentLine = testLine;
                } else {
                    if (testCtx.measureText(word).width > maxCanvasTextWidth) {
                        for (let i = 0; i < word.length; i++) {
                            let char = word[i];
                            let testCharLine = currentLine + (currentLine && i === 0 ? ' ' : '') + char;
                            
                            if (testCtx.measureText(testCharLine).width <= maxCanvasTextWidth) {
                                currentLine = testCharLine;
                            } else {
                                if (currentLine) lines.push(currentLine);
                                currentLine = char;
                            }
                        }
                    } else {
                        if (currentLine) lines.push(currentLine);
                        currentLine = word;
                    }
                }
            });
            if (currentLine) lines.push(currentLine);
        });

        const lineHeight = fontSize * 1.5;
        const bottomBuffer = fontSize * 0.8; 
        const totalTextHeight = (lines.length * lineHeight) + bottomBuffer;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = maxCanvasTextWidth + (canvasPadding * 2);
        canvas.height = totalTextHeight + (canvasPadding * 2);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px "${activeFont.fontFamily}"`;
        ctx.fillStyle = `hsl(${currentHue}, 100%, ${currentBrightness}%)`;
        ctx.textBaseline = 'top'; 

        let xPos = canvasPadding;
        if (currentAlignment === 'center') {
            ctx.textAlign = 'center';
            xPos = canvas.width / 2;
        } else if (currentAlignment === 'right') {
            ctx.textAlign = 'right';
            xPos = canvas.width - canvasPadding;
        } else {
            ctx.textAlign = 'left';
        }

        let yPos = canvasPadding;
        lines.forEach(line => {
            ctx.fillText(line, xPos, yPos);
            yPos += lineHeight;
        });

        generatedDataUrl = canvas.toDataURL("image/png");

        const modalBox = downloadModal.querySelector('div');
        
        let previewImg = document.getElementById('finalMobileImage');
        if (!previewImg) {
            previewImg = document.createElement('img');
            previewImg.id = 'finalMobileImage';
            previewImg.style.width = '100%';
            previewImg.style.maxHeight = '180px';
            previewImg.style.objectFit = 'contain';
            previewImg.style.borderRadius = '10px';
            previewImg.style.marginBottom = '15px';
            previewImg.style.border = '1px dashed rgba(255,255,255,0.3)';
            previewImg.style.backgroundColor = 'rgba(0,0,0,0.2)';
            modalBox.insertBefore(previewImg, confirmDownloadBtn);
        }
        previewImg.src = generatedDataUrl;

        const textDesc = modalBox.querySelector('p');
        if (textDesc) {
            textDesc.innerHTML = 'Нажмите «Скачать PNG».<br><strong style="color: #ffcc00; display: block; margin-top: 8px; font-size: 13px;">Если кнопка не работает (iPhone/Google chrome) — попробуйте другой браузер (Safari) или просто зажмите картинку ниже пальцем и выберите «Сохранить в Фото».</strong>';
        }

        downloadModal.style.display = 'flex';

        closeModalBtn.onclick = () => {
            downloadModal.style.display = 'none';
        };
    });
});

confirmDownloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!generatedDataUrl) return;

    const filename = `font_${Date.now()}.png`;

    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = generatedDataUrl;
    link.setAttribute('download', filename);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Инициализация при старте
updateSlider(currentIndex);
updateTextColor();