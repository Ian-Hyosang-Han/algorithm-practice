function solution(age) {

    const currentYear = 2025;
    let birthYear = 0;

    if( age > 0 && age <= 120 ){
        birthYear = currentYear - age + 1;
    } else {
        throw new Error('Age must be between 1 and 120.')
    }
    return birthYear;
}

console.log(solution(40)); // 1986
console.log(solution(23)); // 2003