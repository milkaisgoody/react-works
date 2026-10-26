//객체 정의
interface Member{
    name: string, //필수속성 
    age?: number //?때문에 선택 속성

}

//객체 생성
const member1: Member = {
    name: '이강',
    age: 21
}
const member2: Member = {
    name: '안세영',
    age: 24
}

// const memeber3: Member = {age : 33}

//출력
console.log(`이름: ${member1.name}, 나이: ${member1.age}`);
console.log(`이름: ${member2.name}`);
