function play369Game(maxNumber) {
    for (let i = 1; i <= maxNumber; i++) {
        let output = '';
        let number = i;
        let clap = 0;

        // 숫자를 문자열로 변환하여 각 자리수 확인
        while (number > 0) {
            let digit = number % 10;
            if (digit === 3 || digit === 6 || digit === 9) {
                clap++;
            }
            number = Math.floor(number / 10);
        }

        // 출력 결정
        if (clap > 0) {
            output = '짝'.repeat(clap);
        } else {
            output = i;
        }

        console.log(output);
    }
}

// 30까지 369게임 실행
play369Game(30);
