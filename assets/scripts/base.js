// 이벤트 리스너 실습

const textArea = document.getElementById('txtArea');
const headerA = document.getElementById('headerA');

textArea.addEventListener('keyup', (e) => {
    let length = textArea.value.length;

    headerA.textContent = `글자 수: ${ length }`;
});



const headerB = document.getElementById('headerB');

const keyPrint = (e) => {
    let outValue = `
        <p>alt: ${ e.altKey }</p>
        <p>ctrl: ${ e.ctrlKey }</p>
        <p>shift: ${ e.shiftKey }</p>
        <p>code: ${ typeof(e.code) !== 'undefined' ? e.code : e.keyCode }</p>
    `;

    headerB.innerHTML = outValue;
}

document.addEventListener('keydown', keyPrint);
document.addEventListener('keyup', keyPrint);



// 별 움직이기

const starItem = document.getElementById('headerC');
starItem.style.position = 'absolute';

let [starX, starY] = [0, 0]; // 별 좌표 설정

const moveSpeed = 20;

const printStar = () => {
    starItem.style.top = `${ starY * moveSpeed }px`;
    starItem.style.left = `${ starX * moveSpeed }px`;
}

printStar();

const [moveLeft, moveUp, moveRight, moveDown] = [37, 38, 39, 40];

document.body.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case moveLeft:
            starX -= 1;
            break;

        case moveUp:
            starY -= 1;
            break;

        case moveRight:
            starX += 1;
            break;

        case moveDown:
            starY += 1;
            break;
    }

    printStar();
});



// 이벤트가 발생하는 현재 타겟 = currentTarget, this

// 입력 양식을 기반으로 inch를 cm로 변환

const numInch = document.getElementById('numInch');
const btnInch = document.getElementById('btnInch');
const labelInch = document.getElementById('inchResult');

btnInch.addEventListener('click', () => {
    const inch = Number(numInch.value);

    if (isNaN(inch)) {
        labelInch.textContent = '숫자를 입력해 주세요.';

        return;
    }

    const cm = inch * 2.54;

    labelInch.textContent = `${ cm } cm`;
});



// 섭씨를 화씨로 변환

const numCelsius = document.getElementById('numCelsius');
const btnCelsius = document.getElementById('btnCelsius');
const labelFarenheit = document.getElementById('farenheitResult');

btnCelsius.addEventListener('click', () => {
    const celsius = Number(numCelsius.value);

    if (isNaN(celsius)) {
        labelFarenheit.textContent = '숫자를 입력해 주세요.';

        return;
    }

    const farenheit = (celsius * (9 / 5) + 32);

    labelFarenheit.textContent = `${ farenheit } ℉`;
});



// e-mail 형식 검사 (다시 해야 됨)

const txtMailcheck = document.getElementById('txtMailcheck');
const labelMailcheck = document.getElementById('labelMailcheck');
const isEmail = (textValue) => {
    const mailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if (mailRegex.test(textValue) === true) {
        labelMailcheck.textContent = `올바른 메일 형식입니다. (${ textValue })`;
        labelMailcheck.style.color = 'green';
    } else {
        labelMailcheck.textContent = `메일 형식이 아닙니다. (${ textValue })`;
        labelMailcheck.style.color = 'red';
    }
}



// 드롭다운 메뉴

const slctBoonsik = document.getElementById('slctBoonsik');
const labelBoonsik = document.getElementById('labelBoonsik');

slctBoonsik.addEventListener('change', (event) => {
    const opt = event.currentTarget.options;
    const idx = event.currentTarget.options.selectedIndex;

    labelBoonsik.textContent = `선택: ${ opt[idx].textContent }`
});



// 멀티 셀렉트 (잘 몰라서 소스 코드 참조함. 다시 확인하자)

const slctMulti = document.getElementById('slctMulti');
const labelMulti = document.getElementById('labelMulti');

slctMulti.addEventListener('change', (e) => {
    const options = e.currentTarget.options;
    const list = [];

    for (const option of options) {
        if (option.selected) {
            list.push(option.textContent);
        }
    }

    labelMulti.textContent = `선택: ${ list.join(', ') }`;
});