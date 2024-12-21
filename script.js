function playSound() {
    // รับวันที่และเวลาใน UTC
    const now = new Date();
    const month = now.getUTCMonth();  // เดือน (0-11)
    const day = now.getUTCDate();     // วันที่ (1-31)

    let sound;

    // เลือกเสียงตามเทศกาล
    if (month === 11 && day >= 24) {  // คริสต์มาส (24 ธันวาคมขึ้นไป)
        sound = new Audio('v/santa-claus-merry-christmas-ho-ho-ho-103426.mp3');
    } else if (month === 0 && day <= 7) {  // ปีใหม่ (1-7 มกราคม)
        sound = new Audio('v/Download (online-audio-converter.com).mp3');
    } else if (month === 3 && day >= 13 && day <= 15) {  // สงกรานต์ (13-15 เมษายน)
        sound = new Audio('songkran.mp3');
    } else {
        // เสียงทั่วไปหากไม่อยู่ในช่วงเทศกาลที่กำหนด
        sound = new Audio('v/bubble-popping-229138.mp3');
    }

    // เล่นเสียง
    sound.play();
}